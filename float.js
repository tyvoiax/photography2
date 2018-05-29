// Get the img element in the slide-show container
const imageTag = document.querySelector('.image-slider img');

// Get all span tags in image container
const indicators = document.querySelectorAll('.current-image-indicator span');

// Images for the slideshow
const img1 = "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img2 = "https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img3 = "https://images.pexels.com/photos/458917/pexels-photo-458917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img4 = "https://images.pexels.com/photos/839303/pexels-photo-839303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img5 = "https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img6 = "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const images = [img1, img2, img3, img4, img5, img6];

// Function to change images

let currentImageIndex = 0;

setInterval(() => {
    
    if(currentImageIndex == images.length) {
        currentImageIndex = 0 // reset
    }
    // Only current image should be transparent
    Array.from(indicators).forEach(item => {
        item.style.opacity = 1;
    });
    imageTag.src = images[currentImageIndex];
    indicators[currentImageIndex].style.opacity = 0;

    currentImageIndex++;
    
}, 2000);

// Get all the elements to that is involved in menu interactions

// Get the hamburger menu icon
const hamburgerIcon = document.getElementsByClassName('fa-bars')[0];

// Get  the whole menu
const menu = document.getElementsByClassName('menu-container')[0];

// Get the close menu icon
// const closeMenuIcon = document.querySelector('.close-icon .fa-times');
const closeMenuIcon  = document.getElementsByClassName('fa-times')[0];

// Get all elements that are not in the menu-container
const elementsToHide = document.querySelectorAll('body > :not(.menu-container)');
console.log(elementsToHide);

// Show menu when the humburger menu icon is clicked
hamburgerIcon.addEventListener('click', () => {
    menu.style.display = 'block';

    //Hide every element that is not in the menu-container class
    elementsToHide.forEach(item => {
        item.style.display = 'none';
    });
});

// Hide menu when the close menu icon is clicked
closeMenuIcon.addEventListener('click', (e) => {
    if (e.target == closeMenuIcon) {
        menu.style.display = 'none';

        //Show every element that was previously hidden when the menu was shown
       elementsToHide.forEach(item => {
           item.style.display = 'block';
       });
       console.log('fired');
    }
   
});

// Make an accordion for the submenu

const plusIcon = document.getElementsByClassName('fa-plus')[0];
const minusIcon = document.getElementsByClassName('fa-minus')[0];
const submenu = document.querySelector('.menu-container .menu li:nth-child(2) a');
console.log(submenu);

// Get a reference to the submenu content
const subMenuContent = document.getElementsByClassName('sub-menu-content')[0];

// When the portfolio is clicked, it shows its submenu, when clicked again
// it hides the submenu.
// classList.toggle will add the specified class to the element its 
// missing or remove the class if its present
submenu.addEventListener('click', () => {
    // subMenuContent.style.display = 'block';
    subMenuContent.classList.toggle('sub-menu-content');
    plusIcon.classList.toggle('hide-icon');
    minusIcon.classList.toggle('hide-icon');
});

const cart = document.querySelector('nav ul li a:nth-child(1)');
window.onscroll = () => {
    if (document.body.scrollTop >= 260 || document.documentElement.scrollTop >= 260) {
        cart.classList.remove('show-me');
        cart.classList.add('hide-me');  
    } else {
        cart.classList.remove('hide-me');
        cart.classList.add('show-me');
    }
   
};
const mainContent = document.querySelector('main');
const footerContent = document.querySelector('footer');
document.body.onresize = () => {
    if(screen.width >= 700) {
        menu.style.display = 'block';
        mainContent.style.display = 'grid';
        footerContent.style.display = 'flex';
    } else {
        menu.style.display = 'none';
        footerContent.style.display = 'block';
    }
};
