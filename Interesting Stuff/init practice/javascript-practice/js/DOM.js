// groceries list


// changing attribute, selection by Id 
var elsix = document.getElementById('six');
elsix.className = 'normal';


 // by class name 
var elcool = document.getElementsByClassName('cool');   
// elhot is an object of tYPE COLLECTION  not array, 


//but they have same propertiies and methods as arrays
elcool[0].textContent = 'VINEGAR';
elcool[1].textContent = 'SAUCE(soya)';



// by tag name
var elhead = document.getElementsByTagName('h1');
var elli = document.getElementsByTagName('li'); 
elhead[0].textContent = 'Shopping List';



// query selector - elements are selected according css selections 


// reacts according to updated values
var eln = document.querySelectorAll('li.normal');  // returns a collection sismilar to array  
eln[0].textContent = 'PINEAPPLE';
eln[1].className = 'hot';
eln[2].textContent = 'BLUEberries';    // class was changed above   




// query selector seletcs the first instance of the 
var el_ul  = document.querySelector('li.hot');
el_ul.className = 'cool';


// works according to updated 
var el_li = document.querySelectorAll('li.hot');
var n = el_li.length;

if( n > 0)
{
    for( var i = 0 ; i < n ; i++ )
    {
        if( el_li[i].className == 'hot' && i>n/2 )
            el_li[i].className = 'normal';
    }
}




// selects 1st element with class normal  
var el_nor1  = document.querySelector('li.normal');
el_nor1.className = 'hot';
// updates Pineapple - hot
var el_nor2  = document.querySelector('li.normal');
el_nor2.className = 'hot';
// updates blueberries - hot






// garment list
var start_item = document.getElementById('TWO');
var next_item = start_item.nextSibling;
var prev_item = start_item.previousSibling;


next_item.textContent = 'APRON';
prev_item.textContent = 'SOCKS';


var par = document.getElementsByTagName('ul')[1];
var fc = par.firstChild;
var lc = par.lastChild;
// another way to change class attribute
fc.setAttribute('class' , 'buyed');
lc.setAttribute('class' , 'buyed');





// working with text nodes
var textone = document.getElementById('one');
textone.innerHTML = 'Six ' + textone.innerHTML;




//nodeValue 




textone.lastChild.nodeValue = 'Oranges';
textone.firstChild.nextSibling.firstChild.nodeValue = 'Ripe ';
// 'one'      'six'     <em>      textnode    value            
// changing the node value without any variable
document.getElementById('two').firstChild.nodeValue = 'Walnuts'; 


// changing a part of node value
// P.S. replace()
var itemseven = document.getElementById('seven');   
var textseven = itemseven.firstChild.nodeValue; 


// replace in nodevalue 
textseven = textseven.replace('soya' , 'Tomato');       // enter the updated string , nodeValue may have been changed before 


itemseven.firstChild.nodeValue = textseven;                 



//innerHTML



// updating the text and markup using innerHTML
var fifth_item = document.getElementById('five');
var f_content = fifth_item.innerHTML;



// the content becomes a hyperlink , escape seq is used for " "


fifth_item.innerHTML = '<a href=\".....actual url......\">' + f_content + '</a>' ; 





// adding anew node DOM manipulation



// the ending node is a text node , so it need to be created 

var newEl = document.createElement('li');
// new li node
var newText = document.createTextNode('Chinos');
// new text node
newEl.appendChild(newText);
// make text node the child of new li
var position = document.getElementsByTagName('ul')[1];          // the second list 
// find where li needs to be added
position.appendChild(newEl);
// make li child of position


position.lastChild.className = 'garment';



// adding another element

var newEl2 = document.createElement('li');
// new li node
var newText2 = document.createTextNode('RaspBerries');
// new text node
newEl2.appendChild(newText2);
// make text node the child of new li
var position2 = document.getElementsByTagName('ul')[0];
// find where li needs to be added
position2.appendChild(newEl2);
// make li child of position
position2.lastChild.className = 'normal';




// removing element chopstics 




