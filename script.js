document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('main-heading');
    const paragraph = document.getElementById('sub-text');
    const consoleDiv = document.getElementById('dynamic-console');
    const gateway = document.getElementById('verification-gateway');
    const verifyBtn = document.getElementById('verify-btn');
    const mainContainer = document.querySelector('.container');
    const messageAlert = document.getElementById('message-alert');

    // Set dynamic copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

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
    if (heading) {
        heading.textContent = `Secure Management Portal`;
    }

    const systemLogs = [
        "Accessing secure document repository...",
        "Verifying file encryption layers...",
        "Synchronizing pending correspondence..."
    ];

    if (consoleDiv) {
        let logIndex = 0;
        const updateConsole = () => {
            if (logIndex >= systemLogs.length) return;

            const log = document.createElement('div');
            log.innerHTML = `<span class="status-dot">●</span> ${systemLogs[logIndex]}`;
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