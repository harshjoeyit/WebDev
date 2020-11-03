// mouse events 



var elClose = document.getElementById('close');
elClose.addEventListener('click', dissmissNote ,false);     


function dissmissNote()
{
    var parent = elClose.parentElement;     // event happens on the element denoted by id ="close"
    var gparent = parent.parentNode;        // its parent is <p> element 
    var ggparent = gparent.parentNode;      // div is the grand parent <a> and parent of <p>
    ggparent.removeChild(gparent);          // body is grand grand parent of <a> , parent of div  
}




// for form 1


(function()
{

    var elUsername = document.getElementById('username');
    elUsername.addEventListener('blur', function()
                                    {
                                        checkUsername(4)
                                    } , false);


    // html using java script in form 
    function checkUsername(minLength)
    {
        var elMsg = document.getElementById('feedback');
        
        // value of the input - eluseraname.value

        if( elUsername.value.length < minLength)
        {
            elMsg.textContent = 'username must be ' +  minLength + ' characters or more ';
        }
        else
        {
            elMsg.textContent = '';
        }
    }

}());



// for form 2
(function()
{


    var elUsername = document.getElementById('Username');
    if( elUsername.addEventListener)
    {
        elUsername.addEventListener( 'blur', function(e){
                                                        checkLength(e,5);
                                                    }, false ); 
    }
            // fallback 
    else
    {
        elUsername.attachEvent( 'onblur' , function(e){
                                                        checkLength(e,5);
                                                     });
    }


// generalised function for all text fields

    function checkLength( e, minLength )
    {
        var el , elMsg;
        if( !e )
        {
            e = window.event;
        }
    
        el = e.target || e.srcElement;
        elMsg = el.nextSibling;         // selects the feedback element next to input (username)

        if( el.value.length < minLength )
        {
            elMsg.className = 'error';  // changing so that styling is different in CSS
            elMsg.innerHTML = 'not long enough yet ! (at least ' + minLength + ' characters )';
        }
        else
            elMsg.innerHTML = '';
    }

}());





// mouse event



   /*
    The book used the following code - but it had two shortcomings
    - Clicking between list items would remove the whole list
    - Clicking on italic text would remove the link - not the list item

    The next 10 lines improve that example
    */


   function getTarget(e) 
   {                          // Declare function
       if (!e) {                                      // If there is no event object
         e = window.event;                            // Use old IE event object
       }
       return e.target || e.srcElement;               // Get the target of event
     }   


  // imp: node name concept to check and compare  the tagname



  // Declare function
  function itemDone(e) 
  {                          
    // Remove item from the list
    var target, elParent, elGrandparent;           // Declare variables
    target = getTarget(e);                         // Get the item clicked link

    if ( target.nodeName.toLowerCase() == "a" )    //hyperlink <a >
    {  // If user clicked on an a element
      elListItem = target.parentNode;              // Get its li element
      elList = elListItem.parentNode;              // Get the ul element
      elList.removeChild(elListItem);              // Remove li from ul
    }

    if ( target.nodeName.toLowerCase() == "em" ) { // If the user clicked on an em element
      elListItem = target.parentNode.parentNode;   // Get its li element ,a is parent ,li is grand parent
      elList = elListItem.parentNode;              // Get the ul element
      elList.removeChild(elListItem);              // Remove list item from list
    }
  
    // Prevent the link from taking you elsewhere , i.e stop the href link
    if (e.preventDefault) {                        // If preventDefault() works
      e.preventDefault();                          // Use preventDefault() 
    } else {                                       // Otherwise
      e.returnValue = false;                       // Use old IE version
    }
  }
  



  // Set up event listeners to call itemDone() on click
  // we attach the event listener to such an box , inside which event is happening



  var el = document.getElementById('shoppingList');// Get shopping list
  if (el.addEventListener) {                       // If event listeners work
    el.addEventListener('click', function(e) {     // Add listener on click
      itemDone(e);                                 // It calls itemDone()
    }, false);                                     // Use bubbling phase for flow
  } else {                                         // Otherwise
    el.attachEvent('onclick', function(e) {        // Use old IE model: onclick
      itemDone(e);                                 // Call itemDone()
    });
  }








// USER INTERFACE EVENTS 




//load 
function Focus()
{
    var textInput;                                      // create variable 
    textInput = document.getElementById('username');     // get username input
    textInput.focus();                                   // give username
}                                                       

 // when page loaded call Focus , since the content loads in the window  
 // we chose window as the element to add the event listener 

window.addEventListener( 'load',Focus, false ); 





//focus


function tipUsername(e , minChar)
{
    var target = getTarget(e);              // event occurs on the element <input text = "username" .../>
    var nextElement = target.nextSibling;   // the next element is the feedback element for displaying feedback , we use it to display 'tip'
    nextElement.className = 'tip';          // we change its className for different stylink in CSS
    nextElement.innerHTML = 'please enter at least '+ minChar + ' charcters ';
}

var input_username = document.getElementById('Username');

                                            // we can only pass one arg here i.e. - e
input_username.addEventListener( 'focus' , function(e)
                                            {
                                                // we call the function that manages our event 
                                                tipUsername(e,5);
                                            }, false );







// validating passswords 


(function()
{

    function ascii (a) 
    {
        return a.charCodeAt(0); 
    }

    function checkPassword(e)
    {
        var holdPass = getTarget(e);
        var error_msg = document.getElementById('checkmsg');
        var password = holdPass.value;
        var len = password.length;
        var flag1 = 0;
        var flag2 = 0;
        var flag3 = 0;

        for(var i = 0; i<len; i++ )
        {
        
            var s = password.charAt(i);
        
            if(s == '$' || s == '@' || s == '#'|| s == '$'|| s == '%'|| s == '~'|| s == '!'|| s == '^'|| s == '&' || s == '*')
                flag1 = 1;

            if(ascii(s)  >= 65  && ascii(s) <= 91 )
                flag2 = 1;

            if(ascii(s)  >= 48  && ascii(s) <= 57 )
                flag3 = 1;
            
        }

        if(flag1 == 0)
        {
            error_msg.className = 'error';
            error_msg.textContent = 'password must contain a SPECIAL char ';
        }

        else if(flag2 == 0)
        {
            error_msg.className = 'error';
            error_msg.textContent = 'password must contain a UPPERCASE char ';
        }

        else if(flag3 == 0)
        {
            error_msg.className = 'error';
            error_msg.textContent = 'password must contain a NUMBER ';
        }

        else if( len < 8)
        {
            error_msg.className = 'error';
            error_msg.textContent = 'min 8 char ';
        } 
        
        else
        {
            error_msg.className = 'tip';
            error_msg.textContent = 'Good Password';
        }
        
    }

    var input_password = document.getElementById('Password');

    input_password.addEventListener('blur', function(e){ checkPassword(e); } , false);

}());