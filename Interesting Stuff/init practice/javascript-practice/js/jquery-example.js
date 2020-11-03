

// change focus to the text field when the new item butom is clicked  

$(function() 
{

    // SETUP
    var $list, $newItemForm, $newItemButton;
    var item = '';                                 // item is an empty string
    $list = $('ul');                               // Cache the unordered list
    $newItemForm = $('#newItemForm');              // Cache form to add new items
    $newItemButton = $('#newItemButton');          // Cache button to show form


    $('li').hide().each(function(index) 
                        {          // Hide list items
                            $(this).delay(200 * (index + 1) ).slideDown(400);     // Then fade them in
                        });
  
    // ITEM COUNTER
    // note if the function is made self calling then it will only call itself only one time
    function updateCount() 
    {                       // Create function to update counter
      var items = $('li[class!=complete]').length; // Number of items in list
      $('#counter').text(items);                   // Added into counter circle
    }
    updateCount();                                 // Call the function
  
    // SETUP FORM FOR NEW ITEMS
    $newItemButton.hide().show(600);                         // Show the button with animation
    $newItemForm.hide();                           // Hide the form
    $('#showForm').on('click', function() 
                                {        // When click on add item button
                                     $newItemButton.slideUp(600);                       // Hide the button
                                    $newItemForm.show(600);                         // Show the form
                                });
  
    // ADDING A NEW LIST ITEM
    $newItemForm.on('submit', function(e)   
                                {       // When a new item is submitted
                                    e.preventDefault();                         // Prevent form being submitted
                                    var text = $('input:text').val();           // Get value of text input
                                    $list.append('<li>' + text + '</li>');      // Add item to end of the list
                                    $('list:last').hide().show(600);
                                    $($newItemForm).slideUp(600);    // try this out 
                                    $newItemButton.show(600);     
                                    $('input:text').val('');                    // Empty the text input
                                    updateCount();                              // Update the count
                                });

  
    // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    $list.on('click', 'li', function() 
    {
      
        var $this = $(this);               // Cache the element in a jQuery object
        var complete = $this.hasClass('complete');  // Is item complete
  
      if (complete === true) 
      {           // Check if item is complete
        $this.animate({                  // If so, animate opacity + padding
          opacity: 0.0,
          height: '-=50'
        }, 800, 'swing', function() {    // Use callback when animation completes
          $this.remove();                // Then completely remove this item
        });

      } 

      else 
      {                           // Otherwise indicate it is complete
        item = $this.text();             // Get the text from the list item
        $this.remove();                  // Remove the list item
        $list                            // Add back to end of list as complete
          .append('<li class=\"complete\">' + item + '</li>')
          .hide().fadeIn(300);           // Hide it so it can be faded in
        updateCount();                   // Update the counter
      }        
                                // End of else option
    });                                  // End of event handler
  
  });