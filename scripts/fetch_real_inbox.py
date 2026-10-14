import os
import requests
import json

token = "IGAAdVWvCEyhpBZAGFDVmU5RFRMZAllWNFVON0VTOWtpYWJDQnpWbGpJZAEcwWEtoTklkdVFvRGQ0MlBsZAmZAPSmpfcEc5VEJnbXBOOVk4WlEwVXAycGs2cll5QXh5SVVScFptdUtNU2wyeG9EMWYyc0tOTFRNQkIwUi0yXzVzTUFHNAZDZD"
headers = {"Authorization": f"Bearer {token}"}

conv_url = "https://graph.instagram.com/v21.0/me/conversations?fields=id,updated_time&limit=10"
res = requests.get(conv_url, headers=headers)
convs = res.json().get("data", [])

results = []

for c in convs:
    cid = c["id"]
    updated = c.get("updated_time")
    msg_url = f"https://graph.instagram.com/v21.0/{cid}?fields=participants,messages{{id,message,from,created_time}}"
    m_res = requests.get(msg_url, headers=headers)
    m_data = m_res.json()
    
    parts = m_data.get("participants", {}).get("data", [])
    messages = m_data.get("messages", {}).get("data", [])
    
    # Identify the customer (not sreee._.ram)
    customer = None
    for p in parts:
        uname = p.get("username")
        if uname and uname != "sreee._.ram":
            customer = uname
            break
        elif p.get("id") and p.get("id") != "17841445961158125" and not customer:
            customer = p.get("username", p.get("id"))
            
    if not customer and parts:
        customer = parts[0].get("username", "user")

    clean_msgs = []
    for m in messages:
        txt = m.get("message")
        if txt and txt.strip():
            sender = m.get("from", {}).get("username")
            is_bot = (sender == "sreee._.ram")
            clean_msgs.append({
                "from": "bot" if is_bot else "user",
                "text": txt.strip(),
                "time": m.get("created_time")
            })

    if clean_msgs:
        results.append({
            "conv_id": cid,
            "customer": customer,
            "updated": updated,
            "messages": clean_msgs
        })

print(f"Total conversations with text messages: {len(results)}")
for r in results:
    print(f"\nCustomer: @{r['customer']} ({len(r['messages'])} msgs)")
    for m in r['messages'][:4]:
        print(f"  {m['from']}: {m['text'][:80]}")
