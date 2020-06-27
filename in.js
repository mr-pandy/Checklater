const ul = document.getElementById('authors'); // Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
fetch(url)
    .then((resp)=> resp.json())
    .then(function(data)  {
        console.log(data)
        let authors = data.results; // Get the results
        return authors.map(function(author) { // Map through the results and for each run the code below
          let li = createNode('li'), //  Create the elements we need
              img = createNode('img'),
              span = createNode('span');
          img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
          span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
          append(li, img); // Append all our elements
          append(li, span);
          append(ul, li);
        })
    
    })
    
    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
      }
    
      function append(parent, el) {
        return parent.appendChild(el); // Append the second parameter(element) to the first one
      }    