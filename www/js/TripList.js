$(document).ready(function () {

    var fromCode = getParameterByName('fromcode');
    var toCode = getParameterByName('tocode');
    var departDate = getParameterByName('departdate');

    console.log(fromCode + "-" + toCode + "-" + departDate);

    $.ajax({
        url: "http://202.75.56.57/~amirid/BusAPI/Get_TripList.php?fromcode=" + fromCode + "&tocode=" + toCode + "&departdate=" + departDate,
        dataType: 'jsonp',
        success: function (json) {

            console.log(json);

            // do stuff with json 
            $.each(json, function () {
                
                                $('#ddTripList select').append($('<option>', {
                                    value: this['TripID'],
                                    //text: this['TripName']
                                    text: "<<" + this['TripName'] + ">> Time: " + this['DepartTime'] + "  Seat: " + this['AvailableSeat'] + "  Price: " + this['Price']
                                    
            }));

    });
},
error: function () {
    alert("Error");
},
});

$(".nextBtn").click(function () {

    var dateSelect = $('div#datepicker').datepicker('getDate');
    var toSelect = $('#ddToList select :selected').val();
    var fromSelect = fromCode;

    console.log(fromSelect + "-" + toSelect + "-" + dateSelect);


    location.href = 'TripList.html?fromcode=' + fromSelect + "&tocode=" + toSelect + "&departdate=" + dateSelect;


});

$("#datepicker").datepicker({
    dateFormat: 'yyyy-mm-dd'
});

function getParameterByName(name) {
name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


});