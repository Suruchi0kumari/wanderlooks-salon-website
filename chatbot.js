// Chatbot Logic and UI Injection
document.addEventListener("DOMContentLoaded", function () {
    // 1. Inject Chatbot HTML Structure
    const chatbotHTML = `
        <div id="wl-chatbot-container" class="wl-chatbot-closed">
            <!-- Chatbot Toggle Button -->
            <button id="wl-chatbot-toggle" class="wl-chatbot-btn">
                <i class="fas fa-comment-dots"></i>
            </button>

            <!-- Chatbot Window -->
            <div id="wl-chatbot-window" class="wl-chatbot-window">
                <div class="wl-chatbot-header">
                    <div class="wl-chatbot-header-title">
                        <i class="fas fa-robot"></i>
                        <span>${chatbotData.botName}</span>
                    </div>
                    <button id="wl-chatbot-close" class="wl-chatbot-close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div id="wl-chatbot-messages" class="wl-chatbot-messages">
                    <!-- Initial Welcome Message -->
                    <div class="wl-chatbot-message bot-message">
                        ${chatbotData.greetingMessage}
                    </div>
                    
                    <!-- Quick Replies -->
                    <div class="wl-chatbot-quick-replies" id="wl-quick-replies">
                        ${chatbotData.quickReplies.map(reply => `<button class="wl-quick-reply-btn">${reply}</button>`).join('')}
                    </div>
                </div>
                
                <div class="wl-chatbot-input-area">
                    <input type="text" id="wl-chatbot-input" placeholder="Type your query..." autocomplete="off">
                    <button id="wl-chatbot-send"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", chatbotHTML);

    // 2. Chatbot Logic Elements
    const toggleBtn = document.getElementById("wl-chatbot-toggle");
    const closeBtn = document.getElementById("wl-chatbot-close");
    const chatbotContainer = document.getElementById("wl-chatbot-container");
    const messagesContainer = document.getElementById("wl-chatbot-messages");
    const inputField = document.getElementById("wl-chatbot-input");
    const sendBtn = document.getElementById("wl-chatbot-send");
    const quickReplyBtns = document.querySelectorAll(".wl-quick-reply-btn");
    const quickRepliesContainer = document.getElementById("wl-quick-replies");

    // Toggle Chat Window
    function toggleChat() {
        if (chatbotContainer.classList.contains("wl-chatbot-closed")) {
            chatbotContainer.classList.remove("wl-chatbot-closed");
            chatbotContainer.classList.add("wl-chatbot-open");
            toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
            // slight delay to focus input
            setTimeout(() => inputField.focus(), 300);
        } else {
            chatbotContainer.classList.remove("wl-chatbot-open");
            chatbotContainer.classList.add("wl-chatbot-closed");
            toggleBtn.innerHTML = '<i class="fas fa-comment-dots"></i>';
        }
    }

    toggleBtn.addEventListener("click", toggleChat);
    closeBtn.addEventListener("click", toggleChat);

    // Function to Add Message to Chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("wl-chatbot-message");
        messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
        messageDiv.innerHTML = text;
        
        messagesContainer.appendChild(messageDiv);
        
        // Auto scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Process Bot Response based on Intents
    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();
        
        for (let intent of chatbotData.intents) {
            for (let keyword of intent.keywords) {
                if (lowerInput.includes(keyword.toLowerCase())) {
                    return intent.response;
                }
            }
        }
        
        return chatbotData.fallbackMessage;
    }

    // Handle Sending Message
    function handleSend() {
        const userInput = inputField.value.trim();
        if (userInput === "") return;

        // Hide quick replies if they are present
        if(quickRepliesContainer) {
            quickRepliesContainer.style.display = "none";
        }

        // Add user message
        addMessage(userInput, "user");
        inputField.value = "";

        // Simulated Typing effect and Add bot message
        // Show typing indicator
        const typingDiv = document.createElement("div");
        typingDiv.classList.add("wl-chatbot-message", "bot-message", "typing-indicator");
        typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(() => {
            typingDiv.remove();
            const response = getBotResponse(userInput);
            addMessage(response, "bot");
        }, 800);
    }

    sendBtn.addEventListener("click", handleSend);
    inputField.addEventListener("keypress", function (e) {
        if (e.key === "Enter") handleSend();
    });

    // Handle Quick Replies
    quickReplyBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            inputField.value = this.innerText;
            handleSend();
        });
    });
});
