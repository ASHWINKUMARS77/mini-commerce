const products = [
    { id: 1, name: "Wireless Headphones", price: 59.99 },
    { id: 2, name: "Smart Watch", price: 129.99 },
    { id: 3, name: "Gaming Mouse", price: 39.99 },
    { id: 4, name: "Mechanical Keyboard", price: 89.99 }
];

let cart = [];

const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.getElementById('close-modal');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

function renderProducts() {
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = cart.map((item, index) => `
        <li>
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        </li>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

cartBtn.addEventListener('click', () => cartModal.classList.remove('hidden'));
closeModal.addEventListener('click', () => cartModal.classList.add('hidden'));

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
        cartModal.classList.add('hidden');
    }
});
