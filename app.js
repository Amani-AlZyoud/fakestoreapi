// Each Product object should contain:
// Title  
// Price                    
// Description
// Image 



// Fetch data from the "fakestoreapi" API using the fetch method.
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(product => getProducts(product))


 let arr;      
// This function takes data of the "fakestoreapi" API and creates a new instance for each product using the constructor.
function getProducts(product) {
 arr =  product.map( (p) => {
        let productObj = new Product(p.title, p.price, p.description, p.image);
        // console.log(productObj);
        return productObj;
    })

    getArrOfObj(arr);   
  }
  
  
  
  function getArrOfObj(arr){
    
    arr.forEach(element => {
      renderProduct(element);
      
  });  
  // console.log(arr);
}


// A constructor that generates product objects which will be rendered in the main section.
function Product(product_title, product_price, product_description, product_image){
            this.product_title = product_title;
            this.product_price = product_price;
            this.product_description = product_description;
            this.product_image = product_image;
}



// Container that contains each product's Card.
let container = document.getElementById('container');


// Render each product object as Card into the Html page - Main section.
function renderProduct(productObj){

let card = document.createElement("div");
card.classList.add('card');
card.classList.add('text-center');
card.classList.add('mx-3');
card.classList.add('my-3');
card.style.alignItems = 'center';
card.classList.add('shadow');
card.onmouseover = ()=>{card.style.scale = '1.1'};
card.onmouseout = ()=>{card.style.scale = '1'};
card.style.width = '18rem';
card.style.border = '2px solid #D2CBDB';
card.style.fontFamily = 'Rubik';


let card_img = document.createElement("img");
card_img.style.width = '8rem';
card_img.style.height = '8rem';
card_img.classList.add('card-img-top');
card_img.classList.add('my-2');
card_img.src = productObj.product_image;


let card_body = document.createElement("div");
card_body.classList.add('card-body');
card_body.style.backgroundColor = '#D2CBDB;';


let card_title = document.createElement('h5');
card_title.classList.add('card-title');
card_title.style.textAlign = 'start';
card_title.style.fontWeight = 'bold';
card_title.textContent = productObj.product_title;


let card_description = document.createElement('p');
card_description.classList.add('card-text');
card_description.classList.add('mb-3');
card_description.style.fontSize = 'small';
card_description.style.color = 'rgb(98, 98, 99)';
card_description.style.textAlign = 'start';
card_description.textContent = productObj.product_description;


let card_price = document.createElement('div');
card_price.classList.add('card-footer');
card_price.classList.add('text-muted');
card_price.style.backgroundColor = '#D2CBDB';
card_price.style.width = 'inherit';
card_price.style.fontFamily = 'Rubik';
card_price.style.fontWeight = 'bold';
card_price.textContent = "Price: " + productObj.product_price + "$";


card_body.appendChild(card_title);
card_body.appendChild(card_description);

card.appendChild(card_img);
card.appendChild(card_body);
card.appendChild(card_price);

container.appendChild(card);

}