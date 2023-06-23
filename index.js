/*var numberofbuttons = document.querySelectorAll(".drum").length;



for (i=0; i<numberofbuttons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener( "click",function(){
       
        var buttonInnerhtml = this.innerHTML;
         

        makesound(buttonInnerhtml)   
});

    document.addEventListener("keydown",function(event){

        makesound(event.key);

    })

     function makesound(key){

        switch (key) {
            case "w":
                var tom1 = new Audio ("sounds/tom-1.mp3");
                         tom1.play();
            break;
            case "a":
                var tom2 = new Audio ("sounds/tom-2.mp3");
                         tom2.play();
            break;
            case "s":
                var tom3 = new Audio ("sounds/tom-3.mp3");
                         tom3.play();
            break;
            case "d":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                         tom4.play();
            break;
            case "j":
                var crash = new Audio ("sounds/crash.mp3");
                         crash.play();
            break;
            case "k":
                var kickbass = new Audio ("sounds/kick-bass.mp3");
                         kickbass.play();
            break;
            case "l":
                var snare = new Audio ("sounds/snare.mp3");
                         snare.play();
            break;
        
            default:
        }

     }

}*/




$ (".w").click(function(){
    tom1 = new Audio ("sounds/tom-1.mp3");
                         tom1.play();
})

$(".a").click(function(){
    tom2 = new Audio ("sounds/tom-2.mp3");
    tom2.play();
})
$(".s").click(function(){
    tom3 = new Audio ("sounds/tom-3.mp3");
    tom3.play();
})
$ (".d").click(function(){
    tom4 = new Audio ("sounds/tom-4.mp3");
    tom4.play();
})
$ (".j").click(function(){
    crash = new Audio ("sounds/crash.mp3");
    crash.play();
})
$ (".k").click(function(){
    kickbass = new Audio ("sounds/kick-bass.mp3");
    kickbass.play();
})
$ (".l").click(function(){
    snare = new Audio ("sounds/snare.mp3");
    snare.play();
})





$ (document).keypress(function(){
    tom1 = new Audio ("sounds/tom-1.mp3");
                         tom1.play();
})





