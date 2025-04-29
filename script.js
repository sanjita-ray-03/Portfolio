AOS.init()

// Working code
let form = document.querySelector(".third .main-body form");
        // The document.querySelector() method returns the first element that matches a specified CSS selector.
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // The preventDefault() method stops the form from submitting and prevents the page from refreshing.
            document.querySelector("#sub").value = "Submitting..";
            // Change the value of the submit button to "Submitting..." while the form is being submitted.
            let data = new FormData(form);
            // The FormData() method creates a new FormData object that contains the values of all the form fields.
            fetch('https://script.google.com/macros/s/AKfycbxCC1Y-T9tUNPFPCASNvRWP0KNS1N1yf6ma06eorRj0x_OIuQExThxmt8jzUveLJiaFYA/exec', {
                    method: "POST",
                    body: data
                })
                // The fetch() method is used to make a request to the server and retrieve data.
                // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
                .then(res => res.text())
                // The .then() method is used to handle the response from the server.
                // The response is converted to text using the res.text() method.
                .then(data => {
                    // document.querySelector("#msg").innerHTML = data;
                    alert("Your response is recorded ")
                    console.log(data)
                    // The innerHTML property sets or returns the HTML content of an element.
                    // Here, we are setting the content of the <h1> element to the response from the server.
                    document.querySelector("#sub").value = "Submit"
                    // Change the value of the submit button back to "Submit" after the form has been submitted.
                });
        });




// Add this JavaScript for scroll animations
// Scroll animation trigger
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                const images = entry.target.querySelectorAll('.animate-image');
                images.forEach(img => img.classList.add('loaded'));
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
        observer.observe(el);
    });
});

    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });




// Skill section      
// Add this JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const targetWidth = skillBar.dataset.percent;
                skillBar.style.setProperty('--target-width', targetWidth);
                skillBar.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(skillBar => {
        //skillBar.textContent = skillBar.dataset.percent; // Add percentage text
        skillObserver.observe(skillBar);
    });
});



// Mobile Menu Toggle
// Add this JavaScript for mobile menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

      // Close menu when clicking outside
      document.addEventListener("click", (event) => {
          if (!event.target.closest(".nav-container")) {
              hamburger.classList.remove("active");
              navLinks.classList.remove("active");
          }
      });



hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('mobile-nav');
    document.querySelector('.nav-links').classList.toggle('active');
});
     
//Download CV
function downloadCV() {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Path to your CV file (update this with your actual file path)
    link.href = 'CV/SanjitaRay-Resume.pdf';
    
    // Name you want the downloaded file to have
    link.download = 'SanjitaRay-Resume.pdf';
    
    // Append to body (required for Firefox)
    document.body.appendChild(link);
    
    // Trigger the click event
    link.click();
    
    // Remove the element from the DOM
    document.body.removeChild(link);
}