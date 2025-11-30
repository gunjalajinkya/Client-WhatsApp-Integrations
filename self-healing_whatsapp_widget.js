<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhatsApp Floating Icon Preview</title>
    <style>
        body {
            /* Add some height for scrolling/viewing the fixed element */
            height: 200vh; 
            margin: 0;
            background-color: #f7f7f7;
            font-family: Arial, sans-serif;
        }

        .content {
            padding: 3rem;
            text-align: center;
        }

        /* --- STYLING & ANIMATION FROM THE JS WIDGET --- */
        
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
            width: 56px; /* 3.5rem equivalent */
            height: 56px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            text-decoration: none;
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
                width: 47.6px; /* 15% smaller on mobile */
                height: 47.6px;
            }
        }
    </style>
</head>
<body>
    <div class="content">
        <h1>Scroll Down to See the Floating Widget</h1>
        <p>This content is just a placeholder to test the fixed positioning of the icon.</p>
        <p style="margin-top: 100vh;">End of content.</p>
    </div>

    <script>
        // --- 1. CONFIGURATION ---
        const WHATSAPP_NUMBER = '919006978869'; // Client: Coach Rajesh Roy
        const PRE_FILLED_MESSAGE = 'I am interested in learning more about "The Self Healing Mastery Course" by Coach Rajesh Roy. Can you provide more details?';
        
        // --- 2. WHATSAPP LINK GENERATION ---
        const encodedMessage = encodeURIComponent(PRE_FILLED_MESSAGE);
        
        // Simple check for mobile vs web link
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        const whatsappUrl = isMobile
            ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;


        // --- 3. CREATE THE ICON ELEMENT ---
        const iconContainer = document.createElement('a');
        iconContainer.href = whatsappUrl;
        iconContainer.target = '_blank';
        iconContainer.rel = 'noopener noreferrer';
        // Use predefined classes for positioning and blinking (defined in <style>)
        iconContainer.className = 'sh-whatsapp-float sh-whatsapp-icon-blink'; 

        // Inline SVG for the WhatsApp Icon (Standard Circular Logo, 70% size for clear visibility)
        iconContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" style="width: 70%; height: 70%;">
                <path d="M380.9 97.1C339.2 55.4 283.6 32 225.6 32c-124 0-224 100-224 224 0 40 10.4 78 30.6 111.8l-34.8 127.6c-4.4 16 1.4 33 15.6 42s34.2 8.4 48.2-4.2l104-79.3c33.5 19.3 71.7 29.3 111.4 29.3 124 0 224-100 224-224 0-57.8-23.4-113.4-65.1-155.1zm-86.8 198.5H150.3c-10 0-18-8-18-18s8-18 18-18h143.7c10 0 18 8 18 18s-8 18-18 18z"/>
            </svg>
        `;

        // --- 4. APPEND TO THE BODY ---
        document.body.appendChild(iconContainer);
    </script>
</body>
</html>
