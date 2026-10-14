import os
import requests
import json

token = "IGAAdVWvCEyhpBZAGFDVmU5RFRMZAllWNFVON0VTOWtpYWJDQnpWbGpJZAEcwWEtoTklkdVFvRGQ0MlBsZAmZAPSmpfcEc5VEJnbXBOOVk4WlEwVXAycGs2cll5QXh5SVVScFptdUtNU2wyeG9EMWYyc0tOTFRNQkIwUi0yXzVzTUFHNAZDZD"
headers = {"Authorization": f"Bearer {token}"}

# Fetch top 5 conversations
conv_url = "https://graph.instagram.com/v21.0/me/conversations?fields=id,updated_time&limit=5"
res = requests.get(conv_url, headers=headers)
convs = res.json().get("data", [])

print(f"Found {len(convs)} real conversations on @sreee._.ram:")

for c in convs:
    cid = c["id"]
    updated = c.get("updated_time")
    # Fetch messages and participants
    msg_url = f"https://graph.instagram.com/v21.0/{cid}?fields=participants,messages{{id,message,from,created_time}}"
    m_res = requests.get(msg_url, headers=headers)
    m_data = m_res.json()
    
    parts = m_data.get("participants", {}).get("data", [])
    part_names = [p.get("username", p.get("id")) for p in parts]
    
    messages = m_data.get("messages", {}).get("data", [])
    print(f"\n--- Conversation {cid} (Updated: {updated}) ---")
    print(f"Participants: {part_names}")
    print(f"Messages count: {len(messages)}")
    for m in messages[:5]:
        sender = m.get("from", {}).get("username", m.get("from", {}).get("id"))
        text = m.get("message")
        t = m.get("created_time")
        print(f"  [{t}] {sender}: {text}")
