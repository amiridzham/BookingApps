$(document).ready(function(){

$.ajax({
     url:"http://localhost/phpapi/Get_FromList.php",
     dataType: 'jsonp', 
     success:function(json){
         // do stuff with json 
          $.each(json, function() {
         
         $('#ddFromList select').append($('<option>', { 
                value: this['FromCode'],
                text : this['FromName']
            }));
         
    });
     },
     error:function(){
         alert("Error");
     },
});
    
    $(".nextBtn").click(function(){

        //alert($('#ddFromList select :selected').val());
        
        fromCode = $('#ddFromList select :selected').val();
        
        location.href = 'ToList.html?fromcode=' + fromCode;
    
    
    });
    
});