import os
import requests
import json

token = os.environ.get("IG_ACCESS_TOKEN", "IGAAdVWvCEyhpBZAGFDVmU5RFRMZAllWNFVON0VTOWtpYWJDQnpWbGpJZAEcwWEtoTklkdVFvRGQ0MlBsZAmZAPSmpfcEc5VEJnbXBOOVk4WlEwVXAycGs2cll5QXh5SVVScFptdUtNU2wyeG9EMWYyc0tOTFRNQkIwUi0yXzVzTUFHNAZDZD")

headers = {"Authorization": f"Bearer {token}"}

res = requests.get("https://graph.instagram.com/me/media?fields=id,caption,comments_count", headers=headers)
media_items = res.json().get("data", [])

print(f"Total media items: {len(media_items)}")
for m in media_items:
    mid = m["id"]
    count = m.get("comments_count", 0)
    print(f"\nMedia {mid} (Comments: {count}):")
    if count > 0:
        c_res = requests.get(f"https://graph.instagram.com/{mid}/comments?fields=id,text,timestamp,from,username", headers=headers)
        for c in c_res.json().get("data", []):
            f = c.get("from", {})
            u = f.get("username") or c.get("username") or "unknown"
            uid = f.get("id")
            txt = c.get("text")
            print(f"  Comment {c.get('id')} by @{u} (ID: {uid}): '{txt}'")
