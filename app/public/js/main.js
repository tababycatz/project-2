$('.addcart').click(function(){

var item = $(this).siblings('.item').text();
var price = $(this).siblings('.price').text();
var qty = $(this).siblings('.qty').text();
var total = qty * price;


});