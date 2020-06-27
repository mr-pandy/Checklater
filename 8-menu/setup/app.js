const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "/8-menu/setup/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "/8-menu/setup/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "/8-menu/setup/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "/8-menu/setup/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "/8-menu/setup/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "/8-menu/setup/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "/8-menu/setup/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "/8-menu/setup/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "/8-menu/setup/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
// FilterBtn
const filterBtnCont = document.querySelector('.btn-container');
const filterBtn = document.querySelectorAll('.filter-btn');


// Load data/items from object and styling
window.addEventListener('DOMContentLoaded',()=>{
  // Call the function
  getDataFromObject(menu);
  getDataFromFilterBtnCont(menu)
  
})

// Get data from Object
const getDataFromObject = (menuItems)=>{
  let displayMenu = menuItems.map((item)=>{
    return `<article class="menu-item">
    <img src='${item.img}' alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`
  })
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
} 

// Get data from FilteredBtn Using reduce and mapping it out 
const getDataFromFilterBtnCont = (menuItems)=>{
  // Reduce to get unique items
  const categories = menuItems.reduce((values, items)=>{ //Values(total) referencing the array  and items(each items) reference each of the item
    if(!values.includes(items.category)){//if items does not include (all)
      values.push(items.category)
    }
    return values;
  }, ['all']);// others breakfast etc

  // Map out info from selected items from the reduce functions and display on screen
  const categoryBtn = categories.map((category)=>{
    return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
    }).join('');
    
    filterBtnCont.innerHTML = categoryBtn;
    // Select Btn to the dom in order to be clicked
    const filterBtn = filterBtnCont.querySelectorAll('.filter-btn'); 
    filterBtn.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{
        const category = e.currentTarget.dataset.id;
        // To filter it out
        const menuCategory = menu.filter((menuItems)=>{
          if(menuItems.category === category){ //gets the category from the menu object and matches with the dataset id   
            return menuItems; //returns all matched object
          }
        })
    
        // Check and add filtered content to screen
        if(category === 'all'){ //Add info when all button is clicked 
          getDataFromObject(menu);
        }else{//Add filtered info when all button is clicked 
          getDataFromObject(menuCategory)
        }
        // console.log(menuCategory);
        
      })
    })
} 