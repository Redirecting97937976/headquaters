document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('main-heading');
    const paragraph = document.getElementById('sub-text');
    const consoleDiv = document.getElementById('dynamic-console');
    const gateway = document.getElementById('verification-gateway');
    const verifyBtn = document.getElementById('verify-btn');
    const mainContainer = document.querySelector('.container');
    const messageAlert = document.getElementById('message-alert');

    // 0. Verification Logic
    if (verifyBtn && gateway) {
        verifyBtn.addEventListener('click', () => {
            gateway.style.opacity = '0';
            setTimeout(() => gateway.style.display = 'none', 500);

            if (mainContainer) {
                mainContainer.style.opacity = '1';
                mainContainer.style.transform = 'translateY(0)';
            }
            
            startInterface();
        });
    }

    function startInterface() {
    const systemLogs = [
        "Connecting to secure server...",
        "Authenticating session credentials...",
        "Retrieving inbound messages..."
    ];

    if (consoleDiv) {
        let logIndex = 0;
        const updateConsole = () => {
            if (logIndex >= systemLogs.length) return;

            const log = document.createElement('div');
            log.textContent = `STATUS: ${systemLogs[logIndex]}`;
            log.style.marginBottom = '8px';
            consoleDiv.appendChild(log);
            logIndex++;
            
            if (logIndex === systemLogs.length) {
                setTimeout(() => {
                    if(messageAlert) messageAlert.classList.remove('hidden');
                }, 1000);
            } else {
                setTimeout(updateConsole, 1000);
            }
        };
        setTimeout(updateConsole, 500);
    }

    if (paragraph) {
        setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });
            paragraph.innerHTML = `Authenticated Session | ${timeStr}`;
        }, 1000);
    }
    }
});