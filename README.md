# InstaFlow CRM — Instagram & WhatsApp Automated Commerce Engine

**InstaFlow CRM** is a real-time Instagram commerce and engagement platform designed for Shop Owners, Creators, and Digital Agencies. It automatically scans comments on Instagram Reels, posts instant public replies, dispatches rich private DM cards with native clickable buttons, and hands off orders directly to WhatsApp with **$0.00 Meta Cloud API fees**.

---

## 🚀 Key Features

* **Instagram Comment-to-DM Engine**: Detects trigger keywords (`PRICE`, `BUY`, `ORDER`, `LINK`, `DISCOUNT`) on real Instagram reels and triggers automated replies in real time.
* **Rich Interactive Cards with Clickable Buttons**: Dispatches native Instagram Generic Templates featuring the product picture, title, description, and official clickable action buttons:
  - `[ Order on WhatsApp ]` &rarr; Opens WhatsApp directly with the product and order details pre-filled.
  - `[ Chat with Us ]` &rarr; Interactive postback button for customer support inquiries.
* **100% Free WhatsApp Sales Bridge**: Bypasses costly Meta Cloud API template fees (~₹1.00 to ₹4.50 per chat) by generating direct deep links (`https://wa.me/phone?text=...`).
* **Live Dual-Layer Persistence**: All custom keywords, replies, flows, settings, and persona choices are stored in browser `localStorage` and automatically synchronized to `backend_state.json`.
* **Real-Time WebSocket Gateway**: The dashboard updates live as incoming comments and DMs occur without page refreshes.
* **Triple Persona Mode**: 1-click switcher between **Shop Owner**, **Influencer**, and **Digital Agency** modes.
* **Zero Emojis**: 100% pure crisp vector SVG icons across all interfaces.

---

## 📁 Project Structure

```text
Instagram-CRM/
├── index.html            # CRM Frontend (Dashboard, Reels, DM Builder, Inbox, Catalog, Settings)
├── style.css             # Design system (White/Grey/Blue palette, glassmorphism tabs)
├── app.js                # Core frontend client, phone simulator, and WebSocket sync
├── server.py             # FastAPI backend (Meta Webhook handler, Polling engine, REST API)
├── backend_state.json    # Persistent application state (reels, keywords, metrics, leads)
├── app_icon_1024.png     # Official Meta App Icon (1024x1024 PNG with transparent background)
├── cloudflared.exe       # Cloudflare Tunnel binary for public HTTPS routing
└── README.md             # Project documentation and operational guide
```

---

## ⚡ How to Run

### 1. Start the Automation Server
```powershell
python server.py
```
* **Local Web Interface**: [http://localhost:3000](http://localhost:3000)
* **WebSocket Stream**: `ws://localhost:3000/ws`

### 2. Start the Cloudflare HTTPS Tunnel (For Meta Webhooks)
```powershell
.\cloudflared.exe tunnel --url http://localhost:3000
```
This generates a secure public HTTPS URL forwarding to your local server.

---

## 🔗 Meta Webhook Configuration Reference

In the [Meta for Developers Portal](https://developers.facebook.com):

| Setting | Value |
| :--- | :--- |
| **Callback URL** | `https://<your-cloudflare-tunnel-url>/webhook` |
| **Verify Token** | `instaflow_secret_2026` |
| **Webhook Fields** | `comments`, `messages`, `messaging_postbacks` |

### Meta Compliance URLs:
* **Privacy Policy**: `https://<your-tunnel-url>/privacy`
* **Terms of Service**: `https://<your-tunnel-url>/terms`
* **Data Deletion**: `https://<your-tunnel-url>/data-deletion`
* **App Icon**: `https://<your-tunnel-url>/app_icon_1024.png`

---

## 🛡️ Anti-Spam & Limits

* **Incoming Comments**: Unlimited.
* **Public Comment Replies**: Up to 4,800/day (200/hour rolling window).
* **Automated DMs**: Starts at 250/day and automatically scales up to 1,000+ and 10,000/day based on engagement.
* **WhatsApp Chats**: Unlimited & 100% Free.
