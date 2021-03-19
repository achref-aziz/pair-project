$(document).ready(function () {

    
    var bestscore = localStorage.getItem("bestscore") || 0;
    
    

    $("#start").click(function () {
         var show =-1;
         
        var count = 0;
       
        $("h2").text("");
        $("h3").text("");
        function myTimer1() {
            show++
            
            $("td div").hide()
            var randomItem = Math.floor(Math.random() * 9);
            console.log(randomItem);
            $("#" + randomItem).show();
            $("#" + randomItem).fadeOut("slow");
            $("#" + randomItem).unbind().click(function () {
                count = count + 1;
               
            })
        }
        var set=setInterval(myTimer1,1000)
        setTimeout(function () {
             clearInterval(set);
             $("td div").show();
             if(parseInt(localStorage.getItem("bestscore"))<count){
                localStorage.setItem("bestscore",count);
             }
             var c= count.toString();
             var t=show.toString();
             if (c > bestscore) {
                 bestscore = c;
                 localStorage.setItem("bestscore",c);
             }
             $("h2").text("SCORE:  " + c +"/"+t);
             $("h3").text("BESTSCORE:  " +  bestscore +"/"+t);
         }, 10000);
         
    })


})


