
// $(document).ready(function(){
//     $("h1").css("color","red");
// })

// $("h1").css("color","red");
// $("button").css("font-size","5rem")


// $("button").click(function(){
//     $("h1").css("color","purple");
// })


// $("input").keypress(function(event){
//     console.log(event.key);
// })

// $(document).keypress(function(event){
//     var name= event.key;
//     console.log(name)
//     $("h1").text(name);
// })

$("h1").on("mouseover",()=>{
    $("h1").css("color","purple");
})