// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',()=>{
    // linksContainer.classList.toggle('show-links')
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(linksContainerHeight == 0){
        linksContainer.style.height =  `${linksHeight}px`
    }else{
        linksContainer.style.height =  `0`
    }
})
// ********** fixed navbar ************
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll',()=>{
   // console.log(window.pageYOffset) get the height of the window when being scrolled
   // console.log (navBar.getBoundingClientRect().height) get the height of the container
   const scrollHeight = window.pageYOffset 
   const navHeight =  navBar.getBoundingClientRect().height
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
        topLink.classList.add('show-link');
    }else{
        navBar.classList.remove('fixed-nav')
        topLink.classList.remove('show-link');
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((scrollLink)=>{
    scrollLink.addEventListener('click',(e)=>{
        e.preventDefault();
        //Navigate to specific spot
        const getID = e.currentTarget.getAttribute('href').slice(1); // cancels out the #
        const element = document.getElementById(getID);
        //Get Position of element
        // let position = element.offsetTop; use navheight and the conatinerheight
        const navHeight =  navBar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const getFixedNav =  navBar.classList.contains('fixed-nav');
        
        let position = element.offsetTop - navHeight; 
        console.log(navHeight);
        
        if(!getFixedNav){
            position -= navHeight;// Add the nav height along = -82
        }
        if(navHeight > 82){
            position += linksContainerHeight; //Add with height of container(navHeight + linkcont)
        }
        window.scrollTo({
            left:0,top: position,
        })
        linksContainer.style.height = 0;
        console.log(position);
         
        
    })
})

