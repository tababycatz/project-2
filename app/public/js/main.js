    $('.addCart').on("click", function(event){
      event.preventDefault();

        var cartItems = { 
        item: $(".item").val(),
        price: $(".price").val(),
        qty: $(".qty").val()
       };

       console.log(cartItems);
    });

    
