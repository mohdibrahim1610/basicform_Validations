$(document).ready(function(){
$("#register").validate({
    rules:{
        name:{
            required:true,
                       
        },
        adharnumber:{
            required:true,
                
            
        },
        phonenumber:{
            required:true,        
        },
        stringLength:{
            max:10,
            maxLength:10,
        },
        pannumber:{
            required:true,
        },
        email:{
            required:true,
            email:true,
        },
        home:{
            required:true,
        },
        
    },
 /*Required name Messsages
 */messages:{
    
        adharnumber:{
            required:" Aadhar Nuber Required",
        },
        name:{
            required:"Name Required ",
        },
        phonenumber:{
            required:"PhoneNumber Required ",
        },
        pannumber:{
            required:"Pan Required ",
        },
        email:{
            required:"Email Required ",
        },
        home:{
            required:"All Feild's Required ",
        },
        
},
})
})

/*Name check if need only Letters*/
$(document).ready(function(){
    $("#name").keydown(function(event){
        var inputValue = event.which;
        var input=$('#name').val()
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
    });
   
    $('#name').focusout(function(){
        var input=$('#name').val()
        if(input!==''){
            $("#result2").css('display','none');            
              return true;
        }
        else{
            $("#result2").html("Pleae Enter Name");
            $("#result2 ").css("color", "red");
        }
    })
});

/* Limiting key*/
var maxLength = 15;
$('textareas').keyup(function() {
  var textlen = maxLength - $(this).val().length;
});



/*Only Number*/
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return true;
    return true ;
}
/*Aadhar Number*/
/*function aadharnumber()*/
$(document).ready(function(){
    $("#adharnumber").focusout(function(){
        {
        var aadhar=document.getElementById("adharnumber").value;
        /*var cardtw= /^\d{12}$/;
        var cardsix= /^\d{16}$/;*/
        var adharRex=/^([2-9]){1}([0-9]){11}$/
         if(aadhar!==''){       
        if(aadhar.length ==12 ){  
        if(aadhar.match(adharRex)){
                    $("#result1").css('display','none');
                    return true;
                    } 
        else{
                    $("#result1").html("Not Valid  Number ");
                    $("#result1").css("color", "red");
                    return true;
                    }
        }
        else{
                    $("#result1").html("Not Valid  Number of Input");
                    $("#result1").css("color", "red");
                    return true;
                    }
        }        
        else{
            $("#result1").html("PLease Enter Valid  Number of Input");
            $("#result1").css("color", "red");
            return true;
            }
        
        }
        });
});
        
/*Phone Number*/
$(document).ready(function(){
    $("#phonenumber").focusout(function(){
        var input=$("#phonenumber").val();
        var Phnum=/^([6-9]){1}([0-9]){9}$/
        if(input!==''){
        if(input.length ==10){
            if(input.match(Phnum)){
                $("#result").css('display','none');
            return true    
            }
            else{
                $("#result").html("InCorrect Number");
                $("#result").css("color", "blue");
                
            }  
        }
          else{
            $("#result").html("Only 10 Phone Number");
            $("#result").css("color", "red");
            
          }}
    
          else{
            $("#result").html(" Please Enter 10 Phone Number");
            $("#result").css("color", "red");
            
          }
    
        });
});

/*Pan Number*/
$(document).ready(function () {
    $('#pannumber').focusout(function () {
        var txtPANCard = $('#pannumber').toUpperCase().val();
        var regex = /^([A-Z a-z]){3}([a|b|c|f|g|h|j|l|p|t]){1}([a-z]){1}([0-9]){4}([A-Z a-z]){1}$/;
        if(txtPANCard !== '') {

        if (txtPANCard.length == 10) {
            if (txtPANCard.match(regex)) {
                $("#divPanCard").css('display','none');
                return false
            }
            else {
                $("#divPanCard").css("color", "red");
                $("#divPanCard").html("Invalid Pan Number");
            }
             
        }
        else {
            $("#divPanCard").css("color", "red");
            $("#divPanCard").html("Enter valid PAN card Number");
        }}
        else {
            $("#divPanCard").css("color", "red");
            $("#divPanCard").html("Enter Required PAN card Number");
        }
         
    });
});



$(document).ready(function(){
    $('#validate').submit(function(){
       alert("its working")
    })
})
//Email checking
$(function(){
    $('#email').focusout(function(){
        var emails=$('#email').val();
        var regex= /^([\w-\.]+@([\w-]+\.)+.+[com|net|in|au|org|gov]{2,3})?$/;
        if(emails!==''){
            if(regex.test(emails)){
                $("#emailname").html(" ");

                return false
            }
            else{
                
                $("#emailname").css("color", "red");
                $("#emailname").html("Enter  valid email Address");
            }
         return true   
        }else{
            
            $("#emailname").css("color", "red");
            $("#emailname").html("Enter Required Email feild");
            return true
        }
    });
});
