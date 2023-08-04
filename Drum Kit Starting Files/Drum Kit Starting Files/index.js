var button= document.getElementsByClassName(".drum");

for( var i=0 ; i < button.length ; i++){

    button[i].addEventListener("click",function(){
        alert("have been click");
    });
}