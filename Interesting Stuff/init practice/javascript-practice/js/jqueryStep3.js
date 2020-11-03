

$(function() 
{
  var listItem, itemStatus, eventType;

  $('ul').on(
                'click mouseover',
                ':not(li#one)',   // execption of one
            {
                status: 'important'
            },

            function(e) 
            {
                listItem = 'Item: ' + e.target.textContent + '<br />';
                itemStatus = 'Status: ' + e.data.status + '<br />';
                eventType = 'Event: ' + e.type;
                $('#notes').html(listItem + itemStatus + eventType);    
            });

});





// EFFECTS 
// basic effects 



$(function()
{
    // for h2
    $('h2').hide().slideDown(1400);  // for better effect set this to (no. of li).(100) + fadin time // here li = 9 , fadein time = 500
    // for li 
    $('li:gt(4)').hide().each(  // at index greater than 4 , i.e from fifth element
                        function(index)
                        {  
                            $(this).delay(100*(index+1)).fadeIn(800);
                        });
    // on click
    $('li').on('click' , function()
                            {
                                if( $(this).attr('class') == 'hot' )
                                    $(this).slideUp(700);
                            });
});


$('p#notes').hide().delay(1700).slideDown(500);





// CSS animation IMP: 
// the values changes from the original value to 
// the specified value 
// within the specified time of animation 


// all the properties - syntax change : padding-right
//        (-) is removed and the next alphabet is capitalized 
//                                     - paddingRight  
 


$(function()
{
    $('li.cool').on('click', function()
                                {
                                    $(this).animate(
                                    {
                                        opacity: 0.0 ,    // opacity decrases opacity during the aniation and at end it drops to the specified value 
                                        paddingTop: '+=80'  ,       // the specified value is the final part of the animation 
                                    } , 500 , function() 
                                                {
                                                    // the action that needs to be performed in the given time 
                                                    $(this).remove();
                                                });
                                });
});




//traversing DOM
$(function()
{
    var $second_h2 = $('h2#buy2');
    $('ul#second').hide();
    $second_h2.append('<a id = "show_link"> show </a>');
    
    //hiding the newly created node 
    $('#show_link').hide().delay(1700).slideDown(500);
    // adding an element next to h2 , content after h2 is already hidden


    $second_h2.find('a').on('click', function()
                                    {
                                        $second_h2.next()     // changing the selector to ul#second , that is next sibling of h2#buy2
                                        .slideDown(1000)
                                        .children('.hot')
                                        .addClass('complete');

                                        $('#show_link').fadeOut();  
                                    });
});





// using filters
//......................specific selections...........................................



$(function()
{
    var $list_items = $('li');

    // filters the last hot li wihth class hot
    
    $list_items.filter('.hot:last').addClass('complete');   

    // adding the class attribute to the list item having em as a child node   
    
    $list_items.has('em').attr('class','cool');
    
    // li less than 5 -    0-4
    $list_items = $('li:lt(5)');
    $list_items.each( function()
                        {
                            if( $(this).is('#TWO') || $(this).is('#FOUR') )
                                $(this).append('<i>priority item</i>');
                        });
        


    // contains the text node value and mathes the pattern  
    $('li:contains("sauce")').prepend( " (Ritchi's) ");
    // prepending the textnode

});




// Finding elememt by  index ................................. 


// using index number to find elements 
$(function()
{
    $list_item = $('li:lt(4)');                 // selection of only less than index of 5
    $list_item.each(function(index)
                    {
                        if( index == 3 )
                            $(this).attr('class', 'cool');
                    });

    $list_item = $('li:gt(4)');
    
    $list_item.each(function(index)
                    {
                        if( index == 7 )
                            $(this).attr('class', 'hot');
                    });
});





