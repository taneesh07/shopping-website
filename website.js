document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutButton = document.getElementById('checkout');

    // Add to Cart Functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            cart.push({ name, price });
            updateCart();
        });
    });

    // Update Cart Display
    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(itemElement);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Checkout Functionality
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            cart.length = 0; // Clear cart
            updateCart();
        }
    });
});