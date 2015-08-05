$(document).ready(function(){

var fromCode = getParameterByName('fromcode');
    
    alert(fromCode);
    
$.ajax({
     url:"http://localhost/phpapi/Get_ToList.php?fromcode=" + fromCode,
     dataType: 'jsonp', 
     success:function(json){
         // do stuff with json 
          $.each(json, function() {
         
         $('#ddToList select').append($('<option>', { 
                value: this['ToCode'],
                text : this['ToName']
            }));
         
    });
     },
     error:function(){
         alert("Error");
     },
});
    
    $(".nextBtn").click(function(){

        alert($('#ddToList select :selected').val());
        
        //ToCode = $('#ddToList select :selected').val();
        
       // location.href = 'http://202.75.56.57/~amirid/BusAPI/Get_ToList.php?fromcode=' + fromCode;
    
    
    });

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
 
    
});