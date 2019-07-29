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
 $(document).ready(function(){
    
    $("#submit_button").click(function(){
        alert("Thanks for reaching out to us!")
     });
 });
// var message=$("input #submit_button").value()
// alert("Thanks for reaching out to us!")
