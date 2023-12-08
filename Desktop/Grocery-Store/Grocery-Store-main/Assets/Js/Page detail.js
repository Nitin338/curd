const productId = localStorage.getItem('selectedProductId');

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    const productDetailsElement = document.getElementById('product-details');
    productDetailsElement.innerHTML = `

      <img class ="page-img" src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>Description: ${product.description}</p>
      <p>Price: $${product.price}</p>
      <label for="cars">Choose a Quantity:</label>

  
      <button onclick="addvalue(${product.id})" class="btn-add">Add to Cart</button>
      <button class="btn-add">Buy Now</button>
`;})
  .catch(error => console.error('Error While fetching :', error));

function addvalue(id){
  if(localStorage.getItem('items')){
    let details = JSON.parse(localStorage.getItem('items'))
    details.push({data:id})
    localStorage.setItem('items',JSON.stringify(details))
  }else{
    localStorage.setItem('items',JSON.stringify([{data:id}]))
  }
}

//   function addToCart(productId) {
//     // Sample logic to add product to cart (you can customize this)
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(productId);
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Alert for demonstration purposes (customize as needed)
//     alert('Product added to the cart!');
// }


