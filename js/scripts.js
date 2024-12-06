


// Simulate newsletter subscription
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent page reload

    // Hide the subscription form and show the thank-you message
    document.getElementById('subscribe-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});

// Function to open the lightbox with the clicked image
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');

    // Set the source of the lightbox image to the clicked image's data-src
    lightboxImage.src = imgElement.getAttribute('data-src');
    
    // Display the lightbox
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    lightbox.style.display = 'none';
}

// Attach click event listener to each gallery image
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
});


// Detect when elements enter the viewport
function animateVideos() {
    const videos = document.querySelectorAll('.appearance-video');
    const windowHeight = window.innerHeight;

    videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        if (rect.top <= windowHeight - 100) {
            video.classList.add('video-visible'); // Add animation class
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', animateVideos);

// Run on load in case videos are already in view
window.addEventListener('DOMContentLoaded', animateVideos);


document.addEventListener('DOMContentLoaded', () => {
    const portfolioLink = document.querySelector('#folder-icon a');

    portfolioLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'portfolio.html';
    });
});
