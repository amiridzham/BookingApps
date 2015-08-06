$(document).ready(function () {

    var fromCode = getParameterByName('fromcode');

    $.ajax({
        url: "http://202.75.56.57/~amirid/BusAPI/Get_ToList.php?fromcode=" + fromCode,
        dataType: 'jsonp',
        success: function (json) {
            // do stuff with json 
            $.each(json, function () {

                $('#ddToList select').append($('<option>', {
                    value: this['ToCode'],
                    text: this['ToName']
                }));

            });
        },
        error: function () {
            alert("Error");
        },
    });

    $(".nextBtn").click(function () {
        
        var dateSelect = $('div#datepicker').datepicker('getDate');
        dateSelect = $.datepicker.formatDate("yy-mm-dd", dateSelect);
        var toSelect = $('#ddToList select :selected').val();
        var fromSelect = fromCode;

        console.log(fromSelect + "-" + toSelect + "-" + dateSelect);


        location.href = 'TripList.html?fromcode=' + fromSelect + "&tocode=" + toSelect + "&departdate=" + dateSelect;


    });

    $("#datepicker").datepicker({ dateFormat: 'yyyy-mm-dd' });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }


});