var removeEl = document.getElementById('eight');
// storing the node to be removed
var par_removeEl = removeEl.parentNode;
// storing parent of the node 
par_removeEl.removeChild(removeEl);
// removing 





//checking if the attribute exists in the HTML



if(fifth_item.hasAttribute('class'))
{
    fifth_item.setAttribute('class', 'normal');
    var attr = fifth_item.getAttribute('class');
    var attrid = fifth_item.getAttribute('id');
    var fifth_text = fifth_item.textContent;
    var el_com = document.getElementById('comments');  // remove comment from NEXT LINE
  //  el_com.textContent = 'list 1 : fifth item has class attribute ' + attr  + ' and id  attribute ' + attrid + ' and has text node with ' + fifth_text;
}





// rmoving an attribute
var sixth_item = document.getElementById('six');
if( sixth_item.hasAttribute('class') )
{
    sixth_item.removeAttribute('class');
}
sixth_item.className = 'noclass';





// example


(function(){

    var list = document.getElementsByTagName('ul')[2];
    // new item at the end of the list
    var new_item_last = document.createElement('li');
    var new_text_last = document.createTextNode('Cream');
    new_item_last.appendChild(new_text_last);
    list.appendChild(new_item_last);

    // new item at the end of list 
    var new_item_first = document.createElement('li');
    var new_text_first = document.createTextNode('Tropicana');
    new_item_first.appendChild(new_text_first);



    //IMPORTANT
    // insert before , (  inserted item  ,  the item before the insertion is made )
    list.insertBefore(new_item_first, list.firstChild);


    
    var listitems = document.querySelectorAll('li');
    // add class to all of them
    var i;
    for( i = 12; i<listitems.length; i++ )// satarting from indext 12 since some are covered up in garmnt and groceries also 
    {
        listitems[i].className = 'snacks';
    }

    // add no of items in the list to the heading 
    var heading = document.querySelectorAll('h2')[2];
    var headingText = heading.textContent;
    var total_items = 0;                                            // counting list items 
    for( i =0; i<listitems.length; i++ )
    {
        attr = listitems[i].getAttribute('class');
        if( attr == 'snacks' )
        {
            total_items++;
        }
    }
    var new_heading = headingText + '<span>'+ '&nbsp;'+ total_items + '&nbsp;' +'</span>' ; 
    heading.innerHTML = new_heading;

}());




(function(){
    
    var listitems = document.querySelectorAll('li');
    var heading = document.querySelectorAll('h2')[0];
    var headingText = heading.textContent;
    var total_items = 0;
    for( i =0; i<listitems.length; i++ )                    // counting list items 
    {
        attr = listitems[i].getAttribute('class');
        if( attr == 'cool' || attr == 'normal' || attr == 'hot' )
        {
            total_items++;
        }
    }
    var new_heading = headingText + ' '+ '<span>'+ '&nbsp;'+ total_items + '&nbsp;' +'</span>' ; 
    heading.innerHTML = new_heading;

}());



(function()
{

    var listitems = document.querySelectorAll('li');
    var heading = document.querySelectorAll('h2')[1];
    var headingText = heading.textContent;
    var total_items = 0;                                    // another method to count list items
    for( i =0; i<listitems.length; i++ )
    {
        if( listitems[i].className == 'garment' || listitems[i].className == 'buyed')
        {
            total_items++;
        }
    }
    var new_heading = headingText + ' '+ '<span>'+ '&nbsp;'+ total_items + '&nbsp;' +'</span>' ; 
    heading.innerHTML = new_heading;

}());




function showElement() {
    alert(this.innerHTML);
  }

  var el;
  
  el = document.getElementById("l1");  
  el.addEventListener('click', showElement, false);
  
  el = document.getElementById("two");
  el.addEventListener('click', showElement, false);

  el = document.getElementById("five");
  el.addEventListener('click', showElement, false);
  
  el = document.getElementById("l2");
  el.addEventListener('click', showElement, true);
  
  el = document.getElementById("ONE");
  el.addEventListener('click', showElement, true);
  
