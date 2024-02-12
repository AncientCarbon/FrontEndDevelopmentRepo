pongNum = 0
imgShown = true
function showMessage() {
    document.getElementById("message").innerText = "Pong number: " + counter();
}

// Just a function to see if function calls and shit work
function counter() {
    pongNum++;
    return pongNum;
}

function showImage() {
    var img = document.getElementById("shrek");
    img.src = 'images/shrek.jpg';
    if (imgShown){
        img.style.display = 'none';
        imgShown = false;
        }
    else {
        img.style.display = 'block';
        imgShown = true;
    }
}

function nextPage() {
    pagenr = parseInt(document.querySelector('body').id);
    pagenr++;
    newPage = 'page' + pagenr + '.html';
    location.replace(newPage);
}

function prevPage() {
    pagenr = parseInt(document.querySelector('body').id);
    pagenr -= 1;
    if (pagenr <= 1) newPage = 'index.html';
    else {
        newPage = 'page' + pagenr + '.html';
    }

    location.replace(newPage);
}

let cart = [
]

function confirm(message) {
    // TODO: make pop-up for user to confirm
    return true;
}

function updateCartUI() {
    console.clear();
    console.log("Cart contents:", cart)
    // TODO: update the webpage to display cart
}

function addToCart(itemId) {
    if (!confirm("Add to cart?")) {
        return;
    }

    const item = itemsForSale.find(item => item.id === itemId);
    if (!item) {
        console.error("Item not found");
        return;
    }

    const existingItemIndex = cart.findIndex(cartItem => cartItem.id == item.id);
    if (existingItemIndex !== -1) {
        // update quantity if item is in cart
        cart[existingItemIndex].quantity += 1;
    }
    else {
        cart.push({...item, quantity: 1});
    }
    updateCartUI()
}

document.addEventListener('DOMContentLoaded', function() {
    const pictureGrid = document.querySelector('.pictureGrid');
    itemsForSale.forEach(item => {
        const itemHTML = `
            <div class="image-container">
                <img src="${item.image}" alt="image of ${item.name}">
                <span class="image-text">
                    ${item.name}<br>
                    $${item.price}
                    <button class="add-to-cart-btn" data-item-id="${item.id}">Add to Cart</button>
                </span>
            </div>
        `;
        pictureGrid.innerHTML += itemHTML;
    });

    // Now attach event listeners to the newly added buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            addToCart(itemId);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            addToCart(itemId);
        })
    })
})