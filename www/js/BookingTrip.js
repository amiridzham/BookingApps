$(document).ready(function () {

    var fromCode = getParameterByName('fromcode');
    var toCode = getParameterByName('tocode');
    var departDate = getParameterByName('departdate');

    console.log(fromCode + "-" + toCode + "-" + departDate);

    $.ajax({
        url: "http://202.75.56.57/~amirid/BusAPI/Get_TripList.php?fromcode=" + fromCode + "&tocode=" + toCode + "&departdate=" + departDate,
        dataType: 'text',
        success: function (text) {

            console.log(text);

            // do stuff with json 
            ('div#txtBookingTrip').text(text);
        },
        error: function () {
            alert("Error");
        },
    });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }


});