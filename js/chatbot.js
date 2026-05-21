
const knowledgeBase = [
    // store and policies
    { keywords: ["hello", "hi", "hey", "start"], answer: "Hello! Welcome to Loom & Lane. How can I assist you today?" },
    { keywords: ["shipping", "delivery", "ship", "arrive"], answer: "We offer island-wide delivery in Sri Lanka (3-5 days) and international shipping (7-14 days). Standard shipping is LKR 3,000." },
    { keywords: ["return", "refund", "exchange"], answer: "We accept returns within 14 days of delivery if the item is unused and in original packaging." },
    { keywords: ["payment", "card", "pay"], answer: "We accept Visa, MasterCard, Amex, PayPal, and Apple Pay. All transactions are secure." },
    { keywords: ["contact", "call", "email", "support"], answer: "You can reach us at support@loomlane.com or call +94 77 123 4567." },
    { keywords: ["location", "store", "address", "where"], answer: "Our flagship store is located at 123 Independence Square, Colombo 07." },
    { keywords: ["material", "wood", "fabric"], answer: "Our products are crafted from sustainable teak wood, organic cotton, and hand-woven batik textiles." },
    { keywords: ["promo", "discount", "code"], answer: "Current Promo: Use code '67' at checkout for 10% off your entire order!" },
    { keywords: ["hours", "open", "time"], answer: "Our Colombo flagship store is open daily from 9:00 AM to 8:00 PM." },
    { keywords: ["tracking", "order status", "track"], answer: "Once your order ships, we'll email you a tracking number. You can also check your account page for updates." },
    { keywords: ["international", "worldwide", "abroad"], answer: "Yes! We ship to over 50 countries. International delivery takes 7-14 business days." },
    { keywords: ["gift wrap", "packaging", "gift"], answer: "We offer premium sustainable gift wrapping for a small fee. You can select this at the checkout page." },
    { keywords: ["cancel", "change order"], answer: "Please contact us within 2 hours of placing your order if you need to cancel or modify it." },
    { keywords: ["wholesale", "bulk", "corporate"], answer: "For bulk or corporate gifting inquiries, please email our sales team at sales@loomlane.com." },
    { keywords: ["sustainability", "eco", "green"], answer: "We use organic cotton, reclaimed teak, and non-toxic dyes in all our artisanal products." },
    { keywords: ["warranty", "guarantee"], answer: "Our furniture comes with a 1-year structural warranty against manufacturing defects." },
    { keywords: ["jobs", "career", "work"], answer: "We are always looking for creative talent! Check our Careers page for open positions in design and retail." },
    { keywords: ["newsletter", "subscribe"], answer: "Sign up for our newsletter at the bottom of the home page to get early access to sales and new arrivals." },

    // categories
    { keywords: ["furniture", "sofa", "table", "chair"], answer: "Our furniture is handcrafted from sustainable teak and mahogany. Check the 'Wooden Crafts' category for our latest collection." },
    { keywords: ["decor", "decoration", "ornament"], answer: "Explore our 'Home & Decor' section for handloom pillows, brass lamps, and artisanal vases." },
    { keywords: ["dining", "plates", "bowls", "kitchen"], answer: "Visit our 'Porcelain & Dining' category for hand-painted ceramics and teak serving platters." },
    { keywords: ["garden", "outdoor", "plants", "patio"], answer: "Our 'Floral & Garden' section features terracotta pots, bird baths, and outdoor lanterns." },
    { keywords: ["textile", "fabric", "weaving", "handloom"], answer: "We specialize in handloom cotton and batik textiles, all made by local Sri Lankan artisans." },
    { keywords: ["brass", "metal", "oil lamp"], answer: "We offer a range of traditional Sri Lankan brassware, including high-polish Pahanas and wall hangings." },
    { keywords: ["wooden", "teak", "carving"], answer: "Our wood products are treated with natural oils to highlight the beautiful grain of the teak wood." },
    { keywords: ["sale items", "clearance", "cheap"], answer: "Check our 'Sales' page for discounts up to 25% off on selected home essentials!" },
    { keywords: ["new", "latest", "arrivals"], answer: "We add new arrivals every week! View the 'New Arrivals' section on our home page." },
    { keywords: ["best seller", "popular"], answer: "Our Handloom Geometric Pillows and Teak Nesting Tables are our most popular items right now." },
    { keywords: ["porcelain", "ceramic", "clay"], answer: "Our porcelain is kiln-fired at high temperatures for durability and finished with food-safe glazes." },
    { keywords: ["batik", "traditional art"], answer: "Our batik wall hangings are individually wax-dyed by masters of the craft in Kandy." },

    // each product
    { keywords: ["geometric throw pillow", "rust orange"], answer: "The Handloom Geometric Throw Pillow (LKR 2,600) is 100% organic cotton and handwoven." },
    { keywords: ["antique brass oil lamp", "pahana"], answer: "Our Antique Brass Oil Lamp (LKR 7,000) features an intricate peacock finial and a polished finish." },
    { keywords: ["teak nesting tables"], answer: "The Set of 3 Teak Nesting Tables (LKR 45,000) is perfect for space-saving elegance." },
    { keywords: ["porcelain dinner set", "midnight blue"], answer: "Our 16-Piece Midnight Blue Dinner Set (LKR 32,000) is microwave and dishwasher safe." },
    { keywords: ["terracotta planter", "hand-painted"], answer: "The Hand-Painted Terracotta Planter (LKR 4,500) features traditional 'Liyawela' patterns." },
    { keywords: ["silk batik wall hanging"], answer: "The Silk Batik Wall Hanging (LKR 12,500) depicts a traditional 'Esala Perahera' procession." },
    { keywords: ["reclaimed wood mirror"], answer: "The Reclaimed Wood Wall Mirror (LKR 18,500) uses timber from old heritage homes." },
    { keywords: ["hand-tufted rug", "indigo"], answer: "Our Indigo Hand-Tufted Wool Rug (LKR 55,000) adds comfort and luxury to any room." },
    { keywords: ["carved elephant statue"], answer: "The Hand-Carved Teak Elephant (LKR 9,500) is a symbol of luck and prosperity." },
    { keywords: ["scented soy candle", "lemongrass"], answer: "Our Lemongrass & Ginger Soy Candle (LKR 3,200) burns for 40+ hours." },
    { keywords: ["wicker laundry basket"], answer: "The Natural Wicker Laundry Basket (LKR 6,800) is hand-braided from local water hyacinth." },
    { keywords: ["copper pitcher"], answer: "Our Hammered Copper Water Pitcher (LKR 8,500) offers Ayurvedic health benefits." },
    { keywords: ["macrame wall art"], answer: "The Boho Macrame Wall Hanging (LKR 5,200) is made from unbleached natural cotton cord." },
    { keywords: ["ceramic bird bath"], answer: "The Blue Glaze Ceramic Bird Bath (LKR 14,000) is designed to attract local songbirds." },
    { keywords: ["terracotta tea set"], answer: "Our 6-Person Clay Tea Set (LKR 7,500) keeps your tea warm for longer naturally." },
    { keywords: ["batik table runner"], answer: "The Floral Batik Table Runner (LKR 3,800) adds a splash of color to your dining table." },
    { keywords: ["bamboo tray"], answer: "Our Hand-Woven Bamboo Serving Tray (LKR 2,900) is lightweight and durable." },
    { keywords: ["brass door knocker"], answer: "The Dharma Wheel Brass Door Knocker (LKR 4,200) is cast using the lost-wax method." },
    { keywords: ["linen curtains"], answer: "Our Natural Linen Curtains (LKR 15,000 per pair) provide soft, filtered light." },
    { keywords: ["teak bookshelf"], answer: "The Minimalist Teak Bookshelf (LKR 68,000) features 5 spacious tiers." },
    { keywords: ["reed floor mat", "gal lalla"], answer: "The Traditional Reed Floor Mat (LKR 4,500) is eco-friendly and keeps rooms cool." },
    { keywords: ["stoneware mug"], answer: "Our Speckled Stoneware Mug (LKR 1,800) is handcrafted on a potter's wheel." },
    { keywords: ["buddha head statue"], answer: "The Serene Buddha Head Statue (LKR 11,000) is carved from volcanic stone." },
    { keywords: ["jute rug"], answer: "The Circular Jute Area Rug (LKR 12,000) is perfect for entryways." },
    { keywords: ["patchwork quilt"], answer: "Our Kantha-stitch Patchwork Quilt (LKR 22,000) is made from recycled silk sarees." },
    { keywords: ["iron lantern"], answer: "The Moroccan-style Iron Lantern (LKR 5,500) creates beautiful light patterns." },
    { keywords: ["incense holder"], answer: "Our Lotus Brass Incense Holder (LKR 1,500) is a perfect desktop accessory." },
    { keywords: ["teak soap dish"], answer: "The Slotted Teak Soap Dish (LKR 950) allows for easy drainage in your bathroom." },
    { keywords: ["velvet cushion"], answer: "Our Forest Green Velvet Cushion (LKR 3,500) adds a touch of royal luxury." },
    { keywords: ["driftwood lamp"], answer: "The Coastal Driftwood Table Lamp (LKR 14,500) features a linen shade." },
    { keywords: ["silver appetizer forks"], answer: "Our Set of 6 Silver-Plated Appetizer Forks (LKR 6,500) features shell motifs." },
    { keywords: ["rattan chair"], answer: "The Classic Rattan Lounge Chair (LKR 28,000) comes with a cotton seat pad." },
    { keywords: ["mosaic vase"], answer: "The Glass Mosaic Floor Vase (LKR 9,000) stands 2 feet tall." },
    { keywords: ["alpaca throw"], answer: "Our Ultra-soft Alpaca Wool Throw (LKR 24,000) is sourced ethically." },
    { keywords: ["marble coasters"], answer: "The Set of 4 Hexagon Marble Coasters (LKR 4,800) protects your surfaces with style." },
    { keywords: ["hanging planter"], answer: "Our Ceramic Hanging Planter (LKR 3,200) includes a sturdy jute rope." },
    { keywords: ["embroidered napkin"], answer: "Set of 4 Embroidered Linen Napkins (LKR 4,500) with floral detail." },
    { keywords: ["floating shelf"], answer: "Our Live-edge Teak Floating Shelf (LKR 8,500) includes hidden brackets." },
    { keywords: ["dreamcatcher"], answer: "The Large Feather Dreamcatcher (LKR 2,800) is handcrafted by local artisans." },
    { keywords: ["water carafe"], answer: "The Crystal Glass Water Carafe (LKR 5,200) comes with a matching tumbler lid." },

    // other stuff
    { keywords: ["gift ideas", "gift for her", "gift for him"], answer: "Our Scented Soy Candles and Handloom Throws make excellent gifts!" },
    { keywords: ["wedding gift", "anniversary"], answer: "The Antique Brass Oil Lamp is our most popular wedding gift choice." },
    { keywords: ["living room ideas"], answer: "Try pairing our Teak Nesting Tables with an Indigo Hand-Tufted Rug." },
    { keywords: ["outdoor furniture care"], answer: "We recommend applying teak oil every 6 months to maintain the wood's color." },
    { keywords: ["wash handloom", "cleaning fabric"], answer: "Hand wash handloom covers in cold water with mild detergent." },
    { keywords: ["microwave safe", "oven safe"], answer: "All our 'Porcelain & Dining' items are microwave safe unless they have gold rims." },
    { keywords: ["durable wood"], answer: "Teak is extremely durable, naturally resistant to moisture and pests." },
    { keywords: ["artificial plants", "faux"], answer: "Our 'Floral & Garden' section includes zero-maintenance faux succulent arrangements." },
    { keywords: ["size guide", "dimensions"], answer: "Dimensions are listed on each product page under the 'Description' section." },
    { keywords: ["custom furniture", "bespoke"], answer: "We offer custom sizing for teak furniture. Email design@loomlane.com." },
    { keywords: ["color options"], answer: "Check the product detail page for the color selector on our handloom items." },
    { keywords: ["handmade", "artisanal"], answer: "Every product is finished by hand, so no two pieces are exactly alike!" },
    { keywords: ["authentic", "genuine"], answer: "We work directly with rural artisans to ensure authenticity and fair trade." },
    { keywords: ["light mode", "dark mode"], answer: "Toggle appearance using the sun/moon icon in the top header!" },
    { keywords: ["search help"], answer: "Search for products by name, category (e.g., 'wood'), or color!" },
    { keywords: ["thank you", "thanks"], answer: "You're very welcome! Is there anything else I can help you with?" },
    { keywords: ["goodbye", "bye"], answer: "Goodbye! We hope to see you again soon at Loom & Lane." },
    { keywords: ["who made you", "chatbot name"], answer: "I'm the LoomBot! Here to help you decorate your dream home." },
    { keywords: ["help", "what can you do"], answer: "I can help you find products, track orders, or explain our policies!" },
    { keywords: ["bad", "broken", "complaint"], answer: "I'm sorry. Please email support@loomlane.com so we can make it right." },
    { keywords: ["cool", "awesome", "love it"], answer: "We love that you love it! Our artisans put a lot of heart into every piece." },
    { keywords: ["expensive", "pricey"], answer: "We focus on heirloom-quality materials and fair wages for artisans." },
    { keywords: ["discount for new", "first order"], answer: "Welcome! Use code 'WELCOME10' for 10% off your first order." },
    { keywords: ["store pickup", "click and collect"], answer: "Yes! Select 'In-Store Pickup' at checkout for free collection." },
    { keywords: ["is this a scam"], answer: "Not at all! We are a registered business with a physical store in Colombo 07." },
    { keywords: ["ready made", "stock"], answer: "If you can 'Add to Cart', the item is currently in stock!" },
    { keywords: ["sold out", "restock"], answer: "Email us to be notified when limited edition items are back." },
    { keywords: ["made in sri lanka"], answer: "Yes! 95% of our products are manufactured locally in Sri Lanka." },
    { keywords: ["how are you"], answer: "I'm doing great! Ready to help you shop. How are you?" },
    { keywords: ["login", "register"], answer: "Manage orders by clicking the 'Account' icon in the header." },
    { keywords: ["privacy", "data"], answer: "Your privacy is important. See our Privacy Policy for details." }
];

