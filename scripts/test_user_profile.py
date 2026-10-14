import os
import requests

token = "IGAAdVWvCEyhpBZAGFDVmU5RFRMZAllWNFVON0VTOWtpYWJDQnpWbGpJZAEcwWEtoTklkdVFvRGQ0MlBsZAmZAPSmpfcEc5VEJnbXBOOVk4WlEwVXAycGs2cll5QXh5SVVScFptdUtNU2wyeG9EMWYyc0tOTFRNQkIwUi0yXzVzTUFHNAZDZD"
headers = {"Authorization": f"Bearer {token}"}

# Test user profile fields on Graph API
test_ids = ["1754390998968975", "1618985113297064", "17841445961158125"]
for uid in test_ids:
    url = f"https://graph.instagram.com/{uid}?fields=id,name,username,profile_picture_url,profile_pic"
    res = requests.get(url, headers=headers)
    print(f"User {uid}: {res.status_code} - {res.text}")
