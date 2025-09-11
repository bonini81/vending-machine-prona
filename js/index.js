// Cocktail data configuration
const cocktails = [
    {
        id: 1,
        name: "Martini Clásico",
        video: "assets/videos/martini-video.mp4",
        finalImage: "assets/images/martini-final.jpg",
        finalMessage: "¡Aquí tienes tu Martini Clásico!",
        description: "Un clásico elegante y sofisticado. ¡Disfrútalo!"
    },
    {
        id: 2,
        name: "Mojito Refrescante",
        video: "assets/videos/mojito-video.mp4",
        finalImage: "assets/images/mojito-final.jpg",
        finalMessage: "¡Tu Mojito está listo!",
        description: "Fresco, mentolado y delicioso. ¡Perfecto para cualquier momento!"
    },
    {
        id: 3,
        name: "Piña Colada Tropical",
        video: "assets/videos/pina-colada-video.mp4",
        finalImage: "assets/images/pina-colada-final.jpg",
        finalMessage: "¡Disfruta tu Piña Colada!",
        description: "Un sabor tropical que te transportará al paraíso"
    },
    {
        id: 4,
        name: "Old Fashioned",
        video: "assets/videos/old-fashioned-video.mp4",
        finalImage: "assets/images/old-fashioned-final.jpg",
        finalMessage: "¡Tu Old Fashioned está servido!",
        description: "Un clásico atemporal con carácter y personalidad"
    }
];

// App state
let currentCocktailIndex = 0;
let currentPage = 'welcome';
let videoTimer = null;
let finalPageTimer = null;

// Page navigation functions
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        currentPage = pageId;
    }
}

function startCocktailExperience() {
    // Start with the first cocktail (or continue rotation)
    showVideoPage();
}

function showVideoPage() {
    const currentCocktail = cocktails[currentCocktailIndex];
    
    // Update video page content
    document.getElementById('cocktail-name').textContent = `Preparando: ${currentCocktail.name}`;
    
    const video = document.getElementById('cocktail-video');
    const videoSource = video.querySelector('source');
    videoSource.src = currentCocktail.video;
    video.load(); // Reload the video with new source
    
    // Show video page
    showPage('video-page');
    
    // Play video
    video.play().catch(e => {
        console.log('Error playing video:', e);
        // If video fails, continue to final page after 30 seconds
    });
    
    // Set timer for 30 seconds to go to final page
    clearTimeout(videoTimer);
    videoTimer = setTimeout(() => {
        showFinalPage();
    }, 30000); // 30 seconds
}

function showFinalPage() {
    const currentCocktail = cocktails[currentCocktailIndex];
    
    // Update final page content
    document.getElementById('final-message').textContent = currentCocktail.finalMessage;
    document.getElementById('cocktail-final-image').src = currentCocktail.finalImage;
    document.getElementById('final-description').textContent = currentCocktail.description;
    
    // Show final page
    showPage('final-page');
    
    // Set timer for 1 minute to go back to welcome page
    clearTimeout(finalPageTimer);
    finalPageTimer = setTimeout(() => {
        nextCocktail();
    }, 60000); // 1 minute
}

function nextCocktail() {
    // Move to next cocktail (cycle through all 4)
    currentCocktailIndex = (currentCocktailIndex + 1) % cocktails.length;
    
    // Go back to welcome page
    showPage('welcome-page');
}

// Video event listeners
function setupVideoEvents() {
    const video = document.getElementById('cocktail-video');
    
    // When video ends naturally, go to final page
    video.addEventListener('ended', () => {
        clearTimeout(videoTimer);
        showFinalPage();
    });
    
    // Handle video errors
    video.addEventListener('error', (e) => {
        console.log('Video error:', e);
        // Continue to final page even if video fails
        setTimeout(() => {
            showFinalPage();
        }, 5000); // Wait 5 seconds then continue
    });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupVideoEvents();
    
    // Start on welcome page
    showPage('welcome-page');
    
    console.log('Cocktail Vending Machine App initialized');
    console.log(`Total cocktails: ${cocktails.length}`);
});

// Cleanup timers when page unloads
window.addEventListener('beforeunload', () => {
    clearTimeout(videoTimer);
    clearTimeout(finalPageTimer);
});