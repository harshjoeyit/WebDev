// changing css properties



// font of all less than 9 li elements          ,more than one value 
$('li:lt(9)').css('font-family' , '"Trebuchet MS","sans serif"' );



// more than one property can be updated 
$('li.super').css({
                    'text-decoration' : 'underline'
                })



// comparing two styling values


var $fontzero = $('li#zero').css('font-family');
var $fontFive = $('li#five').css('font-family');

if( $fontFive == $fontzero )
{
    $('li#zero').css('font-family' , 'serif');
}



// changing the styling on a click  
// simple syntax for event handling , event , function 
// function inside them use this as the refernce to themselves 



$('li').on('click', function()
                    {
                        $(this).css(
                        {
                            'text-decoration' : 'italic' ,
                            'color': 'black'
                        });
                    }); 

// to increase or decrease a property += is used
$('ul').css('padding' , '+=10px')




// attr object ob jQuery one arg - (class) , id - gets the value of the attribute 
// two args- (class , name) , changes the attribute value 
// see the below implementation



// chaging classes on every click
$('li').on('click', function()
                    {
                        if( $(this).attr('class') == 'super' )
                            $(this).attr('class' , 'ultimate');
    
                        else
                            $(this).attr('class', 'super');
                    });





// looping through each elemnet using each method 
///....................looping in jQuery ...............................

$('li').each(
    function()
    {
        var ids = this.id;
        $(this).append('<br /><i class = "order"> ' + ids + '</em>');
    }
);






//events 



$('body').css('background-color' , 'rgb(150,45,25)');

// remember to hold the reference to the node in use $(this) , not this 
// of you use this , then it does not work 
// but using $(this), makes it work 

//$() - defines a selection ...  if a task is performed then it is used for selection 
// fires on hovering


// remember there is no hover event , hover is used in Css  
// is mouse over 


$('li.super').on('mouseover',function()
                        {
                            $(this).children('i').remove();
                        });
                        
// mouse out triggers when the cursor isremoved from the current position 
$('li.ultimate').on('mouseout',function()
                                {
                                    $(this).children('i').remove();
                                });






// the event object

// setting date
$('li').on('click' , function(e)
                    {
                        var date = new Date();
                        //date.setTime(e.timeStamp);
                        var clicked = date.toDateString();
                        $(this).append('<span>' + clicked + ' , ' + e.type + '</span>');
                    });


                    
