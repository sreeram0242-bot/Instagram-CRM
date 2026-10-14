import os
import json
import asyncio
import logging
import random
import urllib.parse
from typing import Dict, List, Set, Any
import requests
from fastapi import FastAPI, Request, Response, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.responses import HTMLResponse, FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("InstaFlowServer")

APP_DIR = os.path.dirname(os.path.abspath(__file__))
STATE_FILE = os.path.join(APP_DIR, "backend_state.json")

# Verified Meta Instagram Graph API Configuration
IG_ACCESS_TOKEN = os.environ.get(
    "IG_ACCESS_TOKEN",
    "IGAAdVWvCEyhpBZAGFDVmU5RFRMZAllWNFVON0VTOWtpYWJDQnpWbGpJZAEcwWEtoTklkdVFvRGQ0MlBsZAmZAPSmpfcEc5VEJnbXBOOVk4WlEwVXAycGs2cll5QXh5SVVScFptdUtNU2wyeG9EMWYyc0tOTFRNQkIwUi0yXzVzTUFHNAZDZD"
)
IG_USERNAME = "sreee._.ram"
WEBHOOK_VERIFY_TOKEN = os.environ.get("WEBHOOK_VERIFY_TOKEN", "instaflow_secret_2026")

import base64
import hashlib

GRADIENT_PALETTES = [
    ("#833AB4", "#FD1D1D"),  # Instagram Sunset
    ("#4F46E5", "#7C3AED"),  # Royal Indigo/Purple
    ("#0284C7", "#2563EB"),  # Sky/Ocean Blue
    ("#059669", "#10B981"),  # Emerald Green
    ("#E11D48", "#FB7185"),  # Vivid Rose
    ("#D97706", "#F59E0B"),  # Warm Amber
    ("#9333EA", "#C026D3"),  # Violet Fuchsia
    ("#0891B2", "#06B6D4"),  # Cyan Teal
]

def generate_avatar_data_uri(handle_or_name: str) -> str:
    cleaned = (handle_or_name or "Customer").lstrip("@_").strip()
    initial = (cleaned[0] if cleaned else "C").upper()
    h = int(hashlib.md5((handle_or_name or "C").encode()).hexdigest(), 16)
    bg1, bg2 = GRADIENT_PALETTES[h % len(GRADIENT_PALETTES)]
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{bg1}"/>
      <stop offset="100%" stop-color="{bg2}"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#grad)"/>
  <text x="50" y="50" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,sans-serif" font-size="46" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">{initial}</text>
