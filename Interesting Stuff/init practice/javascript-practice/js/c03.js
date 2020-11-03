var msg = 'Sign up to recieve our newsletter for 10% off !';

function update_message()
{
    var el_msg = document.getElementById('w_msg');
    el_msg.textContent = msg;
}

update_message();





// constructed object by literal syntax
var hotel = 
{
    name: 'Taj',
    rooms: 40,
    booked: 28,
    check_avlbty : function(avl, booked) 
                    {
                        return (avl- booked);
                    }
}


var el_hotel_name = document.getElementById('name');
el_hotel_name.textContent = hotel.name;                 // dot operator

var el_t_rooms = document.getElementById('Rooms');
el_t_rooms.textContent = hotel['rooms'];      

var el_rooms_free = document.getElementById('avlbl');
                                                // passing hte args to the function , since the function needs 2 args 
el_rooms_free.textContent = hotel.check_avlbty(hotel.rooms, hotel.booked);







// creating object by constructor syntax

var HOTEL = new Object();

HOTEL.Name = 'Park';
HOTEL.Rooms = 120;
HOTEL.Booked = 56;
HOTEL.Check_Avlbty = function() 
                    {
                        return (this.Rooms - this.Booked);
                    };

var el_HOTEL_Name = document.getElementById('name2');
el_HOTEL_Name.textContent = HOTEL.Name;

var el_T_Rooms = document.getElementById('rooms2');
el_T_Rooms.textContent = HOTEL['Rooms'];      

var el_Rooms_free = document.getElementById('avlbl2');
                            // no args function 
el_Rooms_free.textContent = HOTEL.Check_Avlbty();






// using constructor Notations, works as template for objects of the samw type 
function Create_hotel(name, rooms, booked) 
{ 
    this.name = name; 
    this.rooms = rooms; 
    this.booked = booked; 
    this.checkAvailability = function() 
                            {
                                return this.rooms - this.booked; 
                            };
} 

var quayHotel = new Create_hotel('Bloom', 120, 77);
var parkHotel = new Create_hotel('Quay', 40, 25); 

var details1 = quayHotel.name + ' : '; 
details1 += quayHotel.checkAvailability() + ' rooms only '; 
var elHotel1 = document.getElementById('hotel1'); 
elHotel1.textContent = details1; 

var details2 = parkHotel.name +  ' : '; 
details2 += parkHotel.checkAvailability() + ' rooms only '; 
var elHotel2 = document.getElementById('hotel2'); 
elHotel2.textContent = details2;













// the four types of function 










// normal function 
function AREA(width,height)
{
    return width*height;
}


// self calling funciton 
var area = 
(function(width, height)
{
    return width*height;

})(2,11);



// function is stored in the object Area 
Area = function(width, height)
        {
            return width*height;
        }

var A = (width, height) =>  (width*height);

var el_area = document.getElementById('area');
el_area.innerHTML = '<h3> area: ' + Area(4,5) + '<br> Area: ' + area + '<br> A : ' + A(12,5) + '<br> AREA: ' + AREA(80,5) + '</h3>';
