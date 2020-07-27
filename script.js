$('.count').counterUp({
    delay: 30,
    time: 1000
});

$(document).ready(function(){
    $("#myBtn").click(function(){
        var elem = $("#myBtn").text();
        if (elem === "Show More"){
            $("#myBtn").text("Show Less");
            $("#iframe-container").slideDown(2000);
        } else{
          $("#myBtn").text("Show More");
            $("#iframe-container").slideUp(2000);
           
        }
    });

});