</svg>"""
    return "data:image/svg+xml;base64," + base64.b64encode(svg.encode("utf-8")).decode("utf-8")


# Persistent Application State
default_state = {
    "replied_comments": [],
    "metrics": {
        "total_comments": 0,
        "total_dms": 0,
        "button_clicks": 0,
        "whatsapp_orders": 0,
        "api_savings": 0.0
    },
    "reels": {
        "18079": {
            "mediaId": "18079921717678282",
            "title": "@sreee._.ram Reel #18079",
            "active": True,
            "keywords": ["PRICE", "COST", "HOW MUCH", "DISCOUNT", "ORDER", "BUY", "LINK"],
            "public_replies": [
                "Check your DM! Details sent directly.",
                "Sent details to your inbox! Check your DM.",
                "DM sent! Tap inside to order directly with zero fees."
            ],
            "dm_welcome": "Hey {name}! Thanks for checking out our post on @sreee._.ram. Here are the product details:",
            "card_title": "@sreee._.ram Featured Item",
            "card_subtitle": "Exclusive Instagram special. Tap below to order on WhatsApp with free delivery.",
            "card_img": "https://instagram.fcjb5-2.fna.fbcdn.net/v/t51.82787-15/625353792_18109568698678282_8862091652716458602_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=isiwkIG1UD0Q7kNvwH6y1ih&_nc_oc=AdoZg59HKupKi4_zb7WUu2Yqdnphv4FhWS5bRtJP6H-dvB8L93_BIJdRKX1OjQibQg3iSVpCxA0w7Upd8JJmqC03&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANQ71j8EAAAA&_nc_gid=MGl-o-9gFUH8OiRRYiVwPg&_nc_tpa=Q5bMBQISIrHBgyYpi0pcIHfiDzs3kPiQ8gfYl4bZ8KIXCCjJUExadZLb4SIL38wokD3lCBMZAFJEQGhOeQ&oh=00_AQPRU_IShlMVJUgMTrObwMBMYXPx7X_MvEmWLj7GJK-Mvg&oe=6AD56EE4",
            "wa_product": "Featured Item #18079",
            "wa_phone": "919876543210"
        },
        "18027": {
            "mediaId": "18027861731150794",
            "title": "@sreee._.ram Reel #18027",
            "active": True,
            "keywords": ["BUY", "ORDER", "LINK", "PURCHASE", "PRICE"],
            "public_replies": [
                "DM sent with sizing and order link!",
                "Check your DM! Details sent directly."
            ],
            "dm_welcome": "Awesome {name}! Tap below to complete your order directly through WhatsApp:",
            "card_title": "@sreee._.ram Reel #18027",
            "card_subtitle": "Instant WhatsApp checkout with cash on delivery or online payment.",
            "card_img": "https://instagram.fcjb5-2.fna.fbcdn.net/v/t51.82787-15/622031438_18071182853150794_2132939138682287551_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=QzolASHqaboQ7kNvwFj6eTO&_nc_oc=Ado_X5XRd5uDvb06FeI4fke120Gwp-onLjaPspsfRuL3STZGS6Tnkh_qw59SrT1NcnhFkNEg0kVR5VmUM2NOXMM0&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANQ71j8EAAAA&_nc_gid=9iZc_1WGnnwH0srLTYL7RQ&_nc_tpa=Q5bMBQK3xILuEDysAqds0pPaRWhFSjltCaHW3vBVGronc6aEq4hC7QiTG8wSwA0vhJ0jRBvGbbZYewQDEg&oh=00_AQPeH99IAUQRiMOxkThkqI4sIAhncJHb4xP9VR1hVMPBOA&oe=6AD559BF",
            "wa_product": "Featured Item #18027",
            "wa_phone": "919876543210"
        },
        "17863": {
            "mediaId": "17863107759056247",
            "title": "@sreee._.ram Post #17863",
            "active": True,
            "keywords": ["PRICE", "INFO", "LINK", "DETAILS", "ORDER"],
            "public_replies": [
                "Check your DM! Details sent.",
                "Sent details to your inbox!"
            ],
            "dm_welcome": "Hey {name}! Thanks for checking out our post on @sreee._.ram. Tap below for details:",
            "card_title": "@sreee._.ram Post #17863",
            "card_subtitle": "Instant response for your inquiry. Tap below to order on WhatsApp.",
            "card_img": "https://instagram.fcjb5-1.fna.fbcdn.net/v/t39.30808-6/428696610_17992437959532039_8077601449564876331_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=sgFZM62s4FQQ7kNvwHfPVjb&_nc_oc=AdqMP_XicGcQfn4LWwxw_Hlf5DACjW10IL33NFR-2rieMrT9HsihfJlV-ykWLYDrun31nomD6GxL4XxkchzUzqk7&_nc_zt=23&_nc_ht=instagram.fcjb5-1.fna&edm=ANQ71j8EAAAA&_nc_gid=chW3pjYTsL8Hn2LucSxP9A&_nc_tpa=Q5bMBQJJKB6sk2U8bHIhWM02dAeKgG_KqVU-ATEexrgDvKGP0u7uY9ngVLBZO8HDi_Pxa1vOLcgJbKvIrg&oh=00_AQNmFscUK66WKZaU4LpZGtKIshCkU6y_-d9315AkN780WA&oe=6AD577CB",
            "wa_product": "Featured Item #17863",
            "wa_phone": "919876543210"
        },
        "18000": {
            "mediaId": "18000775964034572",
            "title": "@sreee._.ram Post #18000",
            "active": True,
            "keywords": ["ORDER", "BUY", "LINK", "PRICE"],
            "public_replies": [
                "DM sent! Check your inbox.",
                "Details sent to your DM directly."
            ],
            "dm_welcome": "Hey {name}! Thanks for reaching out. Tap below to connect on WhatsApp:",
            "card_title": "@sreee._.ram Post #18000",
            "card_subtitle": "Direct order handoff with zero fees. Fast shipping available.",
            "card_img": "https://instagram.fcjb5-2.fna.fbcdn.net/v/t39.30808-6/398728571_17978557583532039_4745018970682696672_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=riL_J6XqVDYQ7kNvwEKdUY0&_nc_oc=AdpNCbdkDqmcog76wVUit35V37L3ghhMEbld-jqEZTMnMaefkHIYl3emHlsIMoxFRaXpZtaktRWpcFlrhW06BTfa&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANQ71j8EAAAA&_nc_gid=G2Qc14wKpe-Xp6ApMDTVmA&_nc_tpa=Q5bMBQLB_PmCDWawH5fumJdB4vVe5Lg--5_k3jNKTzXbV_VhhpQcp_1jsyTizCTC-TsItKBf4VY_W2pT1Q&oh=00_AQNADkA1UgXvFXaoyuwhSoE9NQf-8j61sX_CwuXzPlcE0g&oe=6AD546E7",
            "wa_product": "Featured Item #18000",
            "wa_phone": "919876543210"
        }
    },
    "leads": [],
    "activities": []
}

def load_state() -> Dict[str, Any]:
    st = json.loads(json.dumps(default_state))
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, "r", encoding="utf-8") as f:
                saved = json.load(f)
                st.update(saved)
        except Exception as e:
            logger.error(f"Error loading state file: {e}")
    if "seen_comments" not in st:
        st["seen_comments"] = list(st.get("replied_comments", []))
    if "user_mappings" not in st:
        st["user_mappings"] = {}
    return st

def save_state(state: Dict[str, Any]):
    try:
        with open(STATE_FILE, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2)
    except Exception as e:
        logger.error(f"Error saving state: {e}")

state = load_state()

# WebSocket Connection Manager
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info(f"WebSocket client connected. Total clients: {len(self.active_connections)}")

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
            logger.info("WebSocket client disconnected.")

    async def broadcast(self, message: dict):
        dead_sockets = []
        for connection in self.active_connections:
            try:
                await connection.send_json(message)
            except Exception:
                dead_sockets.append(connection)
        for dead in dead_sockets:
            if dead in self.active_connections:
                self.active_connections.remove(dead)

manager = ConnectionManager()

# FastAPI App
app = FastAPI(title="InstaFlow CRM Webhook & Polling Automation Server")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Meta Instagram Graph API Actions
def post_instagram_comment_reply(media_id: str, comment_id: str, reply_text: str, username: str = None) -> bool:
    """
    Attempts to post reply directly to the comment via Meta Graph API.
    Falls back to posting a top-level media comment mentioning the user.
    """
    headers = {"Authorization": f"Bearer {IG_ACCESS_TOKEN}"}
    
    # Prepend @username tag so the user gets an instant phone notification banner
    tagged_reply = reply_text
    if username and username not in ["customer", "shopper", "there"] and not reply_text.startswith(f"@{username}"):
        tagged_reply = f"@{username} {reply_text}"

    # 1. Try direct reply to comment
    try:
        url = f"https://graph.instagram.com/{comment_id}/replies"
        res = requests.post(url, data={"message": tagged_reply}, headers=headers, timeout=10)
        if res.status_code == 200 and "id" in res.json():
            logger.info(f"Successfully posted direct reply to comment {comment_id}: {res.json()['id']}")
            return True
        else:
            logger.warning(f"Direct comment reply status {res.status_code}: {res.text}")
    except Exception as e:
        logger.error(f"Direct comment reply exception: {e}")

    # 2. Fallback: post comment on the media
    try:
        url = f"https://graph.instagram.com/{media_id}/comments"
        res = requests.post(url, data={"message": tagged_reply}, headers=headers, timeout=10)
        if res.status_code == 200 and "id" in res.json():
            logger.info(f"Successfully posted media fallback comment for {comment_id}: {res.json()['id']}")
            return True
        else:
            logger.error(f"Fallback comment status {res.status_code}: {res.text}")
    except Exception as e:
        logger.error(f"Fallback comment exception: {e}")

    return False

def send_private_instagram_dm(
    comment_id: str,
    username: str,
    card_title: str,
    card_subtitle: str,
    card_image_url: str,
    wa_link: str,
    fallback_text: str
) -> bool:
    """
    Sends private automated DM via Instagram Messaging API (comment-to-DM entry point).
    First Priority: Rich Generic Template (Product Card with Image, Title, & Native Clickable Buttons)
    Second Priority: Button Template (Text message with Clickable Action Buttons)
    Third Priority: Formatted text message with clickable direct link
    """
    url = "https://graph.instagram.com/v21.0/me/messages"
    headers = {
        "Authorization": f"Bearer {IG_ACCESS_TOKEN}",
        "Content-Type": "application/json"
    }

    # 1. ATTEMPT: Rich Generic Template (Native Instagram Card with Clickable Buttons)
    try:
        generic_payload = {
            "recipient": {"comment_id": comment_id},
            "message": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": card_title[:80],
                                "subtitle": card_subtitle[:80],
                                "image_url": card_image_url,
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": wa_link,
                                        "title": "Order on WhatsApp"[:20]
                                    },
                                    {
                                        "type": "postback",
                                        "title": "Chat with Us"[:20],
                                        "payload": "CHAT_WITH_US"
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        }
        res = requests.post(url, json=generic_payload, headers=headers, timeout=10)
        if res.status_code == 200:
            logger.info(f"Successfully sent Rich Card Generic Template DM with buttons to comment {comment_id}!")
            return True
        else:
            logger.warning(f"Generic Template status {res.status_code}: {res.text}. Trying Button Template...")
    except Exception as e:
        logger.error(f"Generic Template exception: {e}")

    # 2. ATTEMPT: Button Template (Text with Native Clickable Buttons)
    try:
        button_payload = {
            "recipient": {"comment_id": comment_id},
            "message": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": f"Hey @{username}! Thanks for checking out @sreee._.ram. Tap below to order with free delivery on WhatsApp:",
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": wa_link,
                                "title": "Order on WhatsApp"[:20]
                            },
                            {
                                "type": "postback",
                                "title": "Chat with Us"[:20],
                                "payload": "CHAT_WITH_US"
                            }
                        ]
                    }
                }
            }
        }
        res = requests.post(url, json=button_payload, headers=headers, timeout=10)
        if res.status_code == 200:
            logger.info(f"Successfully sent Button Template DM with buttons to comment {comment_id}!")
            return True
        else:
            logger.warning(f"Button Template status {res.status_code}: {res.text}. Trying text fallback...")
    except Exception as e:
        logger.error(f"Button Template exception: {e}")

    # 3. ATTEMPT: Clean Text Fallback
    try:
        text_payload = {
            "recipient": {"comment_id": comment_id},
            "message": {"text": fallback_text}
        }
        res = requests.post(url, json=text_payload, headers=headers, timeout=10)
        if res.status_code == 200:
            logger.info(f"Successfully sent text DM fallback to comment {comment_id}")
            return True
        else:
            logger.error(f"Text DM fallback status {res.status_code}: {res.text}")
    except Exception as e:
        logger.error(f"Text DM fallback exception: {e}")

    return False

def send_instagram_direct_message(
    recipient_id: str,
    text: str = None,
    card_title: str = None,
    card_subtitle: str = None,
    card_image_url: str = None,
    wa_link: str = None
) -> bool:
    """
    Sends message directly to an Instagram User ID (within the standard 24h messaging window).
    First Priority: Rich Generic Template with clickable buttons.
    Second Priority: Clean text message.
    """
    url = "https://graph.instagram.com/v21.0/me/messages"
    headers = {
        "Authorization": f"Bearer {IG_ACCESS_TOKEN}",
        "Content-Type": "application/json"
    }

    if card_title and wa_link:
        try:
            payload = {
                "recipient": {"id": recipient_id},
                "message": {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": card_title[:80],
                                    "subtitle": (card_subtitle or "")[:80],
                                    "image_url": card_image_url or "https://petroleum-such-benz-graduated.trycloudflare.com/app_icon_1024.png",
                                    "buttons": [
                                        {
                                            "type": "web_url",
                                            "url": wa_link,
                                            "title": "Order on WhatsApp"[:20]
                                        },
                                        {
                                            "type": "postback",
                                            "title": "Chat with Us"[:20],
                                            "payload": "CHAT_WITH_US"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            }
            res = requests.post(url, json=payload, headers=headers, timeout=10)
            if res.status_code == 200:
                logger.info(f"Sent 24h window Generic Template DM to user {recipient_id}")
                return True
            else:
                logger.warning(f"24h Generic Template note ({res.status_code}): {res.text}. Trying text DM...")
        except Exception as e:
            logger.error(f"24h Generic Template exception: {e}")

    try:
        payload = {
            "recipient": {"id": recipient_id},
            "message": {"text": text or f"Thanks for reaching out! Tap here to order directly on WhatsApp with free delivery: {wa_link or 'https://wa.me/919876543210'}"}
        }
        res = requests.post(url, json=payload, headers=headers, timeout=10)
        if res.status_code == 200:
            logger.info(f"Sent 24h text DM to user {recipient_id}")
            return True
        else:
            logger.warning(f"Failed to send 24h DM to {recipient_id} ({res.status_code}): {res.text}")
    except Exception as e:
        logger.error(f"24h text DM exception: {e}")

    return False

# Inbound DM & Postback Handlers (2-Way Live Chat)
async def handle_incoming_direct_message(sender_id: str, message_text: str):
    """
    Handles when an Instagram user sends a DM to @sreee._.ram.
    Responds inside the 24h customer window and updates the CRM inbox in real-time.
    """
    username = state.get("user_mappings", {}).get(str(sender_id))
    if not username or username in ["customer", "shopper"]:
        for l in state.get("leads", []):
            if l.get("ig_user_id") == str(sender_id):
                username = l.get("handle", "").replace("@", "")
                break
    if not username:
        username = "shopper"

    logger.info(f"INBOUND DM from @{username} (ID: {sender_id}): '{message_text}'")

    active_reel = state["reels"].get("18079", {})
    wa_phone = active_reel.get("wa_phone", "919876543210")
    product_name = active_reel.get("wa_product", "Featured Item")
    wa_link = f"https://wa.me/{wa_phone}?text={urllib.parse.quote(f'Hi! I am messaging from Instagram @{username} to order {product_name}!')}"

    card_title = active_reel.get("card_title", f"@{IG_USERNAME} Featured Item")
    card_subtitle = active_reel.get("card_subtitle", "Exclusive Instagram special. Tap below to order on WhatsApp with free delivery.")
    card_img = active_reel.get("card_img") or "https://petroleum-such-benz-graduated.trycloudflare.com/app_icon_1024.png"

    reply_text = f"Hey @{username}! Thanks for reaching out to @sreee._.ram. Tap below to order directly on WhatsApp with zero fees: {wa_link}"

    # Send 24h response back
    send_instagram_direct_message(
        recipient_id=sender_id,
        text=reply_text,
        card_title=card_title,
        card_subtitle=card_subtitle,
        card_image_url=card_img,
        wa_link=wa_link
    )

    # Update CRM State
    state["metrics"]["total_dms"] += 1
    state["metrics"]["whatsapp_orders"] += 1
    state["metrics"]["api_savings"] = round(state["metrics"]["whatsapp_orders"] * 0.05, 2)

    now_time = "Just now"
    default_avatar = generate_avatar_data_uri(username)

    lead = next((l for l in state["leads"] if l.get("handle") == f"@{username}" or l.get("ig_user_id") == str(sender_id)), None)
    if not lead:
        lead = {
            "id": int(asyncio.get_event_loop().time() * 1000),
            "handle": f"@{username}",
            "name": username.replace("_", " ").title(),
            "followers": "Real IG Customer",
            "avatar": default_avatar,
            "source": "ig",
            "intent": "High Intent",
            "lastMsg": f"DM: '{message_text}'",
            "time": now_time,
            "reel": active_reel.get("title", "@sreee._.ram Reel #18079"),
            "phone": wa_phone,
            "ig_user_id": str(sender_id),
            "tags": ["Instagram DM", "Replied", "Ready to Order"],
            "notes": f"Customer sent DM: '{message_text}'. Bot sent WhatsApp handoff card.",
            "chat": [
                {"from": "user", "text": message_text, "time": now_time},
                {"from": "bot", "text": f"Tap below to order via WhatsApp: {wa_link}", "time": now_time}
            ]
        }
        state["leads"].insert(0, lead)
    else:
        lead["ig_user_id"] = str(sender_id)
        if lead.get("handle") == "@customer" and username != "shopper":
            lead["handle"] = f"@{username}"
            lead["name"] = username.replace("_", " ").title()
        lead["chat"].append({"from": "user", "text": message_text, "time": now_time})
        lead["chat"].append({"from": "bot", "text": f"Tap below to order via WhatsApp: {wa_link}", "time": now_time})
        lead["lastMsg"] = f"DM: '{message_text}'"
        lead["time"] = now_time

    activity = {
        "user": f"@{username}",
        "action": f"Sent DM \"{message_text}\"",
        "time": "Just now",
        "badge": "DM Replied",
        "badgeClass": "badge-blue",
        "avatar": default_avatar
    }
    state["activities"].insert(0, activity)
    if len(state["activities"]) > 20:
        state["activities"].pop()

    save_state(state)

    await manager.broadcast({
        "type": "NEW_COMMENT_EVENT",
        "user": f"@{username}",
        "comment_text": f"[Inbound DM]: {message_text}",
        "reply_text": "[Product Card & Order Button Sent to DM]",
        "reel_title": active_reel.get("title"),
        "metrics": state["metrics"],
        "lead": lead,
        "activity": activity
    })

async def handle_incoming_postback_click(sender_id: str, payload: str, title: str):
    """
    Handles when an Instagram user clicks an action button (e.g. 'Chat with Us').
    """
    username = state.get("user_mappings", {}).get(str(sender_id), "shopper")
    logger.info(f"POSTBACK BUTTON CLICK from @{username} (ID: {sender_id}): '{title}' ({payload})")

    active_reel = state["reels"].get("18079", {})
    wa_phone = active_reel.get("wa_phone", "919876543210")
    wa_link = f"https://wa.me/{wa_phone}?text={urllib.parse.quote('Hi! I tapped Chat with Us on Instagram. I want to connect with your team.')}"

    reply_text = f"Thanks for tapping '{title}'! Our support team is online right now. Tap here to chat on WhatsApp: {wa_link}"

    send_instagram_direct_message(
        recipient_id=sender_id,
        text=reply_text
    )

    state["metrics"]["button_clicks"] = state["metrics"].get("button_clicks", 0) + 1
    state["metrics"]["whatsapp_orders"] += 1
    save_state(state)

    await manager.broadcast({
        "type": "NEW_COMMENT_EVENT",
        "user": f"@{username}",
        "comment_text": f"[Button Tap]: {title}",
        "reply_text": "Connected to WhatsApp Support",
        "metrics": state["metrics"]
    })

# Core Comment Automation Processor
async def process_incoming_comment(
    media_id: str,
    comment_id: str,
    comment_text: str,
    commenter_username: str,
    user_id: str = None
):
    """
    Checks keywords against rules, executes auto-reply, dispatches DM, updates CRM state.
    """
    if str(comment_id) in state.get("replied_comments", []):
        return  # Already replied, prevent duplicate spam

    # Cache user mapping if available
    if user_id and commenter_username and commenter_username not in ["customer", "shopper"]:
        if "user_mappings" not in state:
            state["user_mappings"] = {}
        state["user_mappings"][str(user_id)] = commenter_username

    # Find matching reel rule
    matched_rule = None
    target_reel_key = None
    for r_key, r_data in state["reels"].items():
        if r_data.get("mediaId") == str(media_id) or str(media_id) in r_data.get("mediaId", ""):
            matched_rule = r_data
            target_reel_key = r_key
            break

    # If not matched by exact mediaId, use default active reel
    if not matched_rule:
        matched_rule = state["reels"]["18079"]
        target_reel_key = "18079"

    if not matched_rule.get("active", True):
        logger.info(f"Reel #{target_reel_key} automations are paused.")
        return

    # Keyword check
    keywords = [k.upper().strip() for k in matched_rule.get("keywords", [])]
    text_upper = comment_text.upper()
    has_match = any(kw in text_upper for kw in keywords)

    if not has_match and len(keywords) > 0:
        logger.info(f"Comment '{comment_text}' did not match keywords {keywords}")
        return

    logger.info(f"MATCH FOUND: '{comment_text}' matched keywords on reel #{target_reel_key}!")

    # 1. Pick randomized public reply
    public_replies = matched_rule.get("public_replies", [
        "Check your DM! Details sent directly.",
        "Sent details to your inbox! Check your DM."
    ])
    chosen_reply = random.choice(public_replies)

    # 2. Execute public comment reply on Instagram (tagging user)
    reply_success = post_instagram_comment_reply(
        media_id=media_id,
        comment_id=comment_id,
        reply_text=chosen_reply,
        username=commenter_username
    )

    # 3. Private DM handoff card & native buttons
    product_name = matched_rule.get("wa_product", "Exclusive Item")
    wa_phone = matched_rule.get("wa_phone", "919876543210")
    wa_link = f"https://wa.me/{wa_phone}?text={urllib.parse.quote(f'Hi! I want to order {product_name} from your Instagram reel!')}"
    
    card_title = matched_rule.get("card_title", f"@{IG_USERNAME} Featured Item")
    card_subtitle = matched_rule.get("card_subtitle", "Exclusive Instagram special. Tap below to order on WhatsApp with free delivery.")
    card_img = matched_rule.get("card_img") or "https://petroleum-such-benz-graduated.trycloudflare.com/app_icon_1024.png"
    
    dm_text = f"Hey @{commenter_username}! Thanks for your comment on @sreee._.ram. Tap here to order directly on WhatsApp with free delivery: {wa_link}"

    # Send DM with Rich Cards & Native Buttons!
    send_private_instagram_dm(
        comment_id=comment_id,
        username=commenter_username,
        card_title=card_title,
        card_subtitle=card_subtitle,
        card_image_url=card_img,
        wa_link=wa_link,
        fallback_text=dm_text
    )

    # 4. Mark as replied to prevent duplicate
    state["replied_comments"].append(str(comment_id))
    if str(comment_id) not in state.get("seen_comments", []):
        if "seen_comments" not in state:
            state["seen_comments"] = []
        state["seen_comments"].append(str(comment_id))

    # 5. Update CRM metrics
    state["metrics"]["total_comments"] += 1
    state["metrics"]["total_dms"] += 1
    state["metrics"]["whatsapp_orders"] += 1
    state["metrics"]["api_savings"] = round(state["metrics"]["whatsapp_orders"] * 0.05, 2)

    # 6. Update or create lead
    now_time = "Just now"
    lead = next((l for l in state["leads"] if l.get("handle") == f"@{commenter_username}" or (user_id and l.get("ig_user_id") == str(user_id))), None)
    default_avatar = generate_avatar_data_uri(commenter_username)

    if not lead:
        lead = {
            "id": int(asyncio.get_event_loop().time() * 1000),
            "handle": f"@{commenter_username}",
            "name": commenter_username.replace("_", " ").title(),
            "followers": "Real IG Customer",
            "avatar": default_avatar,
            "source": "ig",
            "intent": "High Intent",
            "lastMsg": f"Commented: '{comment_text}'",
            "time": now_time,
            "reel": matched_rule.get("title", f"Reel #{target_reel_key}"),
            "phone": wa_phone,
            "ig_user_id": str(user_id) if user_id else None,
            "tags": ["Instagram Lead", "Auto-Replied", "Ready to Order"],
            "notes": f"Automated reply sent: '{chosen_reply}' on {matched_rule.get('title')}.",
            "chat": [
                {"from": "user", "text": comment_text, "time": now_time},
                {"from": "bot", "text": f"[Public Reply]: {chosen_reply}", "time": now_time},
                {"from": "bot", "text": f"[Private DM]: Tap here to order via WhatsApp: {wa_link}", "time": now_time}
            ]
        }
        state["leads"].insert(0, lead)
    else:
        if user_id:
            lead["ig_user_id"] = str(user_id)
        if lead.get("handle") == "@customer" and commenter_username not in ["customer", "shopper"]:
            lead["handle"] = f"@{commenter_username}"
            lead["name"] = commenter_username.replace("_", " ").title()
        lead["chat"].append({"from": "user", "text": comment_text, "time": now_time})
        lead["chat"].append({"from": "bot", "text": chosen_reply, "time": now_time})
        lead["lastMsg"] = f"Commented: '{comment_text}'"
        lead["time"] = now_time

    # 7. Add to activity stream
    activity = {
        "user": f"@{commenter_username}",
        "action": f"Commented \"{comment_text}\" on {matched_rule.get('title')}",
        "time": "Just now",
        "badge": "Auto-Replied",
        "badgeClass": "badge-blue",
        "avatar": default_avatar
    }
    state["activities"].insert(0, activity)
    if len(state["activities"]) > 20:
        state["activities"].pop()

    save_state(state)

    # 8. Broadcast to WebSocket
    await manager.broadcast({
        "type": "NEW_COMMENT_EVENT",
        "comment_id": comment_id,
        "user": f"@{commenter_username}",
        "comment_text": comment_text,
        "reply_text": chosen_reply,
        "reel_title": matched_rule.get("title"),
        "metrics": state["metrics"],
        "lead": lead,
        "activity": activity
    })
    logger.info("Broadcasted live event to all connected dashboard clients.")

# Background Live Instagram Polling Engine
async def instagram_polling_loop():
    """
    Runs every 6 seconds.
    Fetches real media comments via Meta Graph API.
    Catches any new comments and triggers auto-replies instantly.
    """
    logger.info("Starting background Instagram Comment Poller...")
    headers = {"Authorization": f"Bearer {IG_ACCESS_TOKEN}"}
    
    # Initialize seen_comments set from state
    if "seen_comments" not in state:
        state["seen_comments"] = list(state.get("replied_comments", []))
    seen_set = set(state["seen_comments"])

    while True:
        try:
            # 1. Fetch media items
            url = "https://graph.instagram.com/me/media?fields=id,comments_count,caption"
            res = requests.get(url, headers=headers, timeout=10)
            if res.status_code == 200:
                media_list = res.json().get("data", [])
                for media in media_list:
                    media_id = media.get("id")
                    comments_count = media.get("comments_count", 0)
                    if comments_count > 0:
                        # Fetch recent comments WITH from and username
                        comm_url = f"https://graph.instagram.com/{media_id}/comments?fields=id,text,timestamp,from,username"
                        c_res = requests.get(comm_url, headers=headers, timeout=10)
                        if c_res.status_code == 200:
                            comments = c_res.json().get("data", [])
                            for comm in comments:
                                comm_id = str(comm.get("id"))
                                comm_text = comm.get("text", "")
                                comm_from = comm.get("from", {})
                                comm_user = comm_from.get("username") or comm.get("username") or "shopper"
                                comm_user_id = comm_from.get("id")

                                # Cache user ID to username mapping
                                if comm_user_id and comm_user != "shopper":
                                    if "user_mappings" not in state:
                                        state["user_mappings"] = {}
                                    state["user_mappings"][str(comm_user_id)] = comm_user

                                # Skip if already evaluated before
                                if comm_id in seen_set:
                                    continue

                                # Mark seen now so it's not re-checked repeatedly
                                state["seen_comments"].append(comm_id)
                                seen_set.add(comm_id)
                                if len(state["seen_comments"]) > 1000:
                                    state["seen_comments"] = state["seen_comments"][-1000:]

                                if comm_id not in state.get("replied_comments", []):
                                    logger.info(f"POLLED NEW COMMENT: '{comm_text}' by @{comm_user} on media {media_id}")
                                    await process_incoming_comment(
                                        media_id=media_id,
                                        comment_id=comm_id,
                                        comment_text=comm_text,
                                        commenter_username=comm_user,
                                        user_id=str(comm_user_id) if comm_user_id else None
                                    )
        except Exception as e:
            logger.debug(f"Polling check note: {e}")

        await asyncio.sleep(6)

def ensure_webhook_subscription():
    """
    Subscribes the Meta Instagram account to webhook fields on startup.
    """
    try:
        url = "https://graph.instagram.com/v21.0/me/subscribed_apps"
        headers = {"Authorization": f"Bearer {IG_ACCESS_TOKEN}"}
        res = requests.post(url, data={"subscribed_fields": "comments,messages,messaging_postbacks"}, headers=headers, timeout=10)
        logger.info(f"Auto-subscribed webhook fields on startup: {res.json()}")
    except Exception as e:
        logger.warning(f"Webhook subscription note: {e}")

@app.on_event("startup")
async def startup_event():
    ensure_webhook_subscription()
    asyncio.create_task(instagram_polling_loop())

# META WEBHOOK ENDPOINTS
@app.get("/webhook")
async def verify_webhook(request: Request):
    """
    Meta Developer Webhook Verification Handshake:
    Meta sends GET request with hub.mode, hub.verify_token, and hub.challenge.
    We return hub.challenge as plain integer to verify.
    """
    params = request.query_params
    mode = params.get("hub.mode")
    verify_token = params.get("hub.verify_token")
    challenge = params.get("hub.challenge")

    logger.info(f"Webhook verification handshake: mode={mode}, token={verify_token}")

    if mode == "subscribe" and verify_token == WEBHOOK_VERIFY_TOKEN:
        logger.info("Webhook handshake verified successfully with Meta!")
        return Response(content=str(challenge), media_type="text/plain")
    else:
        logger.warning(f"Webhook verification failed! Expected '{WEBHOOK_VERIFY_TOKEN}', got '{verify_token}'")
        raise HTTPException(status_code=403, detail="Verification token mismatch")

@app.post("/webhook")
async def receive_webhook(request: Request):
    """
    Meta Webhook Receiver:
    Handles live comments, direct messages, and interactive button clicks from Instagram.
    """
    try:
        body = await request.json()
        logger.info(f"Incoming Meta Webhook Payload: {json.dumps(body)}")

        entries = body.get("entry", [])
        for entry in entries:
            # 1. Instagram Comments Event
            changes = entry.get("changes", [])
            for change in changes:
                field = change.get("field")
                value = change.get("value", {})

                if field == "comments":
                    comment_id = value.get("id")
                    comment_text = value.get("text", "")
                    media = value.get("media", {})
                    media_id = media.get("id")
                    from_user = value.get("from", {})
                    username = from_user.get("username") or "customer"
                    user_id = from_user.get("id")

                    if user_id and username != "customer":
                        if "user_mappings" not in state:
                            state["user_mappings"] = {}
                        state["user_mappings"][str(user_id)] = username

                    if comment_id and comment_text and media_id:
                        asyncio.create_task(process_incoming_comment(
                            media_id=str(media_id),
                            comment_id=str(comment_id),
                            comment_text=str(comment_text),
                            commenter_username=str(username),
                            user_id=str(user_id) if user_id else None
                        ))

            # 2. Instagram Direct Messages & Postback Button Clicks
            messaging_events = entry.get("messaging", [])
            for msg_event in messaging_events:
                sender_id = msg_event.get("sender", {}).get("id")
                # Ignore messages sent by our own business account
                if str(sender_id) == str(IG_USER_ID) or str(sender_id) == "29376245131980007":
                    continue

                # Inbound Direct Message
                if "message" in msg_event:
                    msg_obj = msg_event["message"]
                    if msg_obj.get("is_echo"):
                        continue
                    text = msg_obj.get("text", "")
                    if sender_id and text:
                        asyncio.create_task(handle_incoming_direct_message(
                            sender_id=str(sender_id),
                            message_text=str(text)
                        ))

                # Interactive Button Click (Postback)
                elif "postback" in msg_event:
                    postback_obj = msg_event["postback"]
                    payload = postback_obj.get("payload", "")
                    title = postback_obj.get("title", "")
                    if sender_id:
                        asyncio.create_task(handle_incoming_postback_click(
                            sender_id=str(sender_id),
                            payload=str(payload),
                            title=str(title)
                        ))

        return {"status": "ok"}
    except Exception as e:
        logger.error(f"Error processing webhook: {e}")
        return {"status": "error", "message": str(e)}
    except Exception as e:
        logger.error(f"Error processing webhook: {e}")
        return {"status": "error", "message": str(e)}

# REST API ENDPOINTS FOR FRONTEND CRM
@app.get("/api/state")
async def get_state():
    return state

@app.post("/api/sync-state")
async def sync_state(request: Request):
    """
    Saves full frontend state (reels, custom keywords, flows, public replies, WhatsApp phone)
    to persistent backend_state.json so real Instagram webhooks use the latest user rules.
    """
    global state
    try:
        data = await request.json()
        if not data:
            return {"success": False, "message": "Empty data"}

        # Sync reels
        if "reels" in data and isinstance(data["reels"], list):
            for r in data["reels"]:
                r_id = str(r.get("id"))
                all_kws = []
                for fl in r.get("flows", []):
                    for kw in fl.get("keywords", []):
                        if kw and kw.upper() not in all_kws:
                            all_kws.append(kw.upper())
                
                # If reel not in backend dictionary, create it
                if r_id not in state["reels"]:
                    state["reels"][r_id] = {
                        "mediaId": str(r.get("mediaId", r_id)),
                        "title": r.get("title", f"Reel #{r_id}"),
                        "active": r.get("active", True),
                        "keywords": all_kws if all_kws else ["PRICE", "BUY"],
                        "public_replies": r.get("publicReplies", ["Check your DM! Details sent directly."]),
                        "dm_welcome": r.get("flows", [{}])[0].get("welcomeText", "Hey {name}! Tap below to order:"),
                        "wa_product": r.get("title", "Featured Item"),
                        "wa_phone": data.get("settings", {}).get("waPhone", "919876543210")
                    }
                else:
                    state["reels"][r_id]["active"] = r.get("active", True)
                    if all_kws:
                        state["reels"][r_id]["keywords"] = all_kws
                    if r.get("publicReplies"):
                        state["reels"][r_id]["public_replies"] = r.get("publicReplies")
                    if r.get("title"):
                        state["reels"][r_id]["title"] = r.get("title")
                    if data.get("settings", {}).get("waPhone"):
                        state["reels"][r_id]["wa_phone"] = data.get("settings", {}).get("waPhone")
                    first_flow = r.get("flows", [{}])[0] if r.get("flows") else {}
                    if first_flow.get("cardTitle"):
                        state["reels"][r_id]["card_title"] = first_flow.get("cardTitle")
                    if first_flow.get("cardSubtitle"):
                        state["reels"][r_id]["card_subtitle"] = first_flow.get("cardSubtitle")
                    if first_flow.get("cardImg") or r.get("img"):
                        state["reels"][r_id]["card_img"] = first_flow.get("cardImg") or r.get("img")

        if "leads" in data and isinstance(data["leads"], list):
            state["leads"] = data["leads"]
        if "activities" in data and isinstance(data["activities"], list):
            state["activities"] = data["activities"]
        if "metrics" in data and isinstance(data["metrics"], dict):
            state["metrics"].update(data["metrics"])
        if "settings" in data:
            state["settings"] = data["settings"]

        save_state(state)
        logger.info("Successfully synced and persisted updated CRM state from frontend!")
        return {"success": True}
    except Exception as e:
        logger.error(f"Error syncing state: {e}")
        return {"success": False, "message": str(e)}

@app.post("/api/reels/{reel_id}/rules")
async def update_reel_rules(reel_id: str, request: Request):
    data = await request.json()
    if reel_id in state["reels"]:
        state["reels"][reel_id].update(data)
        save_state(state)
        return {"success": True, "reel": state["reels"][reel_id]}
    return {"success": False, "message": "Reel not found"}

@app.post("/api/simulate")
async def simulate_comment_event(request: Request):
    data = await request.json()
    media_id = data.get("media_id", "18079921717678282")
    keyword = data.get("keyword", "PRICE")
    comment_text = data.get("text", f"{keyword} please! Available in Medium?")
    commenter = data.get("username", "ig_shopper_" + str(random.randint(100, 999)))
    fake_comment_id = "test_" + str(int(asyncio.get_event_loop().time() * 1000))

    await process_incoming_comment(
        media_id=media_id,
        comment_id=fake_comment_id,
        comment_text=comment_text,
        commenter_username=commenter
    )
    return {"success": True, "comment_id": fake_comment_id}

@app.post("/api/live-test-reply")
async def live_test_reply(request: Request):
    """
    Directly posts a live verified reply to Instagram post 18079921717678282
    """
    data = await request.json()
    msg = data.get("message", "Direct Verified Test from InstaFlow CRM!")
    success = post_instagram_comment_reply("18079921717678282", "18079921717678282", msg, "sreee._.ram")
    return {"success": success, "message": msg}

# WebSocket Endpoint for Live UI Updates
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # Heartbeat or client ping
            await websocket.send_json({"type": "PONG"})
    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception:
        manager.disconnect(websocket)

# Serve Frontend Static Assets
@app.get("/")
async def serve_index():
    return FileResponse(os.path.join(APP_DIR, "index.html"))

@app.get("/index.html")
async def serve_index_html():
    return FileResponse(os.path.join(APP_DIR, "index.html"))

@app.get("/app.js")
async def serve_app_js():
    return FileResponse(os.path.join(APP_DIR, "app.js"))

@app.get("/style.css")
async def serve_style_css():
    return FileResponse(os.path.join(APP_DIR, "style.css"))

@app.get("/app_icon_1024.png")
async def serve_app_icon():
    return FileResponse(os.path.join(APP_DIR, "app_icon_1024.png"), media_type="image/png")

@app.get("/privacy", response_class=HTMLResponse)
async def serve_privacy_policy():
    return """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - InstaFlow CRM</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 800px; margin: 40px auto; padding: 0 20px; }
        h1 { color: #2563eb; }
        h2 { margin-top: 30px; color: #0f172a; }
        .meta-box { background: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>Privacy Policy for InstaFlow CRM</h1>
    <p>Last updated: October 14, 2026</p>
    <div class="meta-box">
        <strong>Application:</strong> InstaFlow CRM<br>
        <strong>Purpose:</strong> Instagram Reel Comment Automation & Customer Relationship Management
    </div>
    <h2>1. Information We Process</h2>
    <p>InstaFlow CRM processes public comments made by users on authorized Instagram business media. This includes Instagram username, comment text, and comment timestamp to execute automated keyword matching and auto-replies via the official Meta Graph API.</p>
    <h2>2. How We Use Data</h2>
    <p>Data received via Meta Webhooks is solely utilized to trigger real-time comment responses and provide direct order links via WhatsApp. We do not sell, rent, or distribute personal data to any third parties.</p>
    <h2>3. Data Storage and Security</h2>
    <p>Customer interaction logs are stored locally within the application instance to prevent duplicate responses. All API interactions adhere to Meta Platform Terms.</p>
    <h2>4. User Data Deletion Instructions</h2>
    <p>Users may request deletion of their interaction history at any time by contacting our support team or visiting <a href="/data-deletion">Data Deletion Instructions</a>.</p>
    <h2>5. Contact Us</h2>
    <p>If you have questions regarding this policy, contact us at: <code>support@instaflow.local</code></p>
</body>
</html>"""

@app.get("/terms", response_class=HTMLResponse)
async def serve_terms_of_service():
    return """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Service - InstaFlow CRM</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 800px; margin: 40px auto; padding: 0 20px; }
        h1 { color: #2563eb; }
    </style>
</head>
<body>
    <h1>Terms of Service</h1>
    <p>Last updated: October 14, 2026</p>
    <p>By connecting InstaFlow CRM with Instagram Graph API, you agree to comply with Meta Developer Policies and Community Standards. InstaFlow CRM operates solely as an automation tool for managing customer interactions.</p>
</body>
</html>"""

@app.get("/data-deletion", response_class=HTMLResponse)
async def serve_data_deletion():
    return """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Data Deletion - InstaFlow CRM</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 800px; margin: 40px auto; padding: 0 20px; }
        h1 { color: #2563eb; }
    </style>
</head>
<body>
    <h1>User Data Deletion Instructions</h1>
    <p>To request deletion of your interaction data from InstaFlow CRM, email your Instagram username to <code>support@instaflow.local</code>. Data will be purged within 24 hours.</p>
</body>
</html>"""

if __name__ == "__main__":
    import uvicorn
    logger.info("Starting InstaFlow CRM Server on port 3000...")
    uvicorn.run("server:app", host="0.0.0.0", port=3000, reload=False)
