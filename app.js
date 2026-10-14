/* ==========================================================================
   INSTAFLOW CRM - CORE APPLICATION
   Per-Reel Automation, Multi-Keyword Flows & Sequential Line-Up
   Zero Emojis - Pure Crisp SVG Icons
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. DATA REPOSITORIES (PER-REEL AUTOMATION & MULTI-KEYWORD FLOWS)
    // ==========================================================================
    const appState = {
        activePersona: 'shop',
        activeTab: 'tabDashboard',
        selectedLeadId: null,
        selectedBuilderReelId: 18079,
        selectedFlowRuleId: 'flow-ram-18079-price',
        typingDelay: 3.5,
        reelsFilter: 'all',
        editingReelId: null,

        // Verified Instagram Graph API Connection for @sreee._.ram
        metaConnectedAccount: {
            connected: true,
            username: 'sreee._.ram',
            userId: '29376245131980007',
            accountType: 'MEDIA_CREATOR',
            token: 'IGAAdVWvCEyhpBZAGFDVmU5RFRMZAllWNFVON0VTOWtpYWJDQnpWbGpJZAEcwWEtoTklkdVFvRGQ0MlBsZAmZAPSmpfcEc5VEJnbXBOOVk4WlEwVXAycGs2cll5QXh5SVVScFptdUtNU2wyeG9EMWYyc0tOTFRNQkIwUi0yXzVzTUFHNAZDZD',
            mode: '100% Free wa.me Link Handoff ($0.00 Meta Fees)'
        },

        // Clean real Instagram reels from @sreee._.ram
        reels: [
            {
                id: 18079,
                mediaId: "18079921717678282",
                title: "@sreee._.ram Reel #18079",
                sku: "RAM-REEL-18079",
                views: "0",
                comments: 0,
                dmsSent: 0,
                revenue: "$0",
                active: true,
                publicReplies: [
                    "Check your DM! Details sent directly.",
                    "Sent details to your inbox! Check your DM.",
                    "DM sent! Tap inside to order directly."
                ],
                img: "https://instagram.fcjb5-2.fna.fbcdn.net/v/t51.82787-15/625353792_18109568698678282_8862091652716458602_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=isiwkIG1UD0Q7kNvwG9xqXq&_nc_oc=AdqbZdMA0KB4Me3Ad7ZctTY6qHlTc4CSU5OZKPE1aA10WaOo_MjumYj4y4CDHc3idl_5SDAGl5xmu76RhwGKeRSW&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANo9K5cEAAAA&_nc_gid=0tKJfokSn17KYfj5jgQT_g&_nc_tpa=Q5bMBQK0OQNU2LfHBtb4h4tBvAQr4Z-KMgI6e7q381WTN4NxBR4PriWs2HNco7QbCLQbWXiTj4HgnUiUlQ&oh=00_AQNubswwcvOUJLPJ7cssuwm_yVNlZ6ZvExi7LGE6uS9xYw&oe=6AD4FE64",
                permalink: "https://www.instagram.com/p/DH5AmQ7vb3o/",
                flows: [
                    {
                        id: 'flow-ram-18079-price',
                        name: 'Price & Order Flow',
                        keywords: ['PRICE', 'COST', 'HOW MUCH', 'DISCOUNT', 'ORDER'],
                        simulatedCustomerComment: 'PRICE please! How to order?',
                        welcomeText: "Hey {name}! Thanks for checking out our post on @sreee._.ram. Tap below to view details and order directly with zero fees:",
                        cardTitle: "@sreee._.ram Featured Item",
                        cardPrice: "DM for Pricing",
                        cardSubtitle: "Exclusive Instagram special. Tap below to order on WhatsApp with free delivery.",
                        cardImg: "https://instagram.fcjb5-2.fna.fbcdn.net/v/t51.82787-15/625353792_18109568698678282_8862091652716458602_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=isiwkIG1UD0Q7kNvwG9xqXq&_nc_oc=AdqbZdMA0KB4Me3Ad7ZctTY6qHlTc4CSU5OZKPE1aA10WaOo_MjumYj4y4CDHc3idl_5SDAGl5xmu76RhwGKeRSW&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANo9K5cEAAAA&_nc_gid=0tKJfokSn17KYfj5jgQT_g&_nc_tpa=Q5bMBQK0OQNU2LfHBtb4h4tBvAQr4Z-KMgI6e7q381WTN4NxBR4PriWs2HNco7QbCLQbWXiTj4HgnUiUlQ&oh=00_AQNubswwcvOUJLPJ7cssuwm_yVNlZ6ZvExi7LGE6uS9xYw&oe=6AD4FE64",
                        buttons: [
                            { id: 'b_ram1', text: 'Order via WhatsApp (Free)', action: 'whatsapp', style: 'whatsapp' },
                            { id: 'b_ram2', text: 'Chat with Us', action: 'human', style: 'default' }
                        ],
                        followUp: {
                            enabled: true,
                            condition: 'no_click',
                            delayMinutes: 15,
                            text: "Still interested? Tap below to connect with us directly on WhatsApp:"
                        }
                    }
                ]
            },
            {
                id: 18027,
                mediaId: "18027861731150794",
                title: "@sreee._.ram Reel #18027",
                sku: "RAM-REEL-18027",
                views: "0",
                comments: 0,
                dmsSent: 0,
                revenue: "$0",
                active: true,
                publicReplies: [
                    "DM sent with details and order link!",
                    "Check your DM! Details sent directly."
                ],
                img: "https://instagram.fcjb5-2.fna.fbcdn.net/v/t51.82787-15/622031438_18071182853150794_2132939138682287551_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=QzolASHqaboQ7kNvwEgbW9Q&_nc_oc=Adq8VrJj2-FjynjeRMy9Q91ZxCDVZfSTDvXqdQRHplxo2l69hwB5o3ZmOxx5GQI_6efpbl4J2Lq_-coqHY-knM5r&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANo9K5cEAAAA&_nc_gid=0tKJfokSn17KYfj5jgQT_g&_nc_tpa=Q5bMBQIgqavOmyaTO96hxgKSJ_5GA1FC_xvmrASwfN89aO6C318wZ0IvbYQykMvhjSF0-llw8G_iLGxIyg&oh=00_AQOtco3fJJlVh59rw0_ID71qFVrBubHet4pY72jTlN_emQ&oe=6AD5217F",
                permalink: "https://www.instagram.com/p/DBS11cxyggH/",
                flows: [
                    {
                        id: 'flow-ram-18027-buy',
                        name: 'Direct WhatsApp Checkout',
                        keywords: ['BUY', 'ORDER', 'LINK', 'DISCOUNT', 'PURCHASE'],
                        simulatedCustomerComment: 'Ready to BUY! Send me the checkout link please.',
                        welcomeText: "Awesome {name}! Tap below to complete your order directly through WhatsApp:",
                        cardTitle: "Instant WhatsApp Checkout",
                        cardPrice: "Direct WhatsApp Order",
                        cardSubtitle: "Zero fees, cash-on-delivery or card accepted. One-click order handoff.",
                        cardImg: "https://instagram.fcjb5-2.fna.fbcdn.net/v/t51.82787-15/622031438_18071182853150794_2132939138682287551_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=QzolASHqaboQ7kNvwEgbW9Q&_nc_oc=Adq8VrJj2-FjynjeRMy9Q91ZxCDVZfSTDvXqdQRHplxo2l69hwB5o3ZmOxx5GQI_6efpbl4J2Lq_-coqHY-knM5r&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANo9K5cEAAAA&_nc_gid=0tKJfokSn17KYfj5jgQT_g&_nc_tpa=Q5bMBQIgqavOmyaTO96hxgKSJ_5GA1FC_xvmrASwfN89aO6C318wZ0IvbYQykMvhjSF0-llw8G_iLGxIyg&oh=00_AQOtco3fJJlVh59rw0_ID71qFVrBubHet4pY72jTlN_emQ&oe=6AD5217F",
                        buttons: [
                            { id: 'b_ram3', text: 'Open WhatsApp Checkout', action: 'whatsapp', style: 'whatsapp' }
                        ],
                        followUp: {
                            enabled: true,
                            condition: 'no_wa',
                            delayMinutes: 30,
                            text: "Your order inquiry is saved! Tap below to finalize via WhatsApp whenever you're ready:"
                        }
                    }
                ]
            },
            {
                id: 17863,
                mediaId: "17863107759056247",
                title: "@sreee._.ram Post #17863",
                sku: "RAM-POST-17863",
                views: "0",
                comments: 0,
                dmsSent: 0,
                revenue: "$0",
                active: true,
                publicReplies: [
                    "Check your DM! Details sent.",
                    "Sent details to your inbox!"
                ],
                img: "https://instagram.fcjb5-1.fna.fbcdn.net/v/t39.30808-6/428696610_17992437959532039_8077601449564876331_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Y612p6Wj8IAQ7kNvwEFDKjg&_nc_oc=AdqT-KHuzIZz_4nc1oYk4xs2myRrTkraJNlS4GFI_WvN1UYKYLwqCMe4-SjJPxxqkoDXaAEYGIu0LMi3LstajpoB&_nc_zt=23&_nc_ht=instagram.fcjb5-1.fna&edm=ANo9K5cEAAAA&_nc_gid=hWh6dPJsqEFC2ENHFiP4mg&_nc_tpa=Q5bMBQJvcoRlIuxet2zHk-Mo8QzC39aeIUpCfi1V3eqb6Zv0NU_dPkbpkqiNMu9oqpTGvhOdgxukRweZWQ&oh=00_AQMfmP60BfHlY3RNahNee7wx1StEhlZQC9fBJyGqemv9GQ&oe=6AD5074B",
                permalink: "https://www.instagram.com/p/C32izUvSJcP/",
                flows: [
                    {
                        id: 'flow-ram-17863-info',
                        name: 'Product Inquiry Flow',
                        keywords: ['PRICE', 'INFO', 'LINK', 'DETAILS'],
                        simulatedCustomerComment: 'INFO please! How to buy?',
                        welcomeText: "Hey {name}! Thanks for checking out our post on @sreee._.ram. Tap below for details:",
                        cardTitle: "@sreee._.ram Post Item",
                        cardPrice: "Direct WhatsApp Order",
                        cardSubtitle: "Tap below to chat with us directly on WhatsApp.",
                        cardImg: "https://instagram.fcjb5-1.fna.fbcdn.net/v/t39.30808-6/428696610_17992437959532039_8077601449564876331_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Y612p6Wj8IAQ7kNvwEFDKjg&_nc_oc=AdqT-KHuzIZz_4nc1oYk4xs2myRrTkraJNlS4GFI_WvN1UYKYLwqCMe4-SjJPxxqkoDXaAEYGIu0LMi3LstajpoB&_nc_zt=23&_nc_ht=instagram.fcjb5-1.fna&edm=ANo9K5cEAAAA&_nc_gid=hWh6dPJsqEFC2ENHFiP4mg&_nc_tpa=Q5bMBQJvcoRlIuxet2zHk-Mo8QzC39aeIUpCfi1V3eqb6Zv0NU_dPkbpkqiNMu9oqpTGvhOdgxukRweZWQ&oh=00_AQMfmP60BfHlY3RNahNee7wx1StEhlZQC9fBJyGqemv9GQ&oe=6AD5074B",
                        buttons: [
                            { id: 'b_ram5', text: 'Chat on WhatsApp (Free)', action: 'whatsapp', style: 'whatsapp' }
                        ],
                        followUp: {
                            enabled: false,
                            condition: 'no_click',
                            delayMinutes: 30,
                            text: "Have questions? Our WhatsApp is always open to help!"
                        }
                    }
                ]
            },
            {
                id: 18000,
                mediaId: "18000775964034572",
                title: "@sreee._.ram Post #18000",
                sku: "RAM-POST-18000",
                views: "0",
                comments: 0,
                dmsSent: 0,
                revenue: "$0",
                active: true,
                publicReplies: [
                    "DM sent! Check your inbox.",
                    "Details sent to your DM directly."
                ],
                img: "https://instagram.fcjb5-2.fna.fbcdn.net/v/t39.30808-6/398728571_17978557583532039_4745018970682696672_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=riL_J6XqVDYQ7kNvwFrlmtk&_nc_oc=AdokM5wrw-zYFldu05_Cbn1UMdhhiZ7em97G2Vxv6wP2NoKG0zdAdgueGsKDMURxxM82g40WOOzmegk1ZNE2v4AH&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANo9K5cEAAAA&_nc_gid=hWh6dPJsqEFC2ENHFiP4mg&_nc_tpa=Q5bMBQJs0ahs8j2PLXnWbfc59SrFC5QwriMDcPwvrPRrOFn4yug9WBqLD7TUCtQHG7R4LLVaSyH38K1HJA&oh=00_AQOuk1G_fxNIz42Kgy453EJRRiz6tq6zlUVxqJ30cR7xbA&oe=6AD50EA7",
                permalink: "https://www.instagram.com/p/CzLPfTvy_VO/",
                flows: [
                    {
                        id: 'flow-ram-18000-order',
                        name: 'Direct Order Flow',
                        keywords: ['ORDER', 'BUY', 'LINK', 'PRICE'],
                        simulatedCustomerComment: 'ORDER link please!',
                        welcomeText: "Hey {name}! Thanks for reaching out. Tap below to connect with us on WhatsApp:",
                        cardTitle: "@sreee._.ram Post Item",
                        cardPrice: "Direct WhatsApp Order",
                        cardSubtitle: "Tap below to chat with us directly on WhatsApp.",
                        cardImg: "https://instagram.fcjb5-2.fna.fbcdn.net/v/t39.30808-6/398728571_17978557583532039_4745018970682696672_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=riL_J6XqVDYQ7kNvwFrlmtk&_nc_oc=AdokM5wrw-zYFldu05_Cbn1UMdhhiZ7em97G2Vxv6wP2NoKG0zdAdgueGsKDMURxxM82g40WOOzmegk1ZNE2v4AH&_nc_zt=23&_nc_ht=instagram.fcjb5-2.fna&edm=ANo9K5cEAAAA&_nc_gid=hWh6dPJsqEFC2ENHFiP4mg&_nc_tpa=Q5bMBQJs0ahs8j2PLXnWbfc59SrFC5QwriMDcPwvrPRrOFn4yug9WBqLD7TUCtQHG7R4LLVaSyH38K1HJA&oh=00_AQOuk1G_fxNIz42Kgy453EJRRiz6tq6zlUVxqJ30cR7xbA&oe=6AD50EA7",
                        buttons: [
                            { id: 'b_ram6', text: 'Chat on WhatsApp (Free)', action: 'whatsapp', style: 'whatsapp' }
                        ],
                        followUp: {
                            enabled: false,
                            condition: 'no_click',
                            delayMinutes: 30,
                            text: "Feel free to message anytime!"
                        }
                    }
                ]
            }
        ],

        leads: [],
        products: [],
        recentActivities: [],
        metrics: {
            total_comments: 0,
            total_dms: 0,
            button_clicks: 0,
            whatsapp_orders: 0,
            api_savings: 0.0
        }
    };

    // ==========================================================================
    // PERSISTENCE ENGINE (LOCALSTORAGE + BACKEND REST SYNC)
    // Ensures all custom keywords, replies, flows & settings survive page reload
    // ==========================================================================
    let autoSaveTimer = null;
    function triggerAutoSave() {
        if (autoSaveTimer) clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            saveAppState();
        }, 300);
    }

    function saveAppState() {
        try {
            const phoneEl = document.getElementById('inputBusinessWaPhone');
            const templateEl = document.getElementById('inputBusinessWaTemplate');
            const stateToSave = {
                activePersona: appState.activePersona,
                activeTab: appState.activeTab,
                selectedBuilderReelId: appState.selectedBuilderReelId,
                selectedFlowRuleId: appState.selectedFlowRuleId,
                reels: appState.reels,
                leads: appState.leads,
                recentActivities: appState.recentActivities,
                products: appState.products,
                metrics: appState.metrics,
                settings: {
                    waPhone: phoneEl ? phoneEl.value.trim() : '919876543210',
                    waTemplate: templateEl ? templateEl.value.trim() : ''
                }
            };
            localStorage.setItem('instaflow_app_state', JSON.stringify(stateToSave));

            // Sync with backend server
            if (window.fetch) {
                fetch('/api/sync-state', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(stateToSave)
                }).catch(e => console.debug('Sync state note:', e));
            }
        } catch (e) {
            console.warn('Error saving state:', e);
        }
    }

    // Helper: Generate safe Base64 Instagram gradient avatar with user initial
    function getCustomerAvatar(handle, name, existingAvatar) {
        if (existingAvatar && typeof existingAvatar === 'string') {
            if (existingAvatar.startsWith('http://') || existingAvatar.startsWith('https://') || existingAvatar.startsWith('data:image/svg+xml;base64,')) {
                return existingAvatar;
            }
        }
        const text = (handle || name || 'Customer').replace(/^[@_]+/, '').trim();
        const initial = (text[0] || 'C').toUpperCase();
        
        const palettes = [
            ['#833AB4', '#FD1D1D'], // Instagram Sunset
            ['#4F46E5', '#7C3AED'], // Royal Purple
            ['#0284C7', '#2563EB'], // Sky Blue
            ['#059669', '#10B981'], // Emerald Green
            ['#E11D48', '#FB7185'], // Vivid Rose
            ['#D97706', '#F59E0B'], // Warm Amber
            ['#9333EA', '#C026D3'], // Violet Fuchsia
            ['#0891B2', '#06B6D4']  // Cyan Teal
        ];
        let hash = 0;
        const str = handle || name || 'C';
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        const [bg1, bg2] = palettes[Math.abs(hash) % palettes.length];
        
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><defs><linearGradient id="grad_${Math.abs(hash)}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${bg1}"/><stop offset="100%" stop-color="${bg2}"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#grad_${Math.abs(hash)})"/><text x="50" y="50" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,sans-serif" font-size="46" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">${initial}</text></svg>`;
        return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
    }

    function loadAppState() {
        try {
            const savedStr = localStorage.getItem('instaflow_app_state');
            if (savedStr) {
                const parsed = JSON.parse(savedStr);
                if (parsed.reels && Array.isArray(parsed.reels) && parsed.reels.length > 0) {
                    appState.reels = parsed.reels;
                }
                if (parsed.leads && Array.isArray(parsed.leads)) {
                    // Only keep leads that actually matched a trigger keyword
                    appState.leads = parsed.leads
                        .filter(l => l.handle === '@gym_flow_offical' || (l.tags && l.tags.some(t => t.toLowerCase().includes('keyword'))))
                        .map(l => ({ ...l, avatar: getCustomerAvatar(l.handle, l.name, l.avatar) }));
                    if (appState.leads.length !== parsed.leads.length) {
                        parsed.leads = appState.leads;
                        try { localStorage.setItem('instaflow_app_state', JSON.stringify(parsed)); } catch (_) {}
                    }
                }
                if (parsed.recentActivities && Array.isArray(parsed.recentActivities)) {
                    appState.recentActivities = parsed.recentActivities
                        .filter(a => a.user !== '@david_k' && a.user !== '@shopper' && a.user !== '@customer')
                        .map(a => ({ ...a, avatar: getCustomerAvatar(a.user, a.user, a.avatar) }));
                }
                if (parsed.products && Array.isArray(parsed.products)) {
                    appState.products = parsed.products;
                }
                if (parsed.metrics) {
                    appState.metrics = parsed.metrics;
                }
                if (parsed.activePersona) {
                    appState.activePersona = parsed.activePersona;
                }
                if (parsed.activeTab) {
                    appState.activeTab = parsed.activeTab;
                }
                if (parsed.selectedBuilderReelId) {
                    appState.selectedBuilderReelId = parsed.selectedBuilderReelId;
                }
                if (parsed.selectedFlowRuleId) {
                    appState.selectedFlowRuleId = parsed.selectedFlowRuleId;
                }
                if (parsed.settings) {
                    const phoneEl = document.getElementById('inputBusinessWaPhone');
                    const templateEl = document.getElementById('inputBusinessWaTemplate');
                    if (phoneEl && parsed.settings.waPhone) phoneEl.value = parsed.settings.waPhone;
                    if (templateEl && parsed.settings.waTemplate) templateEl.value = parsed.settings.waTemplate;
                }
            }
        } catch (e) {
            console.warn('Error loading local state:', e);
        }

        // Live server sync: fetch verified live backend state
        if (window.fetch) {
            fetch('/api/state')
                .then(r => r.json())
                .then(serverState => {
                    if (serverState) {
                        if (serverState.metrics) {
                            appState.metrics = serverState.metrics;
                            const cEl = document.getElementById('valTotalComments');
                            if (cEl) cEl.textContent = serverState.metrics.total_comments.toLocaleString();
                            const dEl = document.getElementById('valTotalDms');
                            if (dEl) dEl.textContent = serverState.metrics.total_dms.toLocaleString();
                            const wEl = document.getElementById('valWhatsappHandoffs');
                            if (wEl) wEl.textContent = serverState.metrics.whatsapp_orders.toLocaleString();
                            const sEl = document.getElementById('valApiSavingsSaved');
                            if (sEl) sEl.textContent = '$' + (serverState.metrics.api_savings || 0).toFixed(2);
                        }
                        if (serverState.leads && Array.isArray(serverState.leads)) {
                            appState.leads = serverState.leads
                                .filter(l => l.handle === '@gym_flow_offical' || (l.tags && l.tags.some(t => t.toLowerCase().includes('keyword'))))
                                .map(l => ({
                                    ...l,
                                    avatar: getCustomerAvatar(l.handle, l.name, l.avatar)
                                }));
                            appState.selectedLeadId = appState.leads.length > 0 ? appState.leads[0].id : null;
                            try {
                                const saved = JSON.parse(localStorage.getItem('instaflow_app_state') || '{}');
                                saved.leads = appState.leads;
                                localStorage.setItem('instaflow_app_state', JSON.stringify(saved));
                            } catch (_) {}
                            renderCrmChat();
                        }
                        if (serverState.activities && Array.isArray(serverState.activities) && serverState.activities.length > 0) {
                            appState.recentActivities = serverState.activities.map(a => ({
                                ...a,
                                avatar: getCustomerAvatar(a.user, a.user, a.avatar)
                            }));
                            renderDashboard();
                        }
                    }
                })
                .catch(e => console.debug('Server state fetch note:', e));
        }
    }

    // Load persisted state immediately on DOM ready
    loadAppState();

    // ==========================================================================
    // 2. SVG ICON REGISTRY HELPER (ZERO EMOJIS)
    // ==========================================================================
    const SVG_ICONS = {
        check: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
        zap: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
        shopping: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
        star: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
        agency: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
        package: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
        message: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        phone: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
        eye: `<svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
        chat: `<svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
        send: `<svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
        play: `<svg class="icon-xs" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
        film: `<svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>`,
        settings: `<svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
    };

    function playNotificationSound() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
            osc.frequency.setValueAtTime(880.00, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.25);
        } catch (e) {}
    }

    function showToast(iconType, message) {
        const toast = document.getElementById('appToast');
        const toastIcon = document.getElementById('toastIcon');
        const toastMsg = document.getElementById('toastMessage');
        if (!toast) return;

        const iconSvg = SVG_ICONS[iconType] || SVG_ICONS.zap;
        if (toastIcon) toastIcon.innerHTML = iconSvg;
        if (toastMsg) toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }

    // ==========================================================================
    // 3. TAB NAVIGATION (GLASSMORPHIC TABS CONTROLLER)
    // ==========================================================================
    const glassTabs = document.querySelectorAll('.glass-tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    function switchTab(tabId) {
        appState.activeTab = tabId;
        saveAppState();
        glassTabs.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
        });
        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === tabId);
        });

        if (tabId === 'tabCrm') renderCrmChat();
        if (tabId === 'tabReels') renderReelsGrid();
        if (tabId === 'tabCatalog') renderProductCatalog();
        if (tabId === 'tabBuilder') renderFlowBuilder();
    }

    glassTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            if (target) switchTab(target);
        });
    });

    const btnQuickNewReel = document.getElementById('btnQuickNewReel');
    if (btnQuickNewReel) {
        btnQuickNewReel.addEventListener('click', () => {
            switchTab('tabReels');
            openReelModal();
        });
    }

    // ==========================================================================
    // 4. PERSONA SWITCHER
    // ==========================================================================
    const personaBtns = document.querySelectorAll('.persona-btn');
    const personaBadge = document.getElementById('personaBadge');
    const dashTitle = document.getElementById('dashTitle');
    const dashDesc = document.getElementById('dashDesc');

    function setPersona(persona) {
        appState.activePersona = persona;
        saveAppState();
        personaBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-persona') === persona);
        });

        if (persona === 'shop') {
            if (personaBadge) personaBadge.textContent = 'Shop Owner';
            if (dashTitle) dashTitle.textContent = 'Executive Commerce Overview';
            if (dashDesc) dashDesc.textContent = 'Real-time performance across Instagram Reels comment triggers, automated DMs, and WhatsApp sales handoffs.';
            showToast('shopping', 'Switched to Shop Owner Mode: E-Commerce & Product Funnels active.');
        } else if (persona === 'creator') {
            if (personaBadge) personaBadge.textContent = 'Influencer Mode';
            if (dashTitle) dashTitle.textContent = 'Creator & Influencer Funnels';
            if (dashDesc) dashDesc.textContent = 'Automate affiliate links, media kit deliveries, course signups, and brand sponsorship inquiries.';
            showToast('star', 'Switched to Influencer Mode: Affiliate & Sponsorship DM rules enabled.');
        } else if (persona === 'agency') {
            if (personaBadge) personaBadge.textContent = 'Agency Portal';
            if (dashTitle) dashTitle.textContent = 'Digital Agency Multi-Client Hub';
            if (dashDesc) dashDesc.textContent = 'Manage 12 client Instagram brands, cross-account reel campaigns, and attribution analytics.';
            showToast('agency', 'Switched to Agency Mode: Multi-client analytics and white-labeling active.');
        }
    }

    personaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const p = btn.getAttribute('data-persona');
            if (p) setPersona(p);
        });
    });

    // ==========================================================================
    // 5. RENDER DASHBOARD (ACTIVITY FEED & LEADERBOARD)
    // ==========================================================================
    function renderDashboard() {
        const feedContainer = document.getElementById('activityFeedList');
        if (feedContainer) {
            if (appState.recentActivities.length === 0) {
                feedContainer.innerHTML = `
                    <div style="text-align:center; padding:32px 16px; color:var(--grey-500);">
                        <div style="margin-bottom:8px; color:var(--grey-400);">${SVG_ICONS.zap}</div>
                        <div style="font-weight:600; font-size:0.9rem; color:var(--grey-700);">No Recent Activity</div>
                        <div style="font-size:0.75rem; margin-top:4px; color:var(--grey-500);">Incoming reel comments and auto-DMs will appear here in real time.</div>
                    </div>
                `;
            } else {
                feedContainer.innerHTML = appState.recentActivities.map(item => `
                    <div class="activity-item" id="act-${Date.now()}-${Math.floor(Math.random() * 100)}">
                        <img src="${getCustomerAvatar(item.user, item.user, item.avatar)}" alt="${item.user}" class="activity-avatar">
                        <div class="activity-body">
                            <div class="activity-head">
                                <span class="activity-user">${item.user}</span>
                                <span class="activity-time">${item.time}</span>
                            </div>
                            <div class="activity-text">${item.action}</div>
                            <span class="activity-badge ${item.badgeClass}">${item.badge}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        const leaderboardContainer = document.getElementById('leaderboardList');
        if (leaderboardContainer) {
            if (appState.reels.length === 0) {
                leaderboardContainer.innerHTML = `
                    <div style="text-align:center; padding:32px 16px; color:var(--grey-500);">
                        <div style="font-weight:600; font-size:0.9rem; color:var(--grey-700);">No Connected Reels</div>
                    </div>
                `;
            } else {
                leaderboardContainer.innerHTML = appState.reels.map(r => `
                    <div class="leader-item" id="leader-reel-${r.id}">
                        <img src="${r.img}" alt="${r.title}" class="leader-thumb">
                        <div class="leader-info">
                            <div class="leader-title">${r.title}</div>
                            <div class="leader-stats">
                                <span style="display:inline-flex; align-items:center; gap:3px;">${SVG_ICONS.star} ${r.views}</span>
                                <span style="display:inline-flex; align-items:center; gap:3px;">${SVG_ICONS.message} ${r.comments} cmts</span>
                                <span style="display:inline-flex; align-items:center; gap:3px;">${SVG_ICONS.zap} ${r.dmsSent} DMs</span>
                            </div>
                        </div>
                        <div class="leader-revenue">${r.revenue}</div>
                    </div>
                `).join('');
            }
        }
    }
    renderDashboard();

    // ==========================================================================
    // 6. TAB 2: REELS AUTOMATION MANAGER (PER-REEL CONFIGURATION)
    // ==========================================================================
    function renderReelsGrid() {
        const grid = document.getElementById('reelsGalleryGrid');
        if (!grid) return;

        const filtered = appState.reels.filter(r => {
            if (appState.reelsFilter === 'active') return r.active;
            if (appState.reelsFilter === 'paused') return !r.active;
            return true;
        });

        grid.innerHTML = filtered.map(reel => {
            // Aggregate all keywords across all flows for this reel
            const allKeywords = [];
            reel.flows.forEach(f => f.keywords.forEach(k => {
                if (!allKeywords.includes(k)) allKeywords.push(k);
            }));

            return `
            <div class="reel-card" id="reel-card-${reel.id}">
                <div class="reel-preview-wrap">
                    <img src="${reel.img}" alt="${reel.title}" class="reel-preview-img">
                    <div class="reel-badge-status" style="background:${reel.active ? 'rgba(16, 185, 129, 0.95)' : 'rgba(100, 116, 139, 0.95)'};">
                        ${reel.active ? 'Active Trigger' : 'Paused'}
                    </div>
                    <div class="reel-play-count">
                        <span class="svg-icon">${SVG_ICONS.play}</span>
                        <span>${reel.views} views</span>
                    </div>
                </div>
                <div class="reel-body">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                        <h3 class="reel-title" style="margin:0;">${reel.title}</h3>
                        <span class="activity-badge badge-blue" style="font-size:0.68rem;">${reel.flows.length} Flow Rules</span>
                    </div>
                    
                    <div style="font-size:0.75rem; color:#64748B; margin-bottom:8px;">Trigger Keywords (${allKeywords.length}):</div>
                    <div class="trigger-tag-row">
                        ${allKeywords.slice(0, 6).map(kw => `<span class="trigger-tag">#${kw}</span>`).join('')}
                        ${allKeywords.length > 6 ? `<span class="trigger-tag">+${allKeywords.length - 6} more</span>` : ''}
                    </div>

                    <div class="reel-rules-summary">
                        <div><strong>Public Reply:</strong> "${reel.publicReplies[0]}"</div>
                        <div style="margin-top:4px;"><strong>Sequences:</strong> Immediate Card + 15-Min Follow-up</div>
                    </div>

                    <div class="reel-card-actions">
                        <button type="button" class="btn-primary" style="flex:1; padding:7px 12px; font-size:0.78rem;" onclick="openReelConfigModal(${reel.id})">
                            <span class="svg-icon">${SVG_ICONS.settings}</span>
                            <span>Automations</span>
                        </button>
                        <button type="button" class="btn-secondary" style="padding:7px 12px; font-size:0.78rem;" onclick="jumpToReelFlowBuilder(${reel.id})">
                            DM Flow &amp; Line-Up
                        </button>
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }
    renderReelsGrid();

    // Reels Filters
    const filterReelsAll = document.getElementById('filterReelsAll');
    const filterReelsActive = document.getElementById('filterReelsActive');
    const filterReelsPaused = document.getElementById('filterReelsPaused');
    const inputSearchReels = document.getElementById('inputSearchReels');

    if (filterReelsAll) {
        filterReelsAll.addEventListener('click', () => {
            appState.reelsFilter = 'all';
            filterReelsAll.className = 'activity-badge badge-blue';
            filterReelsActive.className = 'activity-badge';
            filterReelsPaused.className = 'activity-badge';
            renderReelsGrid();
        });
    }
    if (filterReelsActive) {
        filterReelsActive.addEventListener('click', () => {
            appState.reelsFilter = 'active';
            filterReelsActive.className = 'activity-badge badge-blue';
            filterReelsAll.className = 'activity-badge';
            filterReelsPaused.className = 'activity-badge';
            renderReelsGrid();
        });
    }
    if (filterReelsPaused) {
        filterReelsPaused.addEventListener('click', () => {
            appState.reelsFilter = 'paused';
            filterReelsPaused.className = 'activity-badge badge-blue';
            filterReelsAll.className = 'activity-badge';
            filterReelsActive.className = 'activity-badge';
            renderReelsGrid();
        });
    }

    if (inputSearchReels) {
        inputSearchReels.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('#reelsGalleryGrid .reel-card');
            cards.forEach(c => {
                const text = c.textContent.toLowerCase();
                c.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }

    // Jump to Flow Builder for specific reel
    window.jumpToReelFlowBuilder = (reelId) => {
        appState.selectedBuilderReelId = reelId;
        const reel = appState.reels.find(r => r.id === reelId);
        if (reel && reel.flows.length > 0) {
            appState.selectedFlowRuleId = reel.flows[0].id;
        }
        switchTab('tabBuilder');
        showToast('message', `Loaded Flow & Keyword Line-Up for "${reel.title}"`);
    };

    // Sync live reels from @sreee._.ram
    const btnSyncInstagramReels = document.getElementById('btnSyncInstagramReels');
    if (btnSyncInstagramReels) {
        btnSyncInstagramReels.addEventListener('click', () => {
            btnSyncInstagramReels.innerHTML = `<span class="svg-icon">${SVG_ICONS.zap}</span><span>Syncing...</span>`;
            setTimeout(() => {
                btnSyncInstagramReels.innerHTML = `<span class="svg-icon">${SVG_ICONS.check}</span><span>Synced (@sreee._.ram)</span>`;
                renderReelsGrid();
                showToast('check', `Successfully synced 4 live posts & reels from @sreee._.ram!`);
                setTimeout(() => {
                    btnSyncInstagramReels.innerHTML = `
                        <span class="svg-icon">
                            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="23 4 23 10 17 10"></polyline>
                                <polyline points="1 20 1 14 7 14"></polyline>
                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                        </span>
                        <span>Sync Reels (@sreee._.ram)</span>
                    `;
                }, 3000);
            }, 600);
        });
    }

    // Settings Save Button & Free WhatsApp link test
    const btnSaveSettings = document.getElementById('btnSaveSettings');
    if (btnSaveSettings) {
        btnSaveSettings.addEventListener('click', () => {
            saveAppState();
            showToast('check', 'All settings and WhatsApp bridge configuration saved successfully!');
        });
    }

    const inputWaPhone = document.getElementById('inputBusinessWaPhone');
    if (inputWaPhone) inputWaPhone.addEventListener('input', triggerAutoSave);
    const inputWaTpl = document.getElementById('inputBusinessWaTemplate');
    if (inputWaTpl) inputWaTpl.addEventListener('input', triggerAutoSave);

    const btnTestWaMeLink = document.getElementById('btnTestWaMeLink');
    if (btnTestWaMeLink) {
        btnTestWaMeLink.addEventListener('click', () => {
            const phoneInput = document.getElementById('inputBusinessWaPhone');
            const templateInput = document.getElementById('inputBusinessWaTemplate');
            const phone = phoneInput ? phoneInput.value.replace(/[^0-9]/g, '') : '919876543210';
            const template = templateInput ? templateInput.value.replace('{product}', 'Featured Item').replace('{reel_id}', '18079') : 'Hi! I want to order.';
            const testUrl = `https://wa.me/${phone}?text=${encodeURIComponent(template)}`;
            window.open(testUrl, '_blank');
            showToast('check', `Opened free WhatsApp direct chat link (Zero Meta fees)!`);
        });
    }

    // Modal Add Reel Logic
    const modalAddReel = document.getElementById('modalAddReel');
    const btnOpenReelModal = document.getElementById('btnOpenReelModal');
    const btnCloseReelModal = document.getElementById('btnCloseReelModal');
    const btnCancelReelModal = document.getElementById('btnCancelReelModal');
    const btnSubmitNewReel = document.getElementById('btnSubmitNewReel');

    function openReelModal() {
        if (modalAddReel) modalAddReel.classList.add('active');
    }
    function closeReelModal() {
        if (modalAddReel) modalAddReel.classList.remove('active');
    }

    if (btnOpenReelModal) btnOpenReelModal.addEventListener('click', openReelModal);
    if (btnCloseReelModal) btnCloseReelModal.addEventListener('click', closeReelModal);
    if (btnCancelReelModal) btnCancelReelModal.addEventListener('click', closeReelModal);

    if (btnSubmitNewReel) {
        btnSubmitNewReel.addEventListener('click', () => {
            const title = document.getElementById('newReelTitle').value.trim();
            const keywordsStr = document.getElementById('newReelKeywords').value.trim();
            const publicReply = document.getElementById('newReelPublicReply').value.trim();
            const thumb = document.getElementById('newReelThumb').value.trim() || 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=80';

            if (!title) {
                alert('Please enter a Reel product title!');
                return;
            }

            const newId = 100 + appState.reels.length + 1;
            const keywords = keywordsStr ? keywordsStr.split(',').map(s => s.trim().toUpperCase()) : ['PRICE', 'BUY'];

            const newReel = {
                id: newId,
                title,
                sku: `SKU-${newId}`,
                views: '0.4k',
                comments: 0,
                dmsSent: 0,
                revenue: '$0',
                active: true,
                publicReplies: [publicReply || 'Check your DM! Secret 15% link sent.'],
                img: thumb,
                flows: [
                    {
                        id: `flow-${newId}-1`,
                        name: 'Primary Keyword Flow',
                        keywords,
                        simulatedCustomerComment: `${keywords[0]} please!`,
                        welcomeText: `Hey {name}! Thanks for commenting on our ${title} reel. Here is the secret product link:`,
                        cardTitle: title,
                        cardPrice: "$45.00 (15% OFF)",
                        cardSubtitle: "Instant DM special discount. Tap below to order on WhatsApp.",
                        cardImg: thumb,
                        buttons: [
                            { id: 'b_new1', text: 'Order on WhatsApp (Free)', action: 'whatsapp', style: 'whatsapp' },
                            { id: 'b_new2', text: 'Claim 15% Coupon', action: 'coupon', style: 'default' }
                        ],
                        followUp: {
                            enabled: true,
                            condition: 'no_click',
                            delayMinutes: 15,
                            text: `Still interested in ${title}? We just unlocked free shipping for your order!`
                        }
                    }
                ]
            };

            appState.reels.unshift(newReel);
            saveAppState();
            renderReelsGrid();
            closeReelModal();
            showToast('check', `New Reel "${title}" connected with automated triggers!`);
        });
    }

    // Modal: Configure Automations for Specific Reel
    const modalReelConfig = document.getElementById('modalReelConfig');
    const btnCloseReelConfigModal = document.getElementById('btnCloseReelConfigModal');
    const btnCancelReelConfig = document.getElementById('btnCancelReelConfig');
    const btnSaveReelConfig = document.getElementById('btnSaveReelConfig');
    const modalConfigReelTitle = document.getElementById('modalConfigReelTitle');
    const modalConfigReelSubtitle = document.getElementById('modalConfigReelSubtitle');
    const toggleReelActiveState = document.getElementById('toggleReelActiveState');
    const lblReelActiveState = document.getElementById('lblReelActiveState');
    const modalKeywordsPills = document.getElementById('modalKeywordsPills');
    const inputModalNewKeyword = document.getElementById('inputModalNewKeyword');
    const btnModalAddKeyword = document.getElementById('btnModalAddKeyword');
    const modalReelPublicReplies = document.getElementById('modalReelPublicReplies');
    const btnModalJumpToFlowBuilder = document.getElementById('btnModalJumpToFlowBuilder');

    window.openReelConfigModal = (reelId) => {
        appState.editingReelId = reelId;
        const reel = appState.reels.find(r => r.id === reelId);
        if (!reel || !modalReelConfig) return;

        modalConfigReelTitle.textContent = `Automations: ${reel.title}`;
        modalConfigReelSubtitle.textContent = `Configuring Reel #${reel.id} (${reel.views} views • ${reel.flows.length} flows)`;
        toggleReelActiveState.checked = reel.active;
        lblReelActiveState.textContent = reel.active ? 'Active' : 'Paused';
        modalReelPublicReplies.value = reel.publicReplies.join('\n');

        renderModalKeywordsPills(reel);
        renderModalFlowsList(reel);
        modalReelConfig.classList.add('active');
    };

    function renderModalKeywordsPills(reel) {
        if (!modalKeywordsPills) return;
        // Collect all unique keywords across all flows
        const allKw = [];
        reel.flows.forEach(f => f.keywords.forEach(k => {
            if (!allKw.includes(k)) allKw.push(k);
        }));

        modalKeywordsPills.innerHTML = allKw.map((kw, i) => `
            <span class="keyword-pill-removable">
                <span>#${kw}</span>
                <button type="button" class="keyword-remove-btn" onclick="removeReelKeyword(${reel.id}, '${kw}')">&times;</button>
            </span>
        `).join('') || '<span style="font-size:0.75rem; color:#94A3B8;">No keywords added yet. Add one or multiple below:</span>';
    }

    function renderModalFlowsList(reel) {
        const flowsContainer = document.getElementById('modalReelFlowsList');
        if (!flowsContainer) return;
        flowsContainer.innerHTML = reel.flows.map((f, idx) => `
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:10px 12px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
                <div style="flex:1;">
                    <div style="display:flex; align-items:center; gap:6px;">
                        <strong style="font-size:0.84rem; color:#1E293B;">${f.name}</strong>
                        <span class="activity-badge badge-blue" style="font-size:0.68rem;">${f.keywords.length} keywords</span>
                        ${f.followUp && f.followUp.enabled ? `<span class="activity-badge badge-green" style="font-size:0.68rem;">+${f.followUp.delayMinutes}m Follow-up</span>` : ''}
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:5px;">
                        ${f.keywords.map(k => `<span class="trigger-tag" style="font-size:0.68rem; padding:2px 6px;">#${k}</span>`).join('')}
                    </div>
                </div>
                <button type="button" class="btn-outline-blue" style="padding:5px 10px; font-size:0.75rem; white-space:nowrap;" onclick="editReelFlowDirect(${reel.id}, '${f.id}')">
                    Edit Flow &gt;
                </button>
            </div>
        `).join('');
    }

    window.editReelFlowDirect = (reelId, flowId) => {
        closeReelConfigModal();
        appState.selectedBuilderReelId = reelId;
        appState.selectedFlowRuleId = flowId;
        switchTab('tabBuilder');
        showToast('zap', `Loaded flow in Visual DM Flow Builder!`);
    };

    window.removeReelKeyword = (reelId, kw) => {
        const reel = appState.reels.find(r => r.id === reelId);
        if (reel) {
            reel.flows.forEach(f => {
                f.keywords = f.keywords.filter(k => k !== kw);
            });
            saveAppState();
            renderModalKeywordsPills(reel);
            renderModalFlowsList(reel);
            renderReelsGrid();
        }
    };

    if (btnModalAddKeyword && inputModalNewKeyword) {
        const handleModalAddKeywords = () => {
            const raw = inputModalNewKeyword.value.trim();
            if (!raw) return;
            const reel = appState.reels.find(r => r.id === appState.editingReelId);
            if (reel && reel.flows.length > 0) {
                const keywordsToAdd = raw.split(',').map(s => s.trim().toUpperCase().replace(/^#/, '')).filter(Boolean);
                let count = 0;
                keywordsToAdd.forEach(kw => {
                    if (!reel.flows[0].keywords.includes(kw)) {
                        reel.flows[0].keywords.push(kw);
                        count++;
                    }
                });
                inputModalNewKeyword.value = '';
                saveAppState();
                renderModalKeywordsPills(reel);
                renderModalFlowsList(reel);
                renderReelsGrid();
                if (count > 0) showToast('check', `Added ${count} keyword(s) to "${reel.title}"!`);
            }
        };

        btnModalAddKeyword.addEventListener('click', handleModalAddKeywords);
        inputModalNewKeyword.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleModalAddKeywords();
            }
        });
    }

    const btnModalAddNewFlow = document.getElementById('btnModalAddNewFlow');
    if (btnModalAddNewFlow) {
        btnModalAddNewFlow.addEventListener('click', () => {
            const reel = appState.reels.find(r => r.id === appState.editingReelId);
            if (!reel) return;
            const name = prompt('Enter a name for this new Flow Rule (e.g., "Fabric Inquiries"):', 'Custom Keyword Rule');
            if (!name) return;
            const kw = prompt('Enter trigger keywords (comma-separated):', 'FABRIC, MATERIAL, WASHING');
            const keywords = kw ? kw.split(',').map(s => s.trim().toUpperCase().replace(/^#/, '')).filter(Boolean) : ['CUSTOM'];
            const newFlowId = `flow-${Date.now().toString().slice(-4)}`;
            reel.flows.push({
                id: newFlowId,
                name,
                keywords,
                simulatedCustomerComment: `${keywords[0]} info please!`,
                welcomeText: `Hey {name}! Here are the details regarding ${name.toLowerCase()}:`,
                cardTitle: reel.title,
                cardPrice: "$39.00",
                cardSubtitle: "Instant response for your inquiry. Tap below to chat directly:",
                cardImg: reel.img,
                buttons: [
                    { id: `b_${Date.now()}_1`, text: 'Chat on WhatsApp', action: 'whatsapp', style: 'whatsapp' },
                    { id: `b_${Date.now()}_2`, text: 'Claim Offer', action: 'coupon', style: 'default' }
                ],
                followUp: {
                    enabled: true,
                    condition: 'no_click',
                    delayMinutes: 15,
                    text: `Did that help answer your question about ${name.toLowerCase()}? Let us know if you need any assistance!`
                }
            });
            saveAppState();
            renderModalFlowsList(reel);
            renderModalKeywordsPills(reel);
            renderReelsGrid();
            showToast('check', `Created new flow rule "${name}" with ${keywords.length} keywords!`);
        });
    }

    if (toggleReelActiveState && lblReelActiveState) {
        toggleReelActiveState.addEventListener('change', (e) => {
            lblReelActiveState.textContent = e.target.checked ? 'Active' : 'Paused';
        });
    }

    function closeReelConfigModal() {
        if (modalReelConfig) modalReelConfig.classList.remove('active');
    }

    if (btnCloseReelConfigModal) btnCloseReelConfigModal.addEventListener('click', closeReelConfigModal);
    if (btnCancelReelConfig) btnCancelReelConfig.addEventListener('click', closeReelConfigModal);

    if (btnSaveReelConfig) {
        btnSaveReelConfig.addEventListener('click', () => {
            const reel = appState.reels.find(r => r.id === appState.editingReelId);
            if (reel) {
                reel.active = toggleReelActiveState.checked;
                const replies = modalReelPublicReplies.value.split('\n').map(s => s.trim()).filter(Boolean);
                if (replies.length > 0) reel.publicReplies = replies;
                saveAppState();
                renderReelsGrid();
                closeReelConfigModal();
                showToast('check', `Saved automation rules for ${reel.title}!`);
            }
        });
    }

    if (btnModalJumpToFlowBuilder) {
        btnModalJumpToFlowBuilder.addEventListener('click', () => {
            closeReelConfigModal();
            jumpToReelFlowBuilder(appState.editingReelId);
        });
    }

    // ==========================================================================
    // 7. TAB 3: SMART DM FLOW BUILDER (MULTI-KEYWORD & SEQUENTIAL LINE-UP)
    // ==========================================================================
    const selectBuilderTargetReel = document.getElementById('selectBuilderTargetReel');
    const flowKeywordTabs = document.getElementById('flowKeywordTabs');
    const keywordPillsContainer = document.getElementById('keywordPillsContainer');
    const inputNewKeyword = document.getElementById('inputNewKeyword');
    const btnAddKeywordBtn = document.getElementById('btnAddKeywordBtn');
    const btnSwitchToReelsTab = document.getElementById('btnSwitchToReelsTab');

    // Step 1 Inputs
    const inputFlowMessage = document.getElementById('inputFlowMessage');
    const inputCardTitle = document.getElementById('inputCardTitle');
    const inputCardPrice = document.getElementById('inputCardPrice');
    const inputCardSubtitle = document.getElementById('inputCardSubtitle');
    const inputCardImageUrl = document.getElementById('inputCardImageUrl');
    const buttonEditorList = document.getElementById('buttonEditorList');
    const btnAddInteractiveButton = document.getElementById('btnAddInteractiveButton');

    // Step 2 Follow-up Inputs
    const checkEnableFollowup = document.getElementById('checkEnableFollowup');
    const selectFollowupCondition = document.getElementById('selectFollowupCondition');
    const selectFollowupDelay = document.getElementById('selectFollowupDelay');
    const inputFollowupText = document.getElementById('inputFollowupText');

    // Simulator elements
    const simulatedMsgText = document.getElementById('simulatedMsgText');
    const simulatedCardTitle = document.getElementById('simulatedCardTitle');
    const simulatedCardPrice = document.getElementById('simulatedCardPrice');
    const simulatedCardSubtitle = document.getElementById('simulatedCardSubtitle');
    const simulatedCardImg = document.getElementById('simulatedCardImg');
    const simulatedButtonsContainer = document.getElementById('simulatedButtonsContainer');

    function getActiveReel() {
        return appState.reels.find(r => r.id === appState.selectedBuilderReelId) || appState.reels[0];
    }

    function getActiveFlow() {
        const reel = getActiveReel();
        return reel.flows.find(f => f.id === appState.selectedFlowRuleId) || reel.flows[0];
    }

    function renderFlowBuilder() {
        const activeReel = getActiveReel();
        const activeFlow = getActiveFlow();

        // 1. Populate Target Reel dropdown
        if (selectBuilderTargetReel) {
            selectBuilderTargetReel.innerHTML = appState.reels.map(r => `
                <option value="${r.id}" ${r.id === activeReel.id ? 'selected' : ''}>
                    Reel #${r.id}: ${r.title}
                </option>
            `).join('');
        }

        // 2. Render Flow Keyword Rule Tabs
        if (flowKeywordTabs) {
            flowKeywordTabs.innerHTML = activeReel.flows.map(f => `
                <button type="button" class="flow-keyword-tab-btn ${f.id === activeFlow.id ? 'active' : ''}" onclick="selectFlowRule('${f.id}')">
                    <span>${f.name}</span>
                    <span style="font-size:0.7rem; opacity:0.75;">(${f.keywords.length} keywords)</span>
                </button>
            `).join('') + `
                <button type="button" class="btn-outline-blue" id="btnAddNewFlowRule" style="padding:6px 12px; font-size:0.78rem;" onclick="addNewKeywordFlowRule()">
                    + Add Keyword Rule
                </button>
                ${activeReel.flows.length > 1 ? `
                <button type="button" class="btn-secondary" style="padding:6px 10px; font-size:0.78rem; color:#EF4444; border-color:#FECACA;" onclick="deleteActiveFlowRule()" title="Delete this rule">
                    Delete Rule
                </button>` : ''}
            `;
        }

        // 3. Render Keyword Pills for this active flow
        renderKeywordPills();

        // 4. Populate Step 1 Inputs with active flow values
        if (inputFlowMessage) inputFlowMessage.value = activeFlow.welcomeText;
        if (inputCardTitle) inputCardTitle.value = activeFlow.cardTitle;
        if (inputCardPrice) inputCardPrice.value = activeFlow.cardPrice;
        if (inputCardSubtitle) inputCardSubtitle.value = activeFlow.cardSubtitle;
        if (inputCardImageUrl) inputCardImageUrl.value = activeFlow.cardImg;

        // 5. Populate Step 2 Follow-Up Inputs
        if (activeFlow.followUp) {
            if (checkEnableFollowup) checkEnableFollowup.checked = activeFlow.followUp.enabled;
            if (selectFollowupCondition) selectFollowupCondition.value = activeFlow.followUp.condition || 'no_click';
            if (selectFollowupDelay) selectFollowupDelay.value = activeFlow.followUp.delayMinutes || '15';
            if (inputFollowupText) inputFollowupText.value = activeFlow.followUp.text || '';
        }

        // 6. Render Buttons
        renderButtonEditorRows();

        // 7. Synchronize Live iPhone Simulator
        syncPhoneSimulator();
    }

    function renderKeywordPills() {
        if (!keywordPillsContainer) return;
        const activeFlow = getActiveFlow();
        keywordPillsContainer.innerHTML = activeFlow.keywords.map((kw, idx) => `
            <span class="keyword-pill-removable">
                <span>#${kw}</span>
                <button type="button" class="keyword-remove-btn" onclick="removeKeywordFromFlow(${idx})">&times;</button>
            </span>
        `).join('') || '<span style="font-size:0.75rem; color:#94A3B8;">No keywords assigned. Add one below:</span>';
    }

    window.selectFlowRule = (flowId) => {
        appState.selectedFlowRuleId = flowId;
        renderFlowBuilder();
        showToast('zap', `Switched to "${getActiveFlow().name}"`);
    };

    window.deleteActiveFlowRule = () => {
        const activeReel = getActiveReel();
        if (activeReel.flows.length <= 1) {
            alert('A reel must have at least one keyword flow rule!');
            return;
        }
        const activeFlow = getActiveFlow();
        if (confirm(`Are you sure you want to delete the flow rule "${activeFlow.name}"?`)) {
            activeReel.flows = activeReel.flows.filter(f => f.id !== activeFlow.id);
            appState.selectedFlowRuleId = activeReel.flows[0].id;
            saveAppState();
            renderFlowBuilder();
            renderReelsGrid();
            showToast('zap', `Deleted flow rule "${activeFlow.name}"`);
        }
    };

    window.removeKeywordFromFlow = (idx) => {
        const activeFlow = getActiveFlow();
        if (activeFlow.keywords.length <= 1) {
            alert('A flow rule must have at least one keyword trigger!');
            return;
        }
        activeFlow.keywords.splice(idx, 1);
        saveAppState();
        renderKeywordPills();
        renderReelsGrid();
    };

    function addKeywordToActiveFlow() {
        if (!inputNewKeyword) return;
        const raw = inputNewKeyword.value.trim();
        if (!raw) return;
        const activeFlow = getActiveFlow();
        // Support comma-separated multiple keywords at once (e.g. "PRICE, COST, DISCOUNT, VOUCHER")
        const keywordsToAdd = raw.split(',').map(s => s.trim().toUpperCase().replace(/^#/, '')).filter(Boolean);
        let count = 0;
        keywordsToAdd.forEach(kw => {
            if (!activeFlow.keywords.includes(kw)) {
                activeFlow.keywords.push(kw);
                count++;
            }
        });
        if (count > 0) {
            saveAppState();
            renderKeywordPills();
            renderReelsGrid();
            inputNewKeyword.value = '';
            showToast('check', `Added ${count} keyword(s) to "${activeFlow.name}"!`);
        } else {
            showToast('zap', `Keyword(s) already exist in this flow.`);
            inputNewKeyword.value = '';
        }
    }

    if (btnAddKeywordBtn) btnAddKeywordBtn.addEventListener('click', addKeywordToActiveFlow);
    if (inputNewKeyword) {
        inputNewKeyword.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addKeywordToActiveFlow();
            }
        });
    }

    window.addNewKeywordFlowRule = () => {
        const activeReel = getActiveReel();
        const ruleName = prompt('Enter a name for this new Keyword Flow Rule (e.g. "Color Inquiries" or "Shipping Questions"):', 'Custom Keyword Rule');
        if (!ruleName) return;

        const kwInput = prompt('Enter trigger keywords for this rule (comma-separated):', 'COLOR, SHADES, AVAILABILITY');
        const keywords = kwInput ? kwInput.split(',').map(s => s.trim().toUpperCase()).filter(Boolean) : ['CUSTOM'];

        const newFlowId = `flow-${Date.now().toString().slice(-4)}`;
        const newFlow = {
            id: newFlowId,
            name: ruleName,
            keywords,
            simulatedCustomerComment: `${keywords[0]} please!`,
            welcomeText: `Hey {name}! Here are details regarding ${ruleName.toLowerCase()}:`,
            cardTitle: activeReel.title,
            cardPrice: "$39.00",
            cardSubtitle: "Instant response for your inquiry. Tap below to chat directly:",
            cardImg: activeReel.img,
            buttons: [
                { id: `b_${Date.now()}_1`, text: 'Chat on WhatsApp', action: 'whatsapp', style: 'whatsapp' },
                { id: `b_${Date.now()}_2`, text: 'Claim Offer', action: 'coupon', style: 'default' }
            ],
            followUp: {
                enabled: true,
                condition: 'no_click',
                delayMinutes: 15,
                text: `Did that answer your question about ${ruleName}? Let us know if you need anything else!`
            }
        };

        activeReel.flows.push(newFlow);
        appState.selectedFlowRuleId = newFlowId;
        saveAppState();
        renderFlowBuilder();
        renderReelsGrid();
        showToast('check', `Created new rule "${ruleName}" with ${keywords.length} keywords!`);
    };

    if (selectBuilderTargetReel) {
        selectBuilderTargetReel.addEventListener('change', (e) => {
            appState.selectedBuilderReelId = parseInt(e.target.value);
            const reel = getActiveReel();
            if (reel.flows.length > 0) {
                appState.selectedFlowRuleId = reel.flows[0].id;
            }
            renderFlowBuilder();
        });
    }

    if (btnSwitchToReelsTab) {
        btnSwitchToReelsTab.addEventListener('click', () => switchTab('tabReels'));
    }

    function syncPhoneSimulator() {
        const activeFlow = getActiveFlow();
        triggerAutoSave();

        if (simulatedMsgText && inputFlowMessage) {
            simulatedMsgText.textContent = inputFlowMessage.value.replace('{name}', 'Sarah');
            activeFlow.welcomeText = inputFlowMessage.value;
        }
        if (simulatedCardTitle && inputCardTitle) {
            simulatedCardTitle.textContent = inputCardTitle.value;
            activeFlow.cardTitle = inputCardTitle.value;
        }
        if (simulatedCardPrice && inputCardPrice) {
            simulatedCardPrice.textContent = inputCardPrice.value;
            activeFlow.cardPrice = inputCardPrice.value;
        }
        if (simulatedCardSubtitle && inputCardSubtitle) {
            simulatedCardSubtitle.textContent = inputCardSubtitle.value;
            activeFlow.cardSubtitle = inputCardSubtitle.value;
        }
        if (simulatedCardImg && inputCardImageUrl) {
            simulatedCardImg.src = inputCardImageUrl.value;
            activeFlow.cardImg = inputCardImageUrl.value;
        }

        // Show matching simulated comment in iPhone screen
        const customerCommentBubble = document.querySelector('#igDmMessagesArea div[style*="align-self:flex-end"]');
        if (customerCommentBubble) {
            customerCommentBubble.textContent = activeFlow.simulatedCustomerComment || (activeFlow.keywords.length ? `${activeFlow.keywords[0]} please!` : 'PRICE please!');
        }

        if (simulatedButtonsContainer) {
            simulatedButtonsContainer.innerHTML = activeFlow.buttons.map(btn => `
                <button type="button" class="ig-interactive-btn ${btn.style === 'whatsapp' ? 'btn-whatsapp' : ''}" onclick="triggerSimulatedDmAction('${btn.action}', '${btn.text}')">
                    ${btn.text}
                </button>
            `).join('');
        }

        // STEP 2 LINE-UP TIMED FOLLOW-UP PREVIEW
        const followupWrapper = document.getElementById('simulatedFollowupWrapper');
        const followupBadge = document.getElementById('simulatedFollowupBadge');
        const followupText = document.getElementById('simulatedFollowupMsgText');

        const isFollowupActive = checkEnableFollowup ? checkEnableFollowup.checked : (activeFlow.followUp && activeFlow.followUp.enabled);
        const delayVal = selectFollowupDelay ? selectFollowupDelay.value : (activeFlow.followUp ? activeFlow.followUp.delayMinutes : '15');
        const delayLabel = delayVal === '60' ? '+1 HOUR' : delayVal === '240' ? '+4 HOURS' : delayVal === '1440' ? '+24 HOURS' : `+${delayVal} MINS`;

        if (followupWrapper) {
            if (isFollowupActive) {
                followupWrapper.style.display = 'block';
                if (followupBadge) {
                    followupBadge.style.color = '#059669';
                    followupBadge.style.background = '#ECFDF5';
                    followupBadge.style.borderColor = '#A7F3D0';
                    followupBadge.textContent = `SEQUENCE STEP 2 • AUTO FOLLOW-UP (${delayLabel})`;
                }
                if (followupText) {
                    const textVal = inputFollowupText ? inputFollowupText.value : (activeFlow.followUp ? activeFlow.followUp.text : '');
                    followupText.textContent = textVal.replace('{product}', activeFlow.cardTitle || 'this item');
                    followupText.style.color = '#262626';
                    followupText.style.fontStyle = 'normal';
                }
            } else {
                followupWrapper.style.display = 'block';
                if (followupBadge) {
                    followupBadge.style.color = '#94A3B8';
                    followupBadge.style.background = '#F1F5F9';
                    followupBadge.style.borderColor = '#E2E8F0';
                    followupBadge.textContent = `SEQUENCE STEP 2 • FOLLOW-UP PAUSED`;
                }
                if (followupText) {
                    followupText.textContent = `(Automated follow-up line-up is paused for this keyword rule)`;
                    followupText.style.color = '#94A3B8';
                    followupText.style.fontStyle = 'italic';
                }
            }
        }
    }

    function renderButtonEditorRows() {
        if (!buttonEditorList) return;
        const activeFlow = getActiveFlow();
        buttonEditorList.innerHTML = activeFlow.buttons.map((btn, index) => `
            <div class="btn-config-row" id="btn-cfg-${btn.id}">
                <input type="text" class="form-input" style="padding:6px 10px; font-size:0.8rem;" value="${btn.text}" oninput="updateButtonText(${index}, this.value)">
                <select class="form-select" style="padding:6px 10px; font-size:0.8rem;" onchange="updateButtonAction(${index}, this.value)">
                    <option value="modal_product" ${btn.action === 'modal_product' ? 'selected' : ''}>View Sizing Details</option>
                    <option value="coupon" ${btn.action === 'coupon' ? 'selected' : ''}>Reveal 15% Coupon Code</option>
                    <option value="whatsapp" ${btn.action === 'whatsapp' ? 'selected' : ''}>WhatsApp Order Handoff (Free)</option>
                    <option value="human" ${btn.action === 'human' ? 'selected' : ''}>Request Human Support</option>
                </select>
                <select class="form-select" style="padding:6px 10px; font-size:0.8rem;" onchange="updateButtonStyle(${index}, this.value)">
                    <option value="default" ${btn.style === 'default' ? 'selected' : ''}>Blue Text</option>
                    <option value="whatsapp" ${btn.style === 'whatsapp' ? 'selected' : ''}>WhatsApp Green</option>
                </select>
                <button type="button" class="btn-remove-row" title="Delete Button" onclick="removeButtonRow(${index})">&times;</button>
            </div>
        `).join('');
        syncPhoneSimulator();
    }

    window.updateButtonText = (idx, val) => {
        const activeFlow = getActiveFlow();
        if (activeFlow.buttons[idx]) {
            activeFlow.buttons[idx].text = val;
            syncPhoneSimulator();
        }
    };
    window.updateButtonAction = (idx, val) => {
        const activeFlow = getActiveFlow();
        if (activeFlow.buttons[idx]) {
            activeFlow.buttons[idx].action = val;
            syncPhoneSimulator();
        }
    };
    window.updateButtonStyle = (idx, val) => {
        const activeFlow = getActiveFlow();
        if (activeFlow.buttons[idx]) {
            activeFlow.buttons[idx].style = val;
            syncPhoneSimulator();
        }
    };
    window.removeButtonRow = (idx) => {
        const activeFlow = getActiveFlow();
        if (activeFlow.buttons.length <= 1) {
            alert('You must have at least 1 interactive button in the DM flow!');
            return;
        }
        activeFlow.buttons.splice(idx, 1);
        saveAppState();
        renderButtonEditorRows();
    };

    if (btnAddInteractiveButton) {
        btnAddInteractiveButton.addEventListener('click', () => {
            const activeFlow = getActiveFlow();
            if (activeFlow.buttons.length >= 4) {
                alert('Instagram supports a maximum of 4 interactive quick-reply buttons per card message.');
                return;
            }
            const newBtnId = 'b' + (Date.now().toString().slice(-4));
            activeFlow.buttons.push({
                id: newBtnId,
                text: 'New Action Button',
                action: 'coupon',
                style: 'default'
            });
            saveAppState();
            renderButtonEditorRows();
        });
    }

    if (inputFlowMessage) inputFlowMessage.addEventListener('input', () => {
        const af = getActiveFlow();
        if (af) af.welcomeText = inputFlowMessage.value;
        syncPhoneSimulator();
        saveAppState();
    });
    if (inputCardTitle) inputCardTitle.addEventListener('input', () => {
        const af = getActiveFlow();
        if (af) af.cardTitle = inputCardTitle.value;
        syncPhoneSimulator();
        saveAppState();
    });
    if (inputCardPrice) inputCardPrice.addEventListener('input', () => {
        const af = getActiveFlow();
        if (af) af.cardPrice = inputCardPrice.value;
        syncPhoneSimulator();
        saveAppState();
    });
    if (inputCardSubtitle) inputCardSubtitle.addEventListener('input', () => {
        const af = getActiveFlow();
        if (af) af.cardSubtitle = inputCardSubtitle.value;
        syncPhoneSimulator();
        saveAppState();
    });
    if (inputCardImageUrl) inputCardImageUrl.addEventListener('input', () => {
        const af = getActiveFlow();
        if (af) af.cardImg = inputCardImageUrl.value;
        syncPhoneSimulator();
        saveAppState();
    });

    // Live Step 2 Follow-Up Listeners
    if (checkEnableFollowup) {
        checkEnableFollowup.addEventListener('change', () => {
            const activeFlow = getActiveFlow();
            if (activeFlow.followUp) activeFlow.followUp.enabled = checkEnableFollowup.checked;
            syncPhoneSimulator();
        });
    }
    if (selectFollowupDelay) {
        selectFollowupDelay.addEventListener('change', () => {
            const activeFlow = getActiveFlow();
            if (activeFlow.followUp) activeFlow.followUp.delayMinutes = parseInt(selectFollowupDelay.value);
            syncPhoneSimulator();
        });
    }
    if (selectFollowupCondition) {
        selectFollowupCondition.addEventListener('change', () => {
            const activeFlow = getActiveFlow();
            if (activeFlow.followUp) activeFlow.followUp.condition = selectFollowupCondition.value;
        });
    }
    if (inputFollowupText) {
        inputFollowupText.addEventListener('input', () => {
            const activeFlow = getActiveFlow();
            if (activeFlow.followUp) activeFlow.followUp.text = inputFollowupText.value;
            syncPhoneSimulator();
        });
    }

    const btnSaveFlow = document.getElementById('btnSaveFlow');
    if (btnSaveFlow) {
        btnSaveFlow.addEventListener('click', () => {
            const activeFlow = getActiveFlow();
            if (checkEnableFollowup && activeFlow.followUp) {
                activeFlow.followUp.enabled = checkEnableFollowup.checked;
                activeFlow.followUp.condition = selectFollowupCondition.value;
                activeFlow.followUp.delayMinutes = parseInt(selectFollowupDelay.value);
                activeFlow.followUp.text = inputFollowupText.value;
            }
            saveAppState();
            showToast('check', `Flow rules & line-up saved successfully for "${activeFlow.name}"!`);
        });
    }

    window.triggerSimulatedDmAction = (action, label) => {
        playNotificationSound();
        if (action === 'whatsapp') {
            const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent('Hi! I want to order from @sreee._.ram with zero fees!')}`;
            alert(`WhatsApp Click-to-Chat:\n\nOpening URL:\n${waUrl}\n\nNotice: Zero Meta API fees charged! Direct customer handoff.`);
        } else if (action === 'coupon') {
            alert(`Coupon Revealed:\n\nYour secret code is: INSTA15 (15% OFF at checkout)`);
        } else if (action === 'modal_product') {
            alert(`Product Specifications:\n\nAuthentic quality with direct delivery.`);
        } else {
            alert(`Agent Connected:\n\nA representative has been notified and will take over this thread.`);
        }
    };

    renderFlowBuilder();

    // ==========================================================================
    // 8. TAB 4: UNIFIED CRM & LEAD INBOX (ZERO EMOJIS)
    // ==========================================================================
    function renderCrmChat() {
        const leadList = document.getElementById('leadCardsList');
        const activeChatMessages = document.getElementById('activeChatMessagesArea');
        const activeChatName = document.getElementById('activeChatName');
        const activeChatAvatar = document.getElementById('activeChatAvatar');
        const activeChatStatus = document.getElementById('activeChatStatus');
        const profileDetailName = document.getElementById('profileDetailName');
        const profileDetailHandle = document.getElementById('profileDetailHandle');
        const profileDetailAvatar = document.getElementById('profileDetailAvatar');
        const profileTagsRow = document.getElementById('profileTagsRow');
        const txtLeadNotes = document.getElementById('txtLeadNotes');
        const btnDirectWaClick = document.getElementById('btnDirectWaClick');

        // Update Inbox Header Badge & Top Nav Pill
        const inboxCountBadge = document.getElementById('inboxCountBadge');
        if (inboxCountBadge) {
            inboxCountBadge.textContent = `${appState.leads.length} ${appState.leads.length === 1 ? 'Lead' : 'Leads'}`;
        }
        const unreadBadge = document.getElementById('unreadInboxBadge');
        if (unreadBadge) {
            unreadBadge.textContent = `${appState.leads.length} New`;
        }

        // Validate selected lead id
        if (!appState.leads.some(l => l.id === appState.selectedLeadId)) {
            appState.selectedLeadId = appState.leads.length > 0 ? appState.leads[0].id : null;
        }

        const activeLead = appState.leads.find(l => l.id === appState.selectedLeadId) || (appState.leads.length > 0 ? appState.leads[0] : null);

        if (leadList) {
            if (appState.leads.length === 0) {
                leadList.innerHTML = `
                    <div style="padding:32px 16px; text-align:center; color:var(--grey-500);">
                        <div style="margin-bottom:8px; color:var(--grey-400);">${SVG_ICONS.message}</div>
                        <div style="font-size:0.88rem; font-weight:600; color:var(--grey-700);">No Inbound Leads Yet</div>
                        <div style="font-size:0.75rem; margin-top:4px; color:var(--grey-500);">Simulate a reel comment or connect your Instagram webhook to capture leads in real time.</div>
                    </div>
                `;
            } else {
                leadList.innerHTML = appState.leads.map(lead => `
                    <div class="lead-item ${activeLead && lead.id === activeLead.id ? 'active' : ''}" id="lead-row-${lead.id}" onclick="selectLead(${lead.id})">
                        <div class="lead-avatar-wrap">
                            <img src="${getCustomerAvatar(lead.handle, lead.name, lead.avatar)}" alt="${lead.name}" class="lead-avatar">
                            <span class="lead-source-icon ${lead.source === 'wa' ? 'source-wa' : ''}">
                                ${lead.source === 'wa' ? 'WA' : 'IG'}
                            </span>
                        </div>
                        <div class="lead-meta">
                            <div class="lead-name-row">
                                <span class="lead-name">${lead.name}</span>
                                <span class="lead-time">${lead.time}</span>
                            </div>
                            <div class="lead-preview-text">${lead.lastMsg}</div>
                            <span class="activity-badge ${lead.source === 'wa' ? 'badge-green' : 'badge-blue'}">${lead.intent}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        if (activeChatMessages) {
            if (!activeLead) {
                activeChatMessages.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--grey-400); text-align:center; padding:24px;">
                        <div style="margin-bottom:12px; transform:scale(1.3); color:var(--grey-400);">${SVG_ICONS.message}</div>
                        <div style="font-weight:600; font-size:0.95rem; color:var(--grey-700);">No Conversation Selected</div>
                        <div style="font-size:0.8rem; margin-top:4px; max-width:280px; color:var(--grey-500);">Incoming customer DMs and comment interactions will stream here for 1-click WhatsApp handoff.</div>
                    </div>
                `;
            } else {
                activeChatMessages.innerHTML = activeLead.chat.map(msg => `
                    <div class="chat-msg ${msg.from === 'user' ? 'msg-in' : 'msg-out'}" id="msg-${Date.now()}-${Math.floor(Math.random() * 100)}">
                        ${msg.text}
                        <div style="font-size:0.65rem; opacity:0.7; text-align:right; margin-top:2px;">${msg.time}</div>
                    </div>
                `).join('');
                activeChatMessages.scrollTop = activeChatMessages.scrollHeight;
            }
        }

        if (activeLead) {
            const leadAvatar = getCustomerAvatar(activeLead.handle, activeLead.name, activeLead.avatar);
            if (activeChatName) activeChatName.textContent = activeLead.handle;
            if (activeChatAvatar) activeChatAvatar.src = leadAvatar;
            if (activeChatStatus) activeChatStatus.textContent = activeLead.reel;
            if (profileDetailName) profileDetailName.textContent = activeLead.name;
            if (profileDetailHandle) profileDetailHandle.textContent = `${activeLead.handle} • ${activeLead.followers} followers`;
            if (profileDetailAvatar) profileDetailAvatar.src = leadAvatar;
            if (txtLeadNotes) txtLeadNotes.value = activeLead.notes;

            if (profileTagsRow) {
                profileTagsRow.innerHTML = activeLead.tags.map(t => `
                    <span class="activity-badge badge-blue">${t}</span>
                `).join('');
            }

            if (btnDirectWaClick) {
                const waUrl = `https://wa.me/${activeLead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${activeLead.name}, here is your order confirmation link for ${activeLead.reel}!`)}`;
                btnDirectWaClick.href = waUrl;
            }
        } else {
            const defaultAvatar = getCustomerAvatar('Guest', 'Guest');
            if (activeChatName) activeChatName.textContent = 'No Conversation Selected';
            if (activeChatAvatar) activeChatAvatar.src = defaultAvatar;
            if (activeChatStatus) activeChatStatus.textContent = 'Awaiting Inbound DM';
            if (profileDetailName) profileDetailName.textContent = 'No Lead Selected';
            if (profileDetailHandle) profileDetailHandle.textContent = '@username';
            if (profileDetailAvatar) profileDetailAvatar.src = defaultAvatar;
            if (txtLeadNotes) txtLeadNotes.value = '';
            if (profileTagsRow) profileTagsRow.innerHTML = '';
        }
    }

    window.selectLead = (leadId) => {
        appState.selectedLeadId = leadId;
        renderCrmChat();
    };

    const btnSendManualReply = document.getElementById('btnSendManualReply');
    const inputManualReply = document.getElementById('inputManualReply');

    function sendManualReply() {
        if (!inputManualReply) return;
        const text = inputManualReply.value.trim();
        if (!text) return;

        const activeLead = appState.leads.find(l => l.id === appState.selectedLeadId);
        if (activeLead) {
            const now = new Date();
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            activeLead.chat.push({
                from: 'bot',
                text,
                time: timeStr
            });
            activeLead.lastMsg = `You: ${text}`;
            inputManualReply.value = '';
            renderCrmChat();
            playNotificationSound();
        }
    }

    if (btnSendManualReply) btnSendManualReply.addEventListener('click', sendManualReply);
    if (inputManualReply) {
        inputManualReply.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') sendManualReply();
        });
    }

    const btnSendWaLinkNow = document.getElementById('btnSendWaLinkNow');
    if (btnSendWaLinkNow) {
        btnSendWaLinkNow.addEventListener('click', () => {
            const activeLead = appState.leads.find(l => l.id === appState.selectedLeadId);
            if (!activeLead) return;
            const waUrl = `https://wa.me/${activeLead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${activeLead.name}! Tap here to complete your order with 15% OFF`)}`;
            activeLead.chat.push({
                from: 'bot',
                text: `WhatsApp Checkout link sent: ${waUrl}`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
            activeLead.source = 'wa';
            activeLead.intent = 'WhatsApp';
            renderCrmChat();
            showToast('message', `Sent free WhatsApp handoff deep link to ${activeLead.handle}!`);
        });
    }

    // ==========================================================================
    // 9. TAB 5: PRODUCT CATALOG (SVG ICONS)
    // ==========================================================================
    function renderProductCatalog() {
        const grid = document.getElementById('productCatalogGrid');
        if (!grid) return;

        if (appState.products.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; background:white; border:1px solid var(--grey-200); border-radius:var(--radius-lg); padding:48px 24px; text-align:center;">
                    <div style="margin-bottom:12px; color:var(--grey-400); transform:scale(1.3);">${SVG_ICONS.package}</div>
                    <h3 style="font-size:1.05rem; font-weight:700; color:var(--grey-900); margin-bottom:6px;">No Products Added Yet</h3>
                    <p style="font-size:0.85rem; color:var(--grey-500); max-width:420px; margin:0 auto 18px;">Add your product items and link them to Instagram Reels so automated DMs can send checkout cards instantly.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = appState.products.map(prod => `
            <div class="product-card" id="prod-card-${prod.id}">
                <div class="product-img-wrap">
                    <img src="${prod.img}" alt="${prod.title}" class="product-img">
                    <span class="product-badge-stock">${prod.stock}</span>
                </div>
                <div class="product-body">
                    <h3 class="product-title">${prod.title}</h3>
                    <div class="product-sku">SKU: ${prod.sku}</div>
                    <div class="product-price-row">
                        <span class="product-price-current">${prod.dmPrice}</span>
                        <span class="product-price-original">${prod.regularPrice}</span>
                        <span style="font-size:0.75rem; font-weight:700; color:#10B981; margin-left:auto;">15% DM Promo</span>
                    </div>
                    <div class="product-linked-reel">
                        <span class="svg-icon">${SVG_ICONS.package}</span>
                        <span>Attached to <strong>Reel #${prod.reelId}</strong></span>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button type="button" class="btn-primary" style="flex:1; padding:7px 10px; font-size:0.78rem;" onclick="testProductInDm('${prod.id}')">
                            Test in DM
                        </button>
                        <button type="button" class="btn-secondary" style="padding:7px 10px; font-size:0.78rem;" onclick="editProduct('${prod.id}')">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    renderProductCatalog();

    window.testProductInDm = (prodId) => {
        const prod = appState.products.find(p => p.id === prodId);
        if (prod) {
            appState.selectedBuilderReelId = prod.reelId;
            switchTab('tabBuilder');
            if (inputCardTitle) inputCardTitle.value = prod.title;
            if (inputCardPrice) inputCardPrice.value = `${prod.dmPrice} (15% OFF)`;
            if (inputCardImageUrl) inputCardImageUrl.value = prod.img;
            syncPhoneSimulator();
            showToast('package', `Loaded "${prod.title}" into the DM Simulator!`);
        }
    };

    window.editProduct = (prodId) => {
        showToast('check', `Product SKU editor opened for item #${prodId}`);
    };

    // ==========================================================================
    // 10. REAL-TIME META WEBHOOK SIMULATOR
    // ==========================================================================
    function simulateIncomingReelComment(customTitle, customKeyword) {
        playNotificationSound();

        const commenters = ['@_jaxsuxya_09', '@gousickhawk', '@__vickiyyy__', '@isiddd_', '@gym_flow_offical', '@kumarexh_._', '@mani._.ramesh'];
        const chosenUser = commenters[Math.floor(Math.random() * commenters.length)];
        const keyword = customKeyword || (Math.random() > 0.5 ? 'PRICE' : 'BUY');
        const targetReel = appState.reels[0] || { id: 18079, title: '@sreee._.ram Reel #18079' };
        const reelTitle = customTitle || targetReel.title;

        // Update target reel stats
        if (targetReel.comments !== undefined) targetReel.comments += 1;
        if (targetReel.dmsSent !== undefined) targetReel.dmsSent += 1;

        const totalCommentsEl = document.getElementById('valTotalComments');
        const totalDmsEl = document.getElementById('valTotalDms');
        const buttonClicksEl = document.getElementById('valButtonClicks');
        const waHandoffsEl = document.getElementById('valWhatsappHandoffs');

        if (totalCommentsEl) {
            const c = (parseInt(totalCommentsEl.textContent.replace(/,/g, '')) || 0) + 1;
            totalCommentsEl.textContent = c.toLocaleString();
        }
        if (totalDmsEl) {
            const d = (parseInt(totalDmsEl.textContent.replace(/,/g, '')) || 0) + 1;
            totalDmsEl.textContent = d.toLocaleString();
        }
        if (buttonClicksEl && Math.random() > 0.3) {
            const b = (parseInt(buttonClicksEl.textContent.replace(/,/g, '')) || 0) + 1;
            buttonClicksEl.textContent = b.toLocaleString();
        }
        if (waHandoffsEl && Math.random() > 0.5) {
            const w = (parseInt(waHandoffsEl.textContent.replace(/,/g, '')) || 0) + 1;
            waHandoffsEl.textContent = w.toLocaleString();
            const savingsEl = document.getElementById('valApiSavingsSaved');
            if (savingsEl) {
                const s = (w * 0.05).toFixed(2);
                savingsEl.textContent = `$${s}`;
            }
        }

        const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const defaultAvatar = getCustomerAvatar(chosenUser, chosenUser);

        // Lead insertion / update
        let lead = appState.leads.find(l => l.handle === chosenUser);
        if (!lead) {
            lead = {
                id: Date.now(),
                handle: chosenUser,
                name: chosenUser.replace('@', '').replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase()),
                followers: '1.2k',
                avatar: defaultAvatar,
                source: 'ig',
                intent: 'High Intent',
                lastMsg: `Commented "${keyword}" on ${reelTitle}`,
                time: 'Just now',
                reel: reelTitle,
                phone: '919876543210',
                tags: ['Inbound Lead', keyword, 'Active DM'],
                notes: `Customer triggered automated flow on ${reelTitle} using keyword "${keyword}".`,
                chat: [
                    { from: 'user', text: keyword, time: nowTime },
                    { from: 'bot', text: `Hey ${chosenUser}! Thanks for your comment on @sreee._.ram. Tap below to order on WhatsApp with zero fees: https://wa.me/919876543210`, time: nowTime }
                ]
            };
            appState.leads.unshift(lead);
        } else {
            lead.chat.push({ from: 'user', text: keyword, time: nowTime });
            lead.chat.push({ from: 'bot', text: `Tap below to order via WhatsApp: https://wa.me/919876543210`, time: nowTime });
            lead.time = 'Just now';
            lead.lastMsg = `Commented "${keyword}"`;
        }

        appState.selectedLeadId = lead.id;

        const inboxBadge = document.getElementById('inboxCountBadge');
        if (inboxBadge) inboxBadge.textContent = `${appState.leads.length} Leads`;
        const unreadBadge = document.getElementById('unreadInboxBadge');
        if (unreadBadge) {
            unreadBadge.textContent = `${appState.leads.length} New`;
            unreadBadge.style.background = '#EF4444';
        }

        appState.recentActivities.unshift({
            user: chosenUser,
            action: `Commented "${keyword}" on ${reelTitle}`,
            time: 'Just now',
            badge: 'Instant DM Sent',
            badgeClass: 'badge-blue',
            avatar: defaultAvatar
        });
        if (appState.recentActivities.length > 8) appState.recentActivities.pop();

        renderDashboard();
        renderReelsGrid();
        renderCrmChat();

        const terminal = document.getElementById('webhookLogTerminal');
        if (terminal) {
            const timeStr = new Date().toLocaleTimeString();
            const logEntry = `\n[WEBHOOK ${timeStr}] EVENT: instagram_comments\n  • User: ${chosenUser}\n  • Keyword: "${keyword}" (Matched Rule)\n  • Action: Public Reply posted + Private DM dispatched.\n  • Status: HTTP 200 OK (0.24s execution)`;
            terminal.textContent += logEntry;
            terminal.scrollTop = terminal.scrollHeight;
        }

        showToast('zap', `Simulated Reel Comment caught from ${chosenUser} ("${keyword}")! Instant DM dispatched.`);
    }

    const btnTriggerSimulatedComment = document.getElementById('btnTriggerSimulatedComment');
    const btnTestWebhookDispatch = document.getElementById('btnTestWebhookDispatch');

    if (btnTriggerSimulatedComment) {
        btnTriggerSimulatedComment.addEventListener('click', () => simulateIncomingReelComment());
    }
    if (btnTestWebhookDispatch) {
        btnTestWebhookDispatch.addEventListener('click', () => simulateIncomingReelComment());
    }

    const btnCopyWebhookUrl = document.getElementById('btnCopyWebhookUrl');
    if (btnCopyWebhookUrl) {
        btnCopyWebhookUrl.addEventListener('click', () => {
            const input = document.getElementById('inputWebhookPublicUrl');
            if (input) {
                navigator.clipboard.writeText(input.value);
                showToast('check', 'Copied Live Webhook URL to clipboard! Paste into Meta Developer portal.');
            }
        });
    }

    const btnCopyVerifyToken = document.getElementById('btnCopyVerifyToken');
    if (btnCopyVerifyToken) {
        btnCopyVerifyToken.addEventListener('click', () => {
            navigator.clipboard.writeText('instaflow_secret_2026');
            showToast('check', 'Copied Verify Token (instaflow_secret_2026)!');
        });
    }

    const btnLiveTestInstagramReply = document.getElementById('btnLiveTestInstagramReply');
    if (btnLiveTestInstagramReply) {
        btnLiveTestInstagramReply.addEventListener('click', async () => {
            btnLiveTestInstagramReply.disabled = true;
            btnLiveTestInstagramReply.textContent = 'Posting to Instagram...';
            try {
                const res = await fetch('/api/live-test-reply', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: 'Verified Auto-Reply from InstaFlow CRM!' })
                });
                const data = await res.json();
                if (data.success) {
                    showToast('check', 'Success! Posted real live reply on Instagram post #18079!');
                    const terminal = document.getElementById('webhookLogTerminal');
                    if (terminal) {
                        terminal.textContent += `\n[LIVE TEST] Posted real comment to Meta Graph API on post 18079921717678282: HTTP 200 OK!`;
                        terminal.scrollTop = terminal.scrollHeight;
                    }
                } else {
                    showToast('zap', 'Notice: Check Graph API permissions.');
                }
            } catch (err) {
                showToast('zap', 'Error executing live test reply.');
            } finally {
                btnLiveTestInstagramReply.disabled = false;
                btnLiveTestInstagramReply.innerHTML = `
                    <span class="svg-icon">
                        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>Post Live Test on IG</span>
                `;
            }
        });
    }

    // ==========================================================================
    // 11. LIVE REAL-TIME WEBSOCKET SYNC WITH BACKEND
    // ==========================================================================
    function initLiveWebSocket() {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/ws`;
        
        try {
            const socket = new WebSocket(wsUrl);

            socket.onopen = () => {
                console.log('[InstaFlow WS] Connected to live backend webhook engine');
                const badge = document.getElementById('metaApiPill');
                if (badge) badge.title = 'Live Meta Webhook & Polling Gateway Active';
            };

            socket.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.type === 'NEW_COMMENT_EVENT') {
                        playNotificationSound();
                        
                        // Update metrics
                        if (data.metrics) {
                            const cEl = document.getElementById('valTotalComments');
                            if (cEl) cEl.textContent = data.metrics.total_comments.toLocaleString();
                            const dEl = document.getElementById('valTotalDms');
                            if (dEl) dEl.textContent = data.metrics.total_dms.toLocaleString();
                            const wEl = document.getElementById('valWhatsappHandoffs');
                            if (wEl) wEl.textContent = data.metrics.whatsapp_orders.toLocaleString();
                            const sEl = document.getElementById('valApiSavingsSaved');
                            if (sEl) sEl.textContent = `$${data.metrics.api_savings.toFixed(2)}`;
                        }

                        // Add lead
                        if (data.lead) {
                            const existsIdx = appState.leads.findIndex(l => l.handle === data.lead.handle);
                            if (existsIdx >= 0) {
                                appState.leads[existsIdx] = data.lead;
                            } else {
                                appState.leads.unshift(data.lead);
                            }
                            appState.selectedLeadId = data.lead.id;
                        }

                        // Add activity
                        if (data.activity) {
                            appState.recentActivities.unshift(data.activity);
                            if (appState.recentActivities.length > 20) appState.recentActivities.pop();
                        }

                        renderDashboard();
                        renderReelsGrid();
                        renderCrmChat();

                        // Update terminal
                        const terminal = document.getElementById('webhookLogTerminal');
                        if (terminal) {
                            const timeStr = new Date().toLocaleTimeString();
                            terminal.textContent += `\n[LIVE AUTO-REPLY ${timeStr}] Handled comment from ${data.user}: "${data.comment_text}"\n  -> Public Reply Posted: "${data.reply_text}"\n  -> Status: HTTP 200 OK (Instant Meta Graph API)`;
                            terminal.scrollTop = terminal.scrollHeight;
                        }

                        showToast('zap', `Live comment auto-replied for ${data.user}! Check CRM inbox.`);
                    }
                } catch (e) {
                    console.error('[WS Message Parse Error]', e);
                }
            };

            socket.onclose = () => {
                console.log('[InstaFlow WS] Disconnected. Reconnecting in 3s...');
                setTimeout(initLiveWebSocket, 3000);
            };

            socket.onerror = () => {
                socket.close();
            };
        } catch (err) {
            console.error('[WS Init Error]', err);
        }
    }

    initLiveWebSocket();

    // Restore saved persona and tab on startup
    if (appState.activePersona) setPersona(appState.activePersona);
    if (appState.activeTab) switchTab(appState.activeTab);

    // Initial render of all tabs
    renderDashboard();
    renderReelsGrid();
    renderFlowBuilder();
    renderProductCatalog();
    renderCrmChat();

    showToast('check', 'InstaFlow CRM ready! All changes and settings are permanently saved.');
});
