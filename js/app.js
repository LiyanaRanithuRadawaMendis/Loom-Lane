document.addEventListener('DOMContentLoaded', () => {
    
    // theme
    
    const themeBtn = document.getElementById('theme-btn');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    if(themeBtn){
        themeBtn.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        });
    }

    function enableDarkMode() {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if(sunIcon) sunIcon.classList.remove('d-none');
        if(moonIcon) moonIcon.classList.add('d-none');
    }

    function enableLightMode() {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if(sunIcon) sunIcon.classList.add('d-none');
        if(moonIcon) moonIcon.classList.remove('d-none');
    }


    
    // product search

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            
            
            if (query.length === 0) {
                searchResults.classList.add('d-none');
                searchResults.innerHTML = '';
                return;
            }

            
            if (typeof productsData === 'undefined') {
                console.error("Products data not loaded");
                return;
            }

           
            const matches = productsData.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.category.toLowerCase().includes(query)
            );

            
            if (matches.length > 0) {
                searchResults.classList.remove('d-none');
                searchResults.innerHTML = matches.map(prod => `
                    <a href="product-detail.html?id=${prod.id}" class="search-result-item">
                        <img src="${prod.main_image}" alt="${prod.name}" class="search-thumb">
                        <div class="search-info">
                            <h6>${prod.name}</h6>
                            <span>LKR ${prod.price ? prod.price.toLocaleString() : prod.original_price.toLocaleString()}</span>
                        </div>
                    </a>
                `).join('');
            } else {
                searchResults.classList.remove('d-none');
                searchResults.innerHTML = `<div class="no-results">No products found for "${query}"</div>`;
            }
        });

        
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.add('d-none');
            }
        });
    }


    // product slider

    const sliders = document.querySelectorAll('.slider-wrapper');
    sliders.forEach(wrapper => {
        const container = wrapper.querySelector('.scroll-container');
        const leftBtn = wrapper.querySelector('.left-arrow');
        const rightBtn = wrapper.querySelector('.right-arrow');

        if(leftBtn && rightBtn && container) {
            leftBtn.addEventListener('click', (e) => {
                e.preventDefault();
                container.scrollBy({ left: -300, behavior: 'smooth' });
            });

            rightBtn.addEventListener('click', (e) => {
                e.preventDefault();
                container.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    });



    // pages

    
    // product Details Page
    if (document.getElementById('product-name')) {
        loadProductDetails(); 
    }

    // Blog Details Page
    if (document.getElementById('article-title')) {
        loadBlogDetails();
    }

    // Cart Page
    if (document.getElementById('cart-items-container')) {
        localStorage.removeItem('buyNowItem');
        renderCart();
    }
    
    // Checkout Page
    if (document.getElementById('checkout-items-container')) {
        renderCheckoutSummary();
    }
    
    // watchlist Page
    if (document.getElementById('watchlist-container')) {
        renderWatchlist();
    }

    
    updateHeaderCartCount();
});



// data loading


function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId) return; 

    new Promise((resolve) => {
        setTimeout(() => {
            if(typeof productsData !== 'undefined') {
                resolve(productsData);
            } else {
                console.error("Error: productsData is missing.");
            }
        }, 300);
    })
    .then(products => {
        const currentId = parseInt(productId);
        const product = products.find(p => p.id === currentId);

        if (product) {
            const displayPrice = product.price ? product.price : product.original_price;

            document.getElementById('product-category').textContent = product.category;
            document.getElementById('product-name').textContent = product.name;
            
            // price format with .00
            document.getElementById('product-price').textContent = `LKR ${displayPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            
            const opEl = document.getElementById('original-price');
            if (opEl) {
                if(product.price && product.original_price && product.price < product.original_price) {
                    opEl.textContent = `LKR ${product.original_price.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
                } else {
                    opEl.textContent = ''; 
                }
            }

            document.getElementById('product-description').textContent = product.description;
            
            const mainImg = document.getElementById('mainImage');
            if (mainImg) mainImg.src = product.main_image;

            const thumbContainer = document.getElementById('thumbnail-container');
            if (thumbContainer && product.thumbnails) {
                thumbContainer.innerHTML = '';
                product.thumbnails.forEach((thumbPath, index) => {
                    const img = document.createElement('img');
                    img.src = thumbPath;
                    img.className = `thumb-img ${index === 0 ? 'active' : ''}`; 
                    img.alt = product.name;
                    img.onclick = function() { swapImage(this); };
                    thumbContainer.appendChild(img);
                });
            }
            
            const addToCartBtn = document.getElementById('add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.onclick = () => addToCartAction();
            }

            loadRelatedProducts(products, currentId);

        } else {
            document.getElementById('product-name').textContent = "Product Not Found";
        }
    })
    .catch(error => console.error('Error loading product:', error));
}

