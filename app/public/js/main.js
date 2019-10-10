var removeCartItem = document.getElementsByClassName('removeItem');
console.log(removeCartItem);

for (var i = 0; i < removeCartItem.length; i++) {
    var btn = removeCartItem[i];
    btn.addEventListener('click', function (event) {
        var btnClicked = event.target;
        btnClicked.parentElement.remove();
        updateCartTotal();
    })
};

function updateCartTotal() {
    var cartContainer = document.getElementsByClassName('wholeCart')[0];
    var cartRow = cartContainer.getElementsByClassName('itemRow');
    for (var i = 0; i < cartRow.length; i++) {
        var carttRow = cartRow[i];
        var priceEl = carttRow.getElementsByClassName('price')[0];
        var quantityEl = carttRow.getElementsByClassName('qtyCart')[0];
        var price = parseFloat(priceEl.innerText.replace('$', ''));

    }

};