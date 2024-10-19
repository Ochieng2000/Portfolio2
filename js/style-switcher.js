const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', function(){
    document.querySelector('.style-switcher').classList.toggle('open');
});

window.addEventListener('scroll', function(){
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open');
    }
});

const alternateStyles = document.querySelectorAll('.alternate-style');

// Load the saved active color and mode from localStorage and set them before anything else
const savedColor = localStorage.getItem('activeColor');
if (savedColor) {
    setActiveStyle(savedColor); // Apply the saved color immediately
} else {
    setActiveStyle(alternateStyles[0].getAttribute('title')); // Default to the first style if no saved color
}

// Apply saved theme mode (dark or light) from localStorage
const savedMode = localStorage.getItem('themeMode');
if (savedMode) {
    if (savedMode === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Set the initial icon based on the current theme
const dayNight = document.querySelector('.day-night');
function setDayNightIcon() {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
        dayNight.querySelector('i').classList.remove('fa-moon');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
        dayNight.querySelector('i').classList.remove('fa-sun');
    }
}

// Set the initial icon on page load
setDayNightIcon();

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            localStorage.setItem('activeColor', color); // Store the selected color
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Handle day/night theme toggle and save mode to localStorage
dayNight.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    
    // Save the current theme mode
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('themeMode', 'dark');
    } else {
        localStorage.setItem('themeMode', 'light');
    }
    
    // Update the icon based on the current theme
    setDayNightIcon();
});
