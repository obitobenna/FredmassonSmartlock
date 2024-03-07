document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
  
    menuToggle.addEventListener('click', function() {
      document.getElementById('navbar').classList.toggle('active');
      document.querySelector('.search-container').classList.toggle('active');
      document.querySelector('.cta').classList.toggle('active');
    });
  });
  

  

document.getElementById('searchInput').addEventListener('input', function() {
    const input = this.value;
    const suggestionBox = document.getElementById('suggestionBox');
    suggestionBox.innerHTML = ''; // Clear previous suggestions
    if (input) {
        // Example static suggestions, replace with dynamic data if needed
        const suggestions = ['Item 1', 'Item 2', 'Item 3'];
        suggestions.forEach(item => {
            if(item.toLowerCase().includes(input.toLowerCase())) {
                const div = document.createElement('div');
                div.textContent = item;
                div.classList.add('suggestion-item');
                div.onclick = function() {
                    document.getElementById('searchInput').value = this.textContent;
                    suggestionBox.style.display = 'none'; // Hide suggestions
                };
                suggestionBox.appendChild(div);
            }
        });
        suggestionBox.style.display = 'block';
    } else {
        suggestionBox.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    let currentBackground = 0;
    const backgrounds = [
      "url('door 1.jpg')",
      "url('door 2.jpg')",
      "url('door 3.jpg')",
    ];
    // Updated to match the new class name
    const mainBannerSection = document.querySelector('.main-banner');

    function changeBackground() {
      // Ensure the element exists before trying to change its style
      if (mainBannerSection) {
        mainBannerSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${backgrounds[currentBackground]}`;
        currentBackground = (currentBackground + 1) % backgrounds.length;
      }
    }

    // Automatic change every 5 seconds
    setInterval(changeBackground, 5000);

    // Change background on click/tap
    // Ensure the element exists before adding an event listener
    if (mainBannerSection) {
      mainBannerSection.addEventListener('click', changeBackground);
    }
});
function toggleFeature() {
    var feature = document.getElementById("durableDesign");
    var button = document.getElementById("readMoreBtn");
    if (feature.style.display === "none") {
        feature.style.display = "block";
        button.textContent = "Read Less";
    } else {
        feature.style.display = "none";
        button.textContent = "Read More";
    }
}



  let currentTestimonialIndex = 0;

function showTestimonial(index) {
    let testimonials = document.querySelectorAll('.testimonial');
    if (index >= testimonials.length) currentTestimonialIndex = 0;
    if (index < 0) currentTestimonialIndex = testimonials.length - 1;

    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === currentTestimonialIndex ? 'block' : 'none';
        testimonial.classList.remove('active');
    });

    testimonials[currentTestimonialIndex].classList.add('active');
}

function changeTestimonial(n) {
    showTestimonial(currentTestimonialIndex += n);
}

// Initialize the first testimonial
document.addEventListener('DOMContentLoaded', showTestimonial(currentTestimonialIndex));

// Optional: Add automatic change with a time interval
setInterval(() => {
    changeTestimonial(1);
}, 5000); // Change every 5 seconds

// document.addEventListener('DOMContentLoaded', function() {
//     const faqQuestions = document.querySelectorAll('.faq-question h3');

//     faqQuestions.forEach(question => {
//         question.addEventListener('click', () => {
//             const answer = question.nextElementSibling;
//             const toggleIcon = question.querySelector('.faq-toggle');
//             const isExpanded = answer.style.display === 'block';

//             answer.style.display = isExpanded ? 'none' : 'block';
//             // Toggle the class for the icon
//             if (isExpanded) {
//                 toggleIcon.classList.remove('fa-angle-up');
//                 toggleIcon.classList.add('fa-angle-down');
//             } else {
//                 toggleIcon.classList.remove('fa-angle-down');
//                 toggleIcon.classList.add('fa-angle-up');
//             }
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    // Select all the FAQ toggle icons
    const faqToggles = document.querySelectorAll('.faq-toggle');

    // Function to toggle the visibility of the FAQ answer
    function toggleFaqAnswer(event) {
        // Prevent default action
        event.preventDefault();
        
        // The clicked icon
        const icon = event.target;
        
        // The parent element of the icon (the question div)
        const faqQuestion = icon.closest('.faq-question');
        
        // The paragraph (answer) inside the question div
        const faqAnswer = faqQuestion.querySelector('p');
        
        // Toggle the 'active' class on the answer paragraph to show/hide it
        faqAnswer.classList.toggle('active');
        
        // Optionally, toggle the icon between 'down' and 'up'
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
    }

    // Add click event listeners to each toggle icon
    faqToggles.forEach(function(toggle) {
        toggle.addEventListener('click', toggleFaqAnswer);
    });
});




const text = "Join our security squad";
const container = document.getElementById('animatedText');
let i = 0;
function animateText() {
    if (i < text.length) {
      container.innerHTML += text.charAt(i);
      i++;
      setTimeout(animateText, 100);
    } else {
      // Once the text animation is complete, show the icons
      document.getElementById('icons').style.display = 'block';
    }
  }
  
  animateText();
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
