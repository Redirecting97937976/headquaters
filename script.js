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
            gateway.classList.add('hidden');
            if (mainContainer) {
                mainContainer.style.opacity = '1';
            }
            
            // Initialize system sequences
            startInterface();
        });
    }

    function startInterface() {
    // 1. Real-time System Health Simulation
    const systemLogs = [
        "Cloud synchronization active...",
        "Performance protocols initiated...",
        "Secure session established."
    ];

    if (consoleDiv) {
        let logIndex = 0;
        const updateConsole = () => {
            if (logIndex >= systemLogs.length) return;

            const log = document.createElement('div');
            log.textContent = `CHECK: ${systemLogs[logIndex]}`;
            log.style.marginBottom = '8px';
            consoleDiv.appendChild(log);
            logIndex++;
            
            if (logIndex === systemLogs.length) {
                setTimeout(() => messageAlert.classList.remove('hidden'), 800);
            } else {
                setTimeout(updateConsole, 800);
            }
        };
        setTimeout(updateConsole, 500);
    }

    // 2. System Clock
    if (paragraph) {
        setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: true });
            paragraph.innerHTML = `Local Server Time: ${timeStr} (UTC-0)`;
        }, 100);
    }
    }
});