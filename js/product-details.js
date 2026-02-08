// Load product details page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('productDetails').innerHTML = `
            <div style="text-align: center; padding: 4rem;">
                <h2>Product not found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <a href="index.html" class="back-link">← Back to Products</a>
            </div>
        `;
        return;
    }
    
    renderProductDetails(product);
});

function renderProductDetails(product) {
    const productDetails = document.getElementById('productDetails');
    
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    
    let sizesHTML = product.sizes.map(size => 
        `<button class="size-option" data-size="${size}">${size}</button>`
    ).join('');
    
    let colorsHTML = product.colors.map(color => 
        `<button class="color-option" data-color="${color}">${color}</button>`
    ).join('');
    
    // Use images array if available, otherwise fallback to single image
    const productImages = product.images || [product.image];
    const mainImage = productImages[0];
    
    // Generate thumbnail gallery HTML
    const thumbnailsHTML = productImages.map((img, index) => 
        `<img src="${img}" alt="${product.name} - View ${index + 1}" class="thumbnail-image ${index === 0 ? 'active' : ''}" data-index="${index}">`
    ).join('');
    
    productDetails.innerHTML = `
        <a href="index.html" class="back-link">← Back to Products</a>
        <div class="product-details-container">
            <div class="product-images-section">
                <img src="${mainImage}" alt="${product.name}" class="product-details-image" id="mainProductImage">
                <div class="image-gallery">
                    ${thumbnailsHTML}
                </div>
            </div>
            <div class="product-details-info">
                <h1>${product.name}</h1>
                <div class="product-details-price-container">
                    <span class="product-details-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="product-details-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    ${discount > 0 ? `<span class="product-badge">${discount}% OFF</span>` : ''}
                </div>
                <p class="product-details-description">${product.description}</p>
                
                <div class="product-features">
                    <h3>Features</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="product-options">
                    <h3>Size</h3>
                    <div class="size-selector">
                        ${sizesHTML}
                    </div>
                    
                    <h3>Color</h3>
                    <div class="color-selector">
                        ${colorsHTML}
                    </div>
                </div>
                
                <button class="add-to-cart-btn" ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners for size and color selection
    const sizeOptions = productDetails.querySelectorAll('.size-option');
    const colorOptions = productDetails.querySelectorAll('.color-option');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Set default selections
    if (sizeOptions.length > 0) sizeOptions[0].classList.add('selected');
    if (colorOptions.length > 0) colorOptions[0].classList.add('selected');
    
    // Add to cart functionality
    const addToCartBtn = productDetails.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        const selectedSize = productDetails.querySelector('.size-option.selected')?.textContent;
        const selectedColor = productDetails.querySelector('.color-option.selected')?.textContent;
        
        alert(`Added to cart: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}`);
    });
    
    // Image gallery functionality
    const mainImageElement = productDetails.querySelector('#mainProductImage');
    const thumbnailImages = productDetails.querySelectorAll('.thumbnail-image');
    
    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image
            mainImageElement.src = this.src;
            
            // Update active thumbnail
            thumbnailImages.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

