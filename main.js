let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    if (input.classList.contains('active')) {
        input.focus();
    }
}

document.getElementById('search-icon').addEventListener('click', function() {
    const input = document.getElementById('search-input');
    input.classList.toggle('active');
    
});


// Modal Functionality
const carCards = document.querySelectorAll('.car-card');
const modal = document.getElementById('car-modal');
const modalTitle = document.getElementById('modal-title');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.querySelector('.close');

carCards.forEach(card => {
    card.addEventListener('click', () => {
        const info = card.getAttribute('data-info');
        const title = card.getAttribute('data-title');
        const images = card.getAttribute('data-images').split(',');

        modalTitle.innerText = title;
        modalInfo.innerText = info;

        // If you want to add image display, uncomment the following:
        const slides = document.getElementById('slides');
        slides.innerHTML = images.map(img => `<img src="${img}" style="width:100%">`).join('');
        
        modal.style.display = 'block';
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Review Submission
document.getElementById('submit-review').onclick = function() {
    const name = document.getElementById('reviewer-name').value;
    const reviewText = document.getElementById('review-text').value;

    if (name && reviewText) {
        const reviewsList = document.querySelector('.reviews-list');
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `<strong>${name}</strong>: <p>${reviewText}</p>`;
        reviewsList.appendChild(reviewItem);

        // Clear input fields
        document.getElementById('reviewer-name').value = '';
        document.getElementById('review-text').value = '';
    } else {
        alert('Please fill in both fields.');
    }
};

// Contact Form Submission
document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    document.getElementById('contact-form').reset();
};


// slide trasition
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function nextSlide() {
    let currentSlide = slides[currentIndex];
    currentIndex = (currentIndex + 1) % slides.length;
    let nextSlide = slides[currentIndex];

    // Add classes to trigger animation
    currentSlide.classList.remove("active");
    currentSlide.classList.add("outgoing");

    nextSlide.classList.remove("outgoing");
    nextSlide.classList.add("active");

    // Remove outgoing class after animation
    setTimeout(() => {
        currentSlide.classList.remove("outgoing");
        currentSlide.style.transform = "translateX(100%)"; // Reset position
    }, 1000);
}
slides[currentIndex].classList.add("active");
setInterval(nextSlide, 4000);
