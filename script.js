document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('main-heading');
    const paragraph = document.getElementById('sub-text');
    const consoleDiv = document.getElementById('dynamic-console');
    const systemState = document.getElementById('system-state');

    // 1. Typewriter Effect for the Master Heading
    const typeText = "Neural Interface v4.0";
    let i = 0;
    heading.textContent = "";

    function typeWriter() {
        if (i < typeText.length) {
            heading.textContent += typeText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 2. Real-time System Heartbeat Simulation
    const systemLogs = [
        "Analyzing Netlify environment...",
        "Optimizing rendering pipelines...",
        "Secure handshake verified.",
        "Neural sync established."
    ];

    if (consoleDiv) {
        let logIndex = 0;
        const updateConsole = () => {
            if (logIndex >= systemLogs.length) return;

            const log = document.createElement('div');
            log.textContent = `> ${systemLogs[logIndex]}`;
            log.style.marginBottom = '5px';
            consoleDiv.appendChild(log);
            logIndex++;
            setTimeout(updateConsole, 1500);
        };
        setTimeout(updateConsole, 1000);
    }

    // 3. Dynamic Clock with High Precision
    if (paragraph) {
        setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 2 });
            paragraph.innerHTML = `Live Node Latency: 12ms | Synchronized: ${timeStr}`;
        }, 100);
    }
});