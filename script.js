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
            // Add a loading state to the button
            const btnText = verifyBtn.querySelector('.btn-text');
            if (btnText) btnText.textContent = "Validating...";
            verifyBtn.style.opacity = "0.7";
            verifyBtn.disabled = true;

            // Simulate a secure check delay
            setTimeout(() => {
                gateway.style.opacity = '0';
                setTimeout(() => gateway.style.display = 'none', 300);

                if (mainContainer) {
                    mainContainer.style.opacity = '1';
                    mainContainer.style.transform = 'translateY(0)';
                }
                startPortal();
            }, 800);
        });
    }

    function startPortal() {
    // Dynamically inject the domain into the heading for a professional touch
    const domain = window.location.hostname;
    if (heading && domain && domain !== 'localhost' && domain !== '127.0.0.1') {
        const brandName = domain.split('.')[0].toUpperCase();
        heading.textContent = `${brandName} Secure Management Portal`;
    }

    const systemLogs = [
        "Verifying authorized credentials...",
        "Initializing secure session environment...",
        "Searching for new communication transmissions..."
    ];

    if (consoleDiv) {
        let logIndex = 0;
        const updateConsole = () => {
            if (logIndex >= systemLogs.length) return;

            const log = document.createElement('div');
            log.textContent = `● ${systemLogs[logIndex]}`;
            log.style.marginBottom = '4px';
            consoleDiv.appendChild(log);
            logIndex++;
            
            if (logIndex === systemLogs.length) {
                setTimeout(() => {
                    if(messageAlert) messageAlert.classList.remove('hidden');
                }, 600);
            } else {
                setTimeout(updateConsole, 600);
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