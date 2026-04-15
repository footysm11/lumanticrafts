const products = [
  {
    name: "Rainbow Felt Ball Set",
    price: "Starting from $2.50",
    image: "images/product1.jpg"
  },
  {
    name: "Felt Wool Dryer Balls",
    price: "Starting from $1.80",
    image: "images/product2.jpg"
  },
  // Add more products here...
];

const grid = document.getElementById('product-grid');

products.forEach(product => {
  const card = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </div>
  `;
  grid.innerHTML += card;
});
