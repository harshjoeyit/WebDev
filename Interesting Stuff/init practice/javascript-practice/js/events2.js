var sx = document.getElementsByTagName('input')[0];        // Element to hold screenX
var sy = document.getElementsByTagName('input')[1];        // Element to hold screenY
var px = document.getElementsByTagName('input')[2];        // Element to hold pageX
var py = document.getElementsByTagName('input')[3];        // Element to hold pageY
var cx = document.getElementsByTagName('input')[4];        // Element to hold clientX
var cy = document.getElementsByTagName('input')[5];        // Element to hold clientY

function showPosition(e) 
{                               // Declare function
  sx.value = e.screenX;                    // Update element with screenX
  sy.value = e.screenY;                    // Update element with screenY
  px.value = e.pageX;                      // Update element with pageX
  py.value = e.pageY;                      // Update element with pageY
  cx.value = e.clientX;                    // Update element with clientX
  cy.value = e.clientY;                    // Update element with clientY
}

// Get body Element since cursor moves in body , event happenning in body 

var el = document.getElementById('body');      

// every time mouse moves the function is called 
el.addEventListener('mousemove', showPosition, false); 






// keypress event 


(function()
{
    var el;

    el = document.getElementById('message');
                                    // writing a function is important if 
                                    // need is for calling more than one function at once
    el.addEventListener( 'keypress' , function(e)
                                        {
                                            charCount(e);
                                        } , false );

    function charCount(e)
    {
        var textEntered , charDisplay , counter, lastkey;
        textEntered = document.getElementsByTagName('textArea')[0].value;
        charDisplay = document.getElementById('charactersLeft');


        // counting char
        
        counter = ( 143 - (textEntered.length) );

        charDisplay.textContent = counter + ' left';
        lastkey = document.getElementById('lastKey');
                                                    
                                                    // current keycode 
        lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode ;

    }


}());





// changing every entered char TO UPPERCASE 




(function()
{
    var holdText = document.getElementById('message');

    // since the char is entered on key up , we capitalize it then 
    holdText.addEventListener( 'keyup' , Capitalize, false );

    function Capitalize()
    {
        textEntered = document.getElementsByTagName('textArea')[0].value;
        document.getElementsByTagName('textArea')[0].value = textEntered.toUpperCase();
    }
    
}());






// using form events 


(function()
{
    var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // Declare variables
    elForm          = document.getElementById('formSignup');          // Store elements
    elSelectPackage = document.getElementById('package');       // dropdown list
    elPackageHint   = document.getElementById('packageHint');
    elTerms         = document.getElementById('terms');         // checkbox
    elTermsHint     = document.getElementById('termsHint');



    //Create event listeners: submit calls checkTerms(), change calls packageHint()
    elForm.addEventListener('submit', checkTerms, false);

    // change event 
    elSelectPackage.addEventListener('change', packageHint, false);     // checks any change in the dopdownlist or radio buttons



    function packageHint() 
    {                                 // Declare function
        var pack = this.options[this.selectedIndex].value;     // Get selected option
        
        if (pack === 'monthly') // If monthly package
            elPackageHint.innerHTML = 'Save $60 if you pay for 1 year!';//Show this msg
 
        else if(pack === '6-month')                                           // Otherwise
            elPackageHint.innerHTML = 'Good Choice ,save more on annual pack!';            // Show this message
        
        else                                    // Otherwise
            elPackageHint.innerHTML = 'Wise choice!';            // Show this message
        
    }

    function checkTerms(e) 
    {   
        // checked 
        //to confirm the box is checked or not                           

        if ( !elTerms.checked )     // If checkbox is not ticked
        {                                
            elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
            //IMP
            e.preventDefault();                              // Don't submit form
        }
    }


}());





// mutation 


(function()
{
    var elList, addLink, newEl, newText, counter, listItems; // Declare variables

    elList  = document.getElementById('list');               // Get list
    addLink = document.querySelector('a');                   // Get add item button
    counter = document.getElementById('counter');            // Get item counter


    
    addLink.addEventListener('click', addItem, false);       // Click on button

    // event called when the node inserted on the parene mentioned 
    elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated


    function addItem(e) 
    {                                    // Declare function
        e.preventDefault();                                    // Prevent link action
        // stopping default action of a hyperlink
        newEl = document.createElement('li');                  // New <li> element
        newText = document.createTextNode('New list item');    // New text node
        newEl.appendChild(newText);                            // Add text to <li>
        elList.appendChild(newEl);                             // Add <li> to list
    }

    function updateCount() 
    {                                 // Declare function
        listItems = document.getElementsByTagName('li').length;  // Get total of <li>s
        counter.innerHTML = '&nbsp;' +  listItems + '&nbsp;' ;                         // Update counter
    }

}());




// using HTML5 events


(function()
{
    function setup()
    {
        var textInput;
        textInput = document.getElementById('message');

        // creates the focus 
        textInput.focus();
    }

    window.addEventListener('DOMContentLoaded',setup,false);

    window.addEventListener('beforeunload',function()
                                            {
                                                return 'You Have Unsaved Changes';
                                            },false);
}());

