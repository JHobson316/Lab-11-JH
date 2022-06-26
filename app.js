'use strict'
let allClicks = [];

let allProducts = [];
// Array to hold all product names
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','water-can','wine-glass'];
let maxClicks = 25;
let totalClicks = 0;

let PicA = productNames[(Math.floor(Math.random()*productNames.length))];
let PicB = productNames[(Math.floor(Math.random()*productNames.length))];
let PicC = productNames[(Math.floor(Math.random()*productNames.length))];

while(PicA === PicB || PicB === PicC || PicB === PicA){
    PicB = productNames[rando];
    PicC = productNames[rando];
}

// Create a constructor function that creates an object associated with 
// each product, and has the following properties:
function Product(name){
    // Name of the product
    // File path of image
    // Times the image has been shown
    this.name = name;
    this.path = `./assets/${name}.jpg`;
    this.timesShown = 0;
    this.timesClicked = 0;
    this.trackClicks = function(event){
        console.log(`You clicked image ${name}.`);
    }
    allProducts.push(this);
}
// COMMENTING OUT TO TRY NEW RANDOM PIC METHOD
//Create an algorithm that will randomly generate three unique product images from the 
//images directory and display them side-by-side-by-side in the browser window.
//function getRandomImage(){
    //Math.random gives me a whole number
//    let PicA = productNames[(Math.floor(Math.random()*productNames.length))];
//    let PicB = productNames[(Math.floor(Math.random()*productNames.length))];
//    let PicC = productNames[(Math.floor(Math.random()*productNames.length))];
//    while(PicA === PicB || PicB === PicC || PicB === PicA){
//            PicB = productNames[(Math.floor(Math.random()*productNames.length))];
//            PicC = productNames[(Math.floor(Math.random()*productNames.length))];
//        }
//    return (PicA, PicB, PicC);
//}

//getRandomImage();

//Getting elements from html
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let resultsButton = document.getElementById('results-button');
let card1 = document.getElementById('item1');
let card2 = document.getElementById('item2');
let card3 = document.getElementById('item3');
//Making an image for every name in the product name array

// Instance variables --> Objects
let item1 = new Product(PicA);
let item2 = new Product(PicB);
let item3 = new Product(PicC);
console.log(allProducts);

function constructImages(item){
    //let bag0 = new Product(productNames[0],'./assets'+productNames[0]+'.jpg');
    //Adding path to image / Adding path attribute
    card1.setAttribute('src',item1.path);
    card1.setAttribute('alt',item1.name);
    card2.setAttribute('src',item2.path);
    card2.setAttribute('alt',item2.name);
    card3.setAttribute('src',item3.path);
    card3.setAttribute('alt',item3.name);
    

}
// Adding event listeners to each card
card1.addEventListener('click',function(){trackClicks(item1)});
card2.addEventListener('click',function(){trackClicks(item2)});
card3.addEventListener('click',function(){trackClicks(item3)});

// Function to show how many times an image was shown
function timesShown(product){
    // See if image is there
    if (product.name == card1.alt){
        console.log(`The ${product.name} is on the page.`);
        product.timesShown++;
        console.log(product.timesShown);
    }
    else if (product.name == card2.alt){
        console.log(`The ${product.name} is on the page.`);
        product.timesShown++;
        console.log(product.timesShown);
    }
    else if (product.name == card3.alt){
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
        storage();
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
//Constructing each image
constructImages(item1);
constructImages(item2);
constructImages(item3);
//Running timesShown for each of the three 
timesShown(item1);
timesShown(item2);
timesShown(item3);

// Inserting Local Storage
function storage(){
for (let i = 0; i< allProducts.length; i++){
    //Stringifying each object in allProducts
    let product_string = JSON.stringify(allProducts[i]);
    JSON.parse(product_string);
    //Setting items into local storage
    localStorage.setItem(`Name: ${i}`, allProducts[i].name);
    localStorage.setItem(`Path: ${i}`, allProducts[i].path);
    localStorage.setItem(`Times Clicked: ${i}`, allProducts[i].timesClicked);
    localStorage.setItem(`Times Shown: ${i}`, allProducts[i].timesShown);
}
}

//Adding chart
resultsButton.addEventListener('click', function() {

    alert('Great Work!');
    // Pull in canvas element from html
    let canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    //My chart (that I took)!
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: allProducts, //Pass array to our label data
            datasets: [{
                label: '# of Clicks',
                data: allClicks, // Has to match label data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            //New code from class --Start here
            {
                label: '# of views',
                data: timesShown,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
                // --End here 
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})
