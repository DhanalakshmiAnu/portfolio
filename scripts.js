document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    document.getElementById('contact-form').reset();
});