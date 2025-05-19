# my-website
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Personal Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm a web developer learning how to build cool websites. This is my first personal website.</p>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <form id="contactForm">
            <input type="text" placeholder="Your Name" required><br>
            <input type="email" placeholder="Your Email" required><br>
            <textarea placeholder="Your Message" required></textarea><br>
            <button type="submit">Send</button>
        </form>
    </section>

    <footer>
        <p>Copyright © 2025</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

section {
    padding: 20px;
    margin: 20px;
    background-color: white;
    border-radius: 10px;
}

form input, form textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
}

button {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for your message! We'll get back to you soon.");
});
