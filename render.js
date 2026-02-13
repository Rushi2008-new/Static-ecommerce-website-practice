const displayProducts = (products) => {
  productsDisplay.innerHTML = '';
  products.forEach((currentProduct) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
  <img src="${currentProduct.imgUrl}" alt="${currentProduct.name}">
  <h3 class="product-title">${currentProduct.name}</h3>
  <p class="product-description">${currentProduct.description}</p>
  <p class="card-rating-discount-strip">
  <span class="rating"> ${currentProduct.rating} ⭐</span>
  <span class="discount">${currentProduct.discountPercentage}% OFF</span>
</p>
  <p class="card-cart-button-strip">
  <span class="price">₹${currentProduct.discountedPrice}/-</span>
  <span class="original-price">₹${currentProduct.price}/-</span>
 <button class="product-button">Add To Cart</button>
 </p>
`;
    productsDisplay.append(card);
  });
};

export default displayProducts;
