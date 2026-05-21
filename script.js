document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = "Hello from JavaScript!";
        heading.style.color = '#28a745'; // Change color with JS
    }

    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.innerHTML += ' <br>This text was added by JavaScript!';
    }
});