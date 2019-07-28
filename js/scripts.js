$(document).ready(function(){
    $("#design").click(function(){
        $("#design").hide();
        $("#anny").show();
    });
    $("#anny").click(function(){
        $("#anny").hide();
        $("#design").show();
    });
    $("#develop").click(function(){
        $("#develop").hide();
        $("#anit").show();
    });
    $("#anit").click(function(){
        $("#anit").hide();
        $("#develop").show();
    });
    $("#product").click(function(){
        $("#anitha").hide();
        $("#product").show();
    });
    $("#anitha").click(function(){
       $("#anitha").hide();
       $("#product").show();
     });
});
// $(document).ready(function(){
//     $("#row").click(function(){
//        alert("thanks")
//     });
// });




//  $(document).ready(function(){ 
//     $("#row_image/work4.jpg").hover(
//       function(){
//         $(this).next().css("visibility","visible");
//        }, function(){
//         $(this).next().css("visibility","hidden");
//        }

//     );

var message=$("input #submit_button").value()
alert("thanks")
