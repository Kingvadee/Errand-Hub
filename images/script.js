document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            showTab(targetId);
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // Send form data to server or perform other actions
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Optionally, clear form fields after submission
        this.reset();
    });

    document.getElementById('readMoreBtn').addEventListener('click', function() {
        showTab('services');
    });

    document.getElementById('trackingBtn').addEventListener('click', function() {
        showTab('tracking');
    });

    function showTab(tabId) {
        const tabs = document.querySelectorAll('.content');
        tabs.forEach(tab => {
            if (tab.id === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
});
