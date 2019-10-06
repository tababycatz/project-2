//from CATS APP, NEED TO CHANGE STUFF//

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(" -- change state for add to cart -- ").on("click", function(event) {
      var id = $(this).data("id");
      
  
      // Send the PUT request.
      $.ajax("/api/users/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newUser = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/user", {
        type: "POST",
        data: newUser
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  