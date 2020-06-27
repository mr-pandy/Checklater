// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// Select id or class
const switchBtn = document.querySelector('.switch-btn');
const videoContainer = document.querySelector('.video-container');

switchBtn.addEventListener('click',()=>{
    if(!switchBtn.classList.contains('slide')){// Check if the switch button doesn't contain the class of slide
        switchBtn.classList.add('slide');
        videoContainer.pause();
    }else{
        switchBtn.classList.remove('slide');
        videoContainer.play();
    }
})

const preloader = document.querySelector('.preloader');
window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader')
})