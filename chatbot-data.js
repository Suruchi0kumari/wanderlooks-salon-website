// Chatbot Configuration and FAQ Data
// You can easily update the responses here without modifying the main code.

const chatbotData = {
    // Basic setting
    botName: "WonderLooks Assistant",
    greetingMessage: "Hi there! Welcome to WonderLooks Salon. How can I help you today?",
    
    // Fallback response when the bot doesn't understand
    fallbackMessage: "Sorry, I couldn’t understand that 😅<br>Please contact us on WhatsApp at 7372870210 for more details.",

    // Quick reply suggestions shown at the start
    quickReplies: [
        "What services do you offer?",
        "Pricing details",
        "What are your timings?",
        "How can I book?"
    ],

    // FAQ Intent Matching
    // Add keywords to match user input, and the response to give.
    // NOTE: Order matters! Put more specific keywords (like "bridal makeup price") before general ones ("bridal").
    intents: [
        // --- SERVICES ---
        {
            keywords: ["what services", "services do you offer", "service list", "services"],
            response: "We offer haircut, hair styling, Hair coloring, facial, keratin treatment, beard grooming, cleanup, waxing, threading, hair spa, and makeup services including bridal makeup."
        },
        {
            keywords: ["bridal makeup price", "price of bridal", "cost of bridal", "bridal price"],
            response: "Bridal makeup packages start from ₹5000 and vary based on requirements."
        },
        {
            keywords: ["bridal", "bride", "wedding makeup"],
            response: "Yes, we provide professional bridal makeup services. Advance booking is recommended."
        },
        {
            keywords: ["hair spa", "hairspa"],
            response: "Yes, we provide relaxing and nourishing hair spa treatments for all hair types."
        },
        
        // --- PRICING ---
        {
            keywords: ["price of a haircut", "haircut price", "cost of haircut", "haircut cost", "how much is a haircut"],
            response: "Haircut starts from ₹500. Prices may vary depending on the style."
        },
        {
            keywords: ["price of facial", "facial price", "cost of facial", "facial cost", "how much is a facial"],
            response: "Facial starts from ₹800 and can go up to ₹2500 depending on the type."
        },
        {
            keywords: ["price", "pricing", "cost", "how much", "charges", "fees", "rate", "rates"],
            response: "Haircut starts from ₹500, Facial from ₹800 to ₹2500, and Bridal makeup packages start from ₹5000. Prices may vary depending on the type and style."
        },
        
        // --- SPECIFIC SERVICES CATCH-ALL ---
        {
            keywords: ["haircut"],
            response: "We offer premium haircuts starting from ₹500. Prices may vary depending on the style."
        },
        {
            keywords: ["facial"],
            response: "We offer relaxing facials starting from ₹800, going up to ₹2500 depending on the type."
        },

        // --- TIMINGS ---
        {
            keywords: ["weekend", "saturday", "sunday", "weekends"],
            response: "Yes, we are open on all days but closed on sunday."
        },
        {
            keywords: ["open", "close", "time", "timing", "timings", "hours", "hour"],
            response: "We are open daily from 10 AM to 8 PM."
        },

        // --- BOOKING ---
        {
            keywords: ["necessary", "mandatory", "walkin", "walk-in", "walk in", "without appointment"],
            response: "Appointment is recommended to avoid waiting, but walk-ins are also welcome."
        },
        {
            keywords: ["book", "booking", "appointment", "schedule", "reserve"],
            response: "You can book an appointment through our website or by contacting us on WhatsApp."
        },

        // --- LOCATION & CONTACT ---
        {
            keywords: ["location", "address", "where", "locate", "place", "situated"],
            response: "Our salon is located at 124 Rose Avenue, Ansal Panipat, 132103."
        },
        {
            keywords: ["contact", "phone", "call", "whatsapp", "number"],
            response: "You can contact us via phone or WhatsApp at 7372870210."
        },

        // --- OFFERS ---
        {
            keywords: ["offer", "offers", "discount", "discounts", "sale", "deal", "deals", "combo"],
            response: "Yes, we regularly provide special discounts and combo offers. Please check our website or contact us for latest deals."
        },

        // --- GREETINGS ---
        {
            keywords: ["hi", "hello", "hey", "greetings"],
            response: "Hello! How can I assist you with your salon needs today?"
        },
        {
            keywords: ["bye", "thank", "thanks"],
            response: "You're very welcome! Have a wonderful day!"
        }
    ]
};