const defaultAnswer = "I'm not sure about that. Try asking about 'shipping', 'returns', or 'products'.";

document.addEventListener('DOMContentLoaded', () => {
    
    // chatbot style
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-toggler {
            position: fixed; bottom: 20px; right: 20px;
            width: 60px; height: 60px;
            background: #ffffff; border: 2px solid #1C4E55;
            border-radius: 50%; cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 9999;
            transition: all 0.3s ease; display: flex;
            align-items: center; justify-content: center;
            overflow: hidden; padding: 0;
        }
        .chat-toggler img { width: 100%; height: 100%; object-fit: cover; }
        .chat-toggler:hover { transform: scale(1.1); border-color: #C09858; }

        .chat-window {
            position: fixed; bottom: 90px; right: 20px;
            width: 350px; height: 500px;
            max-height: calc(100vh - 120px); /* PREVENTS CUT OFF */
            background: #fff; border-radius: 20px;
            box-shadow: 0 5px 30px rgba(0,0,0,0.15); z-index: 9999;
            display: none; flex-direction: column;
            overflow: hidden; border: 1px solid #eaddcf;
            font-family: 'Times New Roman', serif;
        }

        /* MOBILE FIX */
        @media (max-width: 480px) {
            .chat-window { width: 90%; right: 5%; bottom: 85px; }
        }
        
        .chat-header { background: #1C4E55; color: #fff; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .chat-header h5 { margin: 0; font-size: 1.1rem; }
        .close-chat { background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; }

        .chat-body { flex: 1; padding: 20px; overflow-y: auto; background: #F9F7F2; display: flex; flex-direction: column; gap: 15px; }

        .message { max-width: 80%; padding: 10px 15px; border-radius: 15px; font-size: 0.95rem; line-height: 1.4; }
        .bot-msg { align-self: flex-start; background: #eaddcf; color: #1C4E55; border-bottom-left-radius: 2px; }
        .user-msg { align-self: flex-end; background: #1C4E55; color: #fff; border-bottom-right-radius: 2px; }

        .chat-footer { padding: 10px; background: #fff; border-top: 1px solid #ddd; display: flex; gap: 10px; }
        .chat-input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 20px; outline: none; }
        .send-btn { background: #1C4E55; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }

        /* DARK MODE SUPPORT */
        body[data-theme="dark"] .chat-window { background: #122123; border-color: #2F3E46; }
        body[data-theme="dark"] .chat-body { background: #0E1819; }
        body[data-theme="dark"] .chat-footer { background: #122123; border-top-color: #2F3E46; }
        body[data-theme="dark"] .chat-input { background: #2F3E46; border-color: #1C4E55; color: white; }
        body[data-theme="dark"] .bot-msg { background: #2F3E46; color: #F9F7F2; }
    `;
    document.head.appendChild(style);

    // inputing to html
    const chatHTML = `
        <button class="chat-toggler" onclick="toggleChat()">
            <img src="assets/icons/logo2.png" alt="Chat Logo"> 
        </button>

        <div class="chat-window" id="chatWindow">
            <div class="chat-header">
                <div>
                    <h5 class="fw-bold">Loom & Lane Support</h5>
                    <span style="font-size: 0.75rem; opacity: 0.8;">Replies instantly</span>
                </div>
                <button class="close-chat" onclick="toggleChat()">&times;</button>
            </div>
            <div class="chat-body" id="chatBody">
                <div class="message bot-msg">Hello! 👋 I'm here to help with orders, shipping, or product details. Ask me anything!</div>
            </div>
            <div class="chat-footer">
                <input type="text" class="chat-input" id="chatInput" placeholder="Type a message..." onkeypress="handleEnter(event)">
                <button class="send-btn" onclick="sendMessage()">➤</button>
            </div>
        </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = chatHTML;
    document.body.appendChild(div);
});

// functions
function toggleChat() {
    const win = document.getElementById('chatWindow');
    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        document.getElementById('chatInput').focus();
    }
}

function handleEnter(e) {
    if (e.key === 'Enter') sendMessage();
}

function sendMessage() {
    const inputEl = document.getElementById('chatInput');
    const msgText = inputEl.value.trim();
    if (msgText === "") return;

    appendMessage(msgText, 'user-msg');
    inputEl.value = '';

    setTimeout(() => {
        let response = findResponse(msgText);
        appendMessage(response, 'bot-msg');
    }, 500); 
}

function findResponse(userText) {
    const lowerText = userText.toLowerCase();
    for (let item of knowledgeBase) {
        if (item.keywords.some(key => lowerText.includes(key.toLowerCase()))) {
            return item.answer;
        }
    }
    return defaultAnswer;
}

function appendMessage(text, className) {
    const chatBody = document.getElementById('chatBody');
    if(!chatBody) return;
    const div = document.createElement('div');
    div.className = `message ${className}`;
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}