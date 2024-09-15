// Toggle icon for navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let linkId = link.getAttribute('href').substring(1);
                if (linkId === id) {
                    link.classList.add('active');
                }
            });
        }
    });
});


// Sticky navbar
let header = document.querySelector('header');
window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking a nav link (for mobile view)
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
};

// Scroll Reveal Configuration
ScrollReveal({
    distance: '80px',  
    duration: 2000,   
    delay: 200,        
  
});

// Applying ScrollReveal to specific elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','BCA Student','Web Designer','Backend Developer'], // Corrected to 'strings'
    typeSpeed: 70,  // Corrected from 'typed' to 'typeSpeed'
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


// Contact Form 
document.addEventListener("DOMContentLoaded", () => {
    // Get references to necessary elements
    const form = document.querySelector("form");
    const items = document.querySelectorAll(".item");
    const email = document.querySelector("#email"); 
    const errorTxtEmail = document.querySelector(".error-text.email");

    // Ensure these variables are defined
    const fullName = document.getElementById("name");
    const phone = document.getElementById("phone");
    const mess = document.getElementById("message");

    function checkInputs() {
        items.forEach(item => {
            if (item.value === "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            } else {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
        });

        // Email validation
        checkEmail();
    }

    function checkEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");
            if (email.value !== "") {
                errorTxtEmail.innerText = "Enter a valid email address";
            } else {
                errorTxtEmail.innerText = "Email address can't be blank";
            }
        } else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
            errorTxtEmail.innerText = ""; // Clear error message if valid
        }
    }

    function sendEmail() {
        // Collect form data
        const name = fullName.value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Construct the email body
        const bodyMessage = `Full Name: ${name}<br>Email: ${email}<br>Phone Number: ${phone}<br>Message: ${message}`;

        // Send the email
        Email.send({
            SecureToken :"4779c61d-0e20-4f3e-82c9-1b9cc19d5244",
            To: 'senamondal4@gmail.com', 
            From: 'senamondal4@gmail.com', 
            Subject: subject, 
            Body: bodyMessage
        }).then(
            message => {
                if (message === "OK") {
                    Swal.fire({
                        title: "Good job!",
                        text: "Message sent successfully!",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Message failed to send.",
                        icon: "error",
                    });
                }
            }
        ).catch(error => {
            Swal.fire({
                title: "Error!",
                text: `An error occurred: ${error}`,
                icon: "error",
            });
        });
    }

    // Attach event listeners
    items.forEach(item => {
        item.addEventListener("keyup", checkInputs);
    });

    email.addEventListener("keyup", checkEmail);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();
        if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !mess.classList.contains("error")) {
            sendEmail();
            form.reset();
            return false;
        }
    });
});







