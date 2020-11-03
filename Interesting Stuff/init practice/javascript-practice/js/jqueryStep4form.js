$(function()
{
    $('h1').hide().slideDown(1200);
    $('li').hide().each(function(index)
                {
                    $(this).delay( 120*(index+1) ).show(600);  // animation using show
                });
});



$(function()
{
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');

    // selecting the text of the input
    var $textInput = $('input:text');
    
    var $errorMsg = $('p#error');
    $errorMsg.text().toUpperCase();
    // step 1
    $newItemButton.show(); // show button only 
    $newItemForm.hide(); // hide form
    $errorMsg.hide();  // hiding error msg

    // step 2
    $('#showForm').on('click', function()
                                {
                                    $newItemButton.hide(); // hide button
                                    $newItemForm.slideDown(600); // show form
                                });
    // step 3
    $newItemForm.on('submit', function(e)
                            {
                                e.preventDefault();   // prevent default action 
                                var newText = $('input:text').val(); // 
                                if( newText.length > 0 )        // showing error msg if input is not given 
                                {
                                    $('li:last').after('<li>'+ newText + '</li>');      // adding new li
                                    $newItemForm.hide();        /// hiding form 
                                    $('li:last').hide().show(600).attr('class','cool');  // assigning new class to latest node  
                                    $errorMsg.hide();               // hiding error message
                                    $newItemButton.show();   	
                                    $textInput.val('');     // making the text input value null
                                }
                                else
                                {
                                    $errorMsg.show(600);       // adding time to the show button , introduces animation , sliding from side-left
                                }
                            });
});




// copying and cutting and pasting


$(function()
{
    // cloneing a node , removing it from a place 
    // then inserting it at a place 

    var $p_thought = $('p#thought');
    var $clonedItem = $p_thought.clone();
    $p_thought.remove();
    $clonedItem.insertAfter('h2');

    // another strategy 
    $('li').on('click', function()
                        {
                            // detach function 

                            var $moveItem = $(this).detach(); // clicked item gets dttached 
                            $moveItem.appendTo('ul').hide().show(600);      // item gets appended to the list
                        });
});



// HEIGHTS AND WIdth of the boxes

$(function()
{
    $p = $('p#thought');
    var para1_height = $p.height();
    $p.before('<i>  para Height : ' + para1_height + 'px </i>');
    $p.width('250');

});




$(function() 
{
    var $window = $(window);
    var $slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - $window.height() ; 
    $window.on('scroll', function() 
    {
        if (endZone < $window.scrollTop())
        {
            $slideAd.animate({ 'right': '0px' }, 250);
        } 
        else 
        {
            $slideAd.stop(true).animate({ 'right': '-360px' }, 250);  // stop is added to retain the content that has appeared 
        }
    });
});





