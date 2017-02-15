$(document).ready(function(){
    $("#submit").click(function(){
        var password = $("input").val()
        
        if (password === 'hsfirox'){
            $("body").append("Correct");
        } else {
            $("body").append("Incorrect, try again");
        }
    })
})