function loadRelatedProducts(allProducts, currentId) {
    const sliderContainer = document.getElementById('related-products-slider');
    if (!sliderContainer) return;

    sliderContainer.innerHTML = '';
    const otherProducts = allProducts.filter(p => p.id !== currentId);
    const displayProducts = otherProducts.slice(0, 8);

    displayProducts.forEach(prod => {
        const card = document.createElement('a');
        card.href = `product-detail.html?id=${prod.id}`;
        card.className = 'scroll-card';
        card.style.minWidth = "250px"; 
        card.style.display = "block";
        
        const cardPrice = prod.price ? prod.price : prod.original_price;
        
        
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${prod.main_image}" alt="${prod.name}" style="width:100%; display:block;">
            </div>
            <h5 class="mt-3 fw-bold" style="font-size: 1rem; color: #1C4E55;">${prod.name}</h5>
            <p class="small" style="color: #C09858;">LKR ${cardPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
        `;
        sliderContainer.appendChild(card);
    });
}

function loadBlogDetails() {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');
    if (!articleId) return;

    new Promise((resolve) => {
        setTimeout(() => {
            if(typeof blogData !== 'undefined') resolve(blogData);
        }, 200);
    }).then(articles => {
        const id = parseInt(articleId);
        const article = articles.find(a => a.id === id);
        if (article) {
            document.getElementById('article-category').textContent = article.category;
            document.getElementById('article-title').textContent = article.title;
            document.getElementById('breadcrumb-title').textContent = article.title;
            document.getElementById('article-date').textContent = article.date;
            document.getElementById('article-content').innerHTML = article.content;
            const imgEl = document.getElementById('article-image');
            if(imgEl) imgEl.src = "../" + article.image; 
        }
    });
}



function swapImage(thumbnail) {
    const mainImg = document.getElementById('mainImage');
    if(mainImg) mainImg.src = thumbnail.src;
    document.querySelectorAll('.thumb-img').forEach(img => img.classList.remove('active'));
    thumbnail.classList.add('active');
}

function openFullImage() {
    const modal = document.getElementById("fullImageModal");
    const img = document.getElementById("mainImage");
    const modalImg = document.getElementById("fullImage");
    if(modal && img) { modal.style.display = "block"; modalImg.src = img.src; }
}

function closeFullImage() {
    const modal = document.getElementById("fullImageModal");
    if(modal) modal.style.display = "none";
}

function validateQty() {
    const qtyInput = document.getElementById('product-qty');
    if (!qtyInput) return true;
    const qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty <= 0) { alert("Please enter a valid quantity."); return false; }
    return true;
}


// cart and watchlist


function getCart() { return JSON.parse(localStorage.getItem('cartItems')) || []; }
function saveCart(items) { localStorage.setItem('cartItems', JSON.stringify(items)); }
function getWatchlist() { return JSON.parse(localStorage.getItem('watchlistItems')) || []; }
function saveWatchlist(items) { localStorage.setItem('watchlistItems', JSON.stringify(items)); }

function getProductDetails() {
    const name = document.getElementById('product-name').innerText;
    const priceString = document.getElementById('product-price').innerText;
    const cleanedString = priceString.replace('LKR', '').replace(/,/g, '').trim();
    const price = parseFloat(cleanedString);

    const qtyInput = document.getElementById('product-qty');
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    const img = document.getElementById('mainImage').src;
    
    return { id: Date.now(), uniqueId: name.replace(/\s+/g, '-').toLowerCase(), name, price, img, qty };
}

function addToCartAction() {
    if (!validateQty()) return;
    const newItem = getProductDetails();
    let cart = getCart();
    cart.push(newItem);
    saveCart(cart);
    
    // header count
    updateHeaderCartCount();
    
    alert("Added to Cart!");
}

function buyNow() {
    if (!validateQty()) return;
    const newItem = getProductDetails();
    localStorage.setItem('buyNowItem', JSON.stringify([newItem]));
    window.location.href = 'checkout.html';
}

function addToWatchlistAction() {
    const newItem = getProductDetails(); 
    let wl = getWatchlist();
    const exists = wl.some(item => item.name === newItem.name);

    if (exists) {
        alert("Item is already in your Watchlist!");
    } else {
        wl.push(newItem);
        saveWatchlist(wl);
        alert("Added to Watchlist!");
    }
}



function renderCart() {
    const container = document.getElementById('cart-items-container');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const items = getCart();
    let subtotal = 0;
    
    if(!container) return;
    container.innerHTML = '';

    if (items.length === 0) {
        container.classList.add('d-none');
        if(emptyMsg) emptyMsg.classList.remove('d-none');
        updateTotals(0);
        return;
    } else {
        container.classList.remove('d-none');
        if(emptyMsg) emptyMsg.classList.add('d-none');
    }

    items.forEach(item => {
        subtotal += item.price * item.qty;
        const row = document.createElement('div');
        row.className = 'cart-item';
        
        row.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">LKR ${item.price.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
            </div>
            <div class="d-flex align-items-center gap-4">
                <div class="d-flex align-items-center gap-2">
                    <span class="small text-muted">Quantity</span>
                    <input type="number" min="1" value="${item.qty}" class="cart-qty-input" onchange="updateCartQty(${item.id}, this.value)">
                </div>
                <button class="btn-trash" onclick="removeCartItem(${item.id})">
                    <img src="assets/icons/cart/delete.svg" alt="Remove" class="trash-light">
                    <img src="assets/icons/cart/gold_delete.svg" alt="Remove" class="trash-dark">
                </button>
            </div>
        `;
        container.appendChild(row);
    });
    updateTotals(subtotal);
}

function renderWatchlist() {
    const container = document.getElementById('watchlist-container');
    const emptyMsg = document.getElementById('empty-watchlist-msg');
    const items = getWatchlist();
    if(!container) return;
    container.innerHTML = '';

    if (items.length === 0) {
        if(emptyMsg) emptyMsg.classList.remove('d-none');
        return;
    } else {
        if(emptyMsg) emptyMsg.classList.add('d-none');
    }

    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-3';
        
        col.innerHTML = `
            <div class="watchlist-card">
                <div class="watchlist-img-wrapper"><img src="${item.img}" class="watchlist-img"></div>
                <div class="watchlist-info mb-3">
                    <h5 class="fw-bold mb-1" style="font-size: 1.1rem; color: var(--text-color);">${item.name}</h5>
                    <p class="mb-0 small" style="color: #C09858; font-weight: 600;">LKR ${item.price.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                </div>
                <div class="d-flex flex-column gap-2">
                    <button class="btn btn-sm btn-gold-solid w-100 rounded-pill" onclick="moveWatchlistToCart(${item.id})">Add to Cart</button>
                    <button class="btn btn-sm btn-outline-danger w-100 rounded-pill border-0" onclick="removeFromWatchlist(${item.id})" style="background:rgba(255,0,0,0.05);"><span class="small">Remove</span></button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items-container');
    if(!container) return;
    const buyNowData = localStorage.getItem('buyNowItem');
    const items = buyNowData ? JSON.parse(buyNowData) : getCart();
    let subtotal = 0;
    container.innerHTML = '';

    items.forEach(item => {
        subtotal += item.price * item.qty;
        const row = document.createElement('div');
        row.className = 'checkout-item';
        
        row.innerHTML = `
            <div class="position-relative">
                <img src="${item.img}" alt="${item.name}" class="checkout-item-img">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" style="font-size:0.7rem">${item.qty}</span>
            </div>
            <div class="checkout-item-details">
                <div class="checkout-item-name">${item.name}</div>
                <div class="text-muted small">Qty: ${item.qty}</div>
            </div>
            <div class="fw-bold" style="color: #C09858;">LKR ${(item.price * item.qty).toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
        `;
        container.appendChild(row);
    });
    updateCheckoutTotals(subtotal);
}

function updateCartQty(id, qty) {
    let cart = getCart();
    let item = cart.find(i => i.id === id);
    if(item && qty > 0) { 
        item.qty = parseInt(qty); 
        saveCart(cart); 
        renderCart(); 
        updateHeaderCartCount();
    }
}

function removeCartItem(id) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== id);
    saveCart(cart);
    renderCart();
    updateHeaderCartCount();
}

function removeFromWatchlist(id) {
    let wl = getWatchlist();
    wl = wl.filter(i => i.id !== id);
    saveWatchlist(wl);
    renderWatchlist();
}

function moveWatchlistToCart(id) {
    let wl = getWatchlist();
    let item = wl.find(i => i.id === id);
    if(item) {
        let cart = getCart();
        cart.push({...item, qty: 1, id: Date.now()});
        saveCart(cart);
        removeFromWatchlist(id);
        
        updateHeaderCartCount();
        
        alert('Moved to Cart!');
    }
}

function updateTotals(subtotal) {
    const shipping = subtotal > 0 ? 3000 : 0;
    const total = subtotal + shipping;
    
    if(document.getElementById('cart-subtotal')) document.getElementById('cart-subtotal').innerText = 'LKR ' + subtotal.toLocaleString('en-US', {minimumFractionDigits: 2});
    if(document.getElementById('cart-total')) document.getElementById('cart-total').innerText = 'LKR ' + total.toLocaleString('en-US', {minimumFractionDigits: 2});
}

function updateCheckoutTotals(subtotal) {
    const shipping = subtotal > 0 ? 3000 : 0;
    const total = subtotal + shipping;
    
    if(document.getElementById('checkout-subtotal')) document.getElementById('checkout-subtotal').innerText = 'LKR ' + subtotal.toLocaleString('en-US', {minimumFractionDigits: 2});
    if(document.getElementById('checkout-total')) document.getElementById('checkout-total').innerText = 'LKR ' + total.toLocaleString('en-US', {minimumFractionDigits: 2});
}


function updateHeaderCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = totalQty;
        badge.style.display = totalQty > 0 ? 'inline-block' : 'none';
    }
}
