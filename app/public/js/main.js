if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
};

function ready() {
    var removeCartItemBtn = document.getElementsByClassName('removeItem');
    console.log(removeCartItem);

    for (var i = 0; i < removeCartItemBtn.length; i++) {
        var btn = removeCartItemBtn[i];
        btn.addEventListener('click', removeCartItem);
    };
    var quantityInput = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInput.length; i++) {
        var inpt = quantityInput[i];
        inpt.addEventListener('change', quantityChanged);
    };

    var addCartBtn = document.getElementsByClassName('addCart');
    for (var i = 0; i < addCartBtn.length; i++) {
    var bttn = addCartBtn[i];
    bttn.addEventListener('click', addCartClicked);
    }
};
function quantityChanged(event) {
    var newQty = event.target;
    if (isNaN(newQty.value) || newQty.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item')[0].innerText;
    var price = shopItem.getElementsByClassName('price')[0].innerText;
    
    console.log(title);
};

function removeCartItem(event) {
    var btnClicked = event.target;
    btnClicked.parentElement.remove();
    updateCartTotal();
};

function updateCartTotal() {
    // var cartContainer = document.getElementsByClassName('wholeCart')[0];
    var cartRow = cartContainer.getElementsByClassName('itemRow');
    var totalPrice = 0;
    for (var i = 0; i < cartRow.length; i++) {
        var carttRow = cartRow[i];
        var priceEl = carttRow.getElementsByClassName('price')[0];
        var quantityEl = carttRow.getElementsByClassName('qtyCart')[0];
        var price = parseFloat(priceEl.innerText.replace('$', ''));
        var quantity = quantityEl.value;
        totalPrice = totalPrice(price * quantity);
    }
    totalPrice = Math.round(totalPrice * 100) / 100
    document.getElementsByClassName('cart-total')[0].innerText = '$' + totalPrice;

}