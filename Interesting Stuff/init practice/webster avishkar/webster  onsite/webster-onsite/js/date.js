

var today = Date();
var hr = today.toString();

$('#dispdate').hide();

$('#datebutton').on('click', function()
{
    window.alert(hr);
})

