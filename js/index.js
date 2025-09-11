// Time Page 5
let page5Timer;

function goToPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const selectedPage = document.getElementById(`page${pageNumber}`);
    selectedPage.classList.add('active');

    // Clear any existing timer
    if (page5Timer) {
        clearTimeout(page5Timer);
    }

    if (pageNumber === 5) {
        page5Timer = setTimeout(() => {
            goToPage(6);
        }, 40000); // 2 minutes temporizador  to next page
    }
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the timer if page 5 is active on load
  if (document.getElementById('page5').classList.contains('active')) {
      goToPage(5);
  }
});