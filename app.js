'use strict'
// Array to hold all product objects
let allPossibleImages = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];
let allProducts = [];
// Array to hold all product names
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'dragon'];
let maxClicks = 25;
let totalClicks = 0;
// Create a constructor function that creates an object associated with 
// each product, and has the following properties:
function Product(name,path){
    // Name of the product
    // File path of image
    // Times the image has been shown
    this.name = name;
    this.path = path;
    this.timesShown = 0;
    this.timesClicked = 0;
    this.trackClicks = function(event){
        console.log(`You clicked image ${name}.`);
    }
    allProducts.push(this);
}

//Create an algorithm that will randomly generate three unique product images from the 
//images directory and display them side-by-side-by-side in the browser window.
function getRandomImage(){
    //Math.random gives me a whole number
    console.log(Math.floor(Math.random()*allPossibleImages.length));
}
//Getting elements from html
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let resultsButton = document.getElementById('results-button');
//Making an image for every name in the product name array
let img_one = document.querySelector('#image-container img:first-child');
let img_two = document.querySelector('#image-container img:nth-child(2)');
let img_three = document.querySelector('#image-container img:nth-child(3)');
let img_four = document.querySelector('#image-container img:nth-child(4)');
let img_five = document.querySelector('#image-container img:nth-child(5)');

// Instance variables --> Objects
let bag = new Product('bag','./assets/bag.jpg');
let banana = new Product('banana','./assets/banana.jpg');
let bathroom = new Product('bathroom','./assets/bathroom.jpg');
let boots = new Product('boots','./assets/boots.jpg');
let dragon = new Product('dragon','./assets/dragon.jpg');

function constructImages(){
    //let bag0 = new Product(productNames[0],'./assets'+productNames[0]+'.jpg');
    //Adding path to image / Adding path attribute
    img_one.setAttribute('src',bag.path);
    img_one.setAttribute('alt',bag.name);
    img_two.setAttribute('src',banana.path);
    img_two.setAttribute('alt',banana.name);
    img_three.setAttribute('src',bathroom.path);
    img_three.setAttribute('alt',bathroom.name);
    img_four.setAttribute('src',boots.path);
    img_four.setAttribute('alt',boots.name);
    img_five.setAttribute('src',dragon.path);
    img_five.setAttribute('alt',dragon.name);

    img_one.addEventListener('click',function(){trackClicks(bag)});
    img_two.addEventListener('click',function(){trackClicks(banana)});
    img_three.addEventListener('click',function(){trackClicks(bathroom)});
    img_four.addEventListener('click',function(){trackClicks(boots)});
    img_five.addEventListener('click',function(){trackClicks(dragon)});
    timesShown(bag);
    timesShown(banana);
    timesShown(bathroom);
    timesShown(boots);
    timesShown(dragon);
    
}

// Function to display random images
function displayRandomImage(product){
    // This function needs the randomizer algorithm

}
// Function to show how many times an image was shown
function timesShown(product){
    // See if image is there
    if (product.name === img_one.alt){
        console.log(`The ${product.name} is on the page.`);
        product.timesShown++;
        console.log(product.timesShown);
    }
    else if (product.name === img_two.alt){
        console.log(`The ${product.name} is on the page.`);
        product.timesShown++;
        console.log(product.timesShown);
    }
    else if (product.name === img_three.alt){
        console.log(`The ${product.name} is on the page.`);
        product.timesShown++;
        console.log(product.timesShown);
    }
    else if (product.name === img_four.alt){
        console.log(`The ${product.name} is on the page.`);
        product.timesShown++;
        console.log(product.timesShown);
    }
    else if (product.name === img_five.alt){
        console.log(`The ${product.name} is on the page.`);
        product.timesShown++;
        console.log(product.timesShown);
    }
    else{
        console.log('there is no image here');
    }
}
//Function to show times an image was clicked
function trackClicks(product){
    // Incrementing the times clicked if the times clicked
    // is less than the max clicks
    if (totalClicks < maxClicks){
        product.timesClicked++;
        totalClicks++;
        console.log(product.timesClicked);
    }
    // When clicks = 25, the alert triggers and sends the message
    // That too many clicks have been used on the products
    else{
        alert ('Too many clicks');
    }
}
// Function to display the results of the clicks
function displayResults(productArray){
    for (let i = 0; i < productArray.length; i++){
        // Grabs from the array of initialized products
        let product = productArray[i];
        let resultMessage = `This product was clicked ${product.timesClicked} times.
        This product was shown ${product.timesShown} times.
        The name of this product is ${product.name}.
        The path to the product's image is ${product.path}.`;
        let p = document.createElement('p');
        p.textContent = resultMessage;
        resultContainer.appendChild(p);
    }
}
function showResults(){
    displayResults(allProducts);
}

constructImages(allProducts);

