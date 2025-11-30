// self-healing_whatsapp_widget.js
// Custom Floating WhatsApp Widget for Coach Rajesh Roy
// Project: The Self Healing Mastery Course

(function() {
    // --- 1. CONFIGURATION ---
    const WHATSAPP_NUMBER = '919006978869'; // Client: Coach Rajesh Roy
    const PRE_FILLED_MESSAGE = 'I am interested in learning more about "The Self Healing Mastery Course" by Coach Rajesh Roy. Can you provide more details?';
    const ICON_SIZE_PX = 56; // 3.5rem equivalent on desktop

    // --- 2. DYNAMIC STYLING (CSS Injection) ---
    const style = document.createElement('style');
    style.innerHTML = `
        /* Keyframe Animation for the Blinking/Heartbeat Effect */
        @keyframes heartbeat {
            0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            50% { transform: scale(1.0); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
            100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
        }

        /* Base Floating Position (Middle Right) */
        .sh-whatsapp-float {
            position: fixed;
            top: 50%; /* Center vertically */
            right: 1.5rem;
            transform: translateY(-50%); /* Adjust up by half its height to perfectly center it */
            z-index: 1000;
            cursor: pointer;
            transition: transform 0.3s ease;
            
            /* Visual Styles */
            background-color: #25D366; /* WhatsApp Green */
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${ICON_SIZE_PX}px;
            height: ${ICON_SIZE_PX}px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            text-decoration: none; /* Remove underline */
        }

        .sh-whatsapp-float:hover {
            transform: translateY(-50%) scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }

        /* Apply the Blinking/Heartbeat animation */
        .sh-whatsapp-icon-blink {
            animation: heartbeat 1.8s infinite;
        }
        
        /* Mobile View Adjustment */
        @media (max-width: 640px) {
             .sh-whatsapp-float {
                right: 0.8rem;
                width: ${ICON_SIZE_PX * 0.85}px; /* 15% smaller on mobile */
                height: ${ICON_SIZE_PX * 0.85}px;
            }
        }
    `;
    document.head.appendChild(style);

    // --- 3. WHATSAPP LINK GENERATION ---
    const encodedMessage = encodeURIComponent(PRE_FILLED_MESSAGE);
    
    // Simple check to determine if the device is likely mobile (for app vs web link)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
        ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;


    // --- 4. CREATE THE ICON ELEMENT ---
    const iconContainer = document.createElement('a');
    iconContainer.href = whatsappUrl;
    iconContainer.target = '_blank';
    iconContainer.rel = 'noopener noreferrer';
    iconContainer.className = 'sh-whatsapp-float sh-whatsapp-icon-blink'; // Apply class for positioning and blinking

    // Inline SVG for the WhatsApp Icon (for reliability and pure white color)
    iconContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" style="width: 60%; height: 60%;">
            <path d="M380.9 97.1C339.2 55.4 283.6 32 225.6 32c-124 0-224 100-224 224 0 40 10.4 78 30.6 111.8l-34.8 127.6c-4.4 16 1.4 33 15.6 42s34.2 8.4 48.2-4.2l104-79.3c33.5 19.3 71.7 29.3 111.4 29.3 124 0 224-100 224-224 0-57.8-23.4-113.4-65.1-155.1zm-86.8 198.5H150.3c-10 0-18-8-18-18s8-18 18-18h143.7c10 0 18 8 18 18s-8 18-18 18z" />
        </svg>
    `;

    // --- 5. APPEND TO THE BODY ---
    document.body.appendChild(iconContainer);

    // Error handling (optional, but good practice)
    try {
        console.log('Self-Healing WhatsApp Widget Initialized successfully.');
    } catch (e) {
        // Handle console errors if necessary
    }

})();
