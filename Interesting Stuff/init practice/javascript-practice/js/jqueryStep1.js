// ...............................IMP.....................................

// jquery objects the references to the selected node 

// they do not make a copy of the variable 

// to create a jquery object takes time since the objects loction is found by processing
// if you have created an object using jquery selection m then it is better to use the same object again 
// for j Query to work the DOM tree must be ready , loaded , before j query objects can select the elements from it

// ready function is used 
// $(document).ready(
//     function()
//     {
                // whole script goes here
//     });

// also there is a shorthand available for this
// there is a reason for putting the script tag at the bottom
// we want it to execute only when the dom tree has loaded 

// using the above condition we can place our script wherever we want to 





//only li leads to updating the contents of the li elements
// so specific selection 
$('li#five').html('<strike>apples</strike>');

//looping
// using css selection technique
// ancestor descendantds ' li a' like a inside li

$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');    // li has already class : hot , what is this doing



// getting element content 
var $listText = $('ul').text();
$('ul').append('<br /><p>' + $listText + '</p><br />');

var $qty = 2;
$('li').append('<i>Qty:' + $qty + '</i>');

// changing the qty value of fifth id using  a function 
$('li#five i' ).text(function() 
                {
                    return 'Qty: 5';
                });


// another property
//seletion of elements that contain matching text 
$('li:contains("sauce")').html('almonds <i>Qty: 250g </i>');


// remove property
// better than dom manipulation, one step process  
$('li#eight').remove();




//........................new content ,.................................
// adding new content to the page 




$(function()
{
    // adds the node before the selected node 
    $('li#five').before('<li class = "cool" >peaches</li>');
    
    // item - $ is compulsary for a jquery object 
    var $newListItem = $('<li class = "cool"> <em>gluten-free</em> cheese </li>')
    
    $('li:last').after($newListItem);   

   $('li.cool').prepend('+ ');

    $('ul').before('<p> just updated </p>');
});




//.................................animations............................add


// fadein , hide, addClass
$(':header').addClass('headline');
// selecting one by one and fading in with different speeds

var total = $('li').length;
for(var i = 0; i<total; i++)
{
    // seleccting the elements by the index , since a collection is returned 
    $('li:eq('+ i +')')                         // increases readablity 
    .hide()
    .delay(i*100 + 100)                 // creates a delay
    .fadeIn(500);
}




// events.....................................
//one liner function to remove any li element 


$('li').on('click',function(){
                                    $(this).remove();
                              });
// function does not work on the updated content
// try fading the page when the last list item is clicked to remove 



// attributes
// like setAttribute 

$('li#two').attr('class','cool')
$('li:last').attr('id', 'nine');


// ..classname = 'hot';

$('li#nine').addClass('hot');
