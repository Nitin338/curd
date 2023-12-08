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

      <select  id="cars">
      <p id="error" style="color:red">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>

      </select>
      <button onclick="addvalue(${product.id})" class="btn-add">Add to Cart</button>
      <button class="btn-add">Buy Now</button>
`;})
  .catch(error => console.error('Error While fetching :', error));