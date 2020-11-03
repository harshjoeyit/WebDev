// immediately invoke function 

(function(){
    // create hotel object;
    // using literal syntax
    var hotel = {
                    name : 'Park',
                    roomRate : 240,
                    discount : 15,
                    offerPrice : function() 
                    {
                        var offerRate = this.roomRate *( ( 100 - this.discount)/100 );
                        return offerRate;
                    }
                }

    var hotelName,roomRate , specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();



    var expiryMsg;
    var today;
    var elEnds;



    function offerExpires(today) {

        var weekFromToday, day, date, month, year, monthNames,dayNames;

        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        /* important method to get the date of the time after which we want like 
        1 year 1 month 28 days or 7 days
        */
        dayNames =['Sunday' , 'Monday' , 'Tuesday ' , 'Wednesday ', 'Thursday' ,' Friday', 'Saturday' ];
        monthNames = ['January', ' February', 'March', 'Apri l ', 'May ' , 'June ' ,  'July' , 'August ' , 'September' , 'October' , 'November' , 'December'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = day +'<br /> (' + date + ' ' + month + ' ' + year +  ')' ;
        return expiryMsg;

    }

    var today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

}());





// checking if an element id is present in the html filw or not
if(document.getElementById('test'))
{
    var show = document.getElementById('test');
    show.textContent = 'an element with id = \'test\' is present in the html file';
}
else
{
    document.write('not present');
}




//loop
var array = ['Hema','Rekha','Jaya','Sushma'];
var advert = '<p>';

for(var i = 0; i<array.length; i++ )
{
    if( i == array.length - 1 )
        advert += 'aur '
    advert += array[i] + ' ';
}
advert += '<h3> Sabki Pasand <h2> NIRMA </h2> </h3>' + '</p>';

var el_advert = document.getElementById('ad');
el_advert.innerHTML = advert;
