var arr_pattern = [];
var pointer=0;
var checker = 0;
var level = 1;
var count=0;

$(document).keydown(function(){
        if(checker===0){
        $("h1").html("Level"+ level);
        initial_effect();
        checker = 1;
    }
    });


$(".btn").click(function(){
    var b_class = this.classList[1];
    clicking_effect(b_class);
    if(arr_pattern.length===0){
       wrong_input();
    }

    if(pointer!==arr_pattern.length){
        if(b_class!==arr_pattern[pointer]){
            wrong_input();
            count=1;
        }
        else{
            pointer++;
        }
    }
    if((pointer===arr_pattern.length) & (count!==1) &&(arr_pattern.length!==0)){
        setTimeout(function(){
            initial_effect();
            }, 500);
        pointer=0;
        level++;
        $("h1").html("Level"+(level)); 
    }
});


function wrong_input(a){
    $("body").addClass("wrong");
    sounds_effect('wrong');
    $("h1").html("Game Over, Press Any Key to Restart");
    setTimeout(function(){
        $("body").removeClass("wrong");   
        }, 100);
    checker=0;
    arr_pattern = [];
    pointer=0;
    level=1;
}

function clicking_effect(a){
    var active_button = document.querySelector("."+a); 
    sounds_effect(a);
    active_button.classList.add("pressed");
    setTimeout(function(){
    active_button.classList.remove("pressed");
    }, 100);
}

function initial_effect(){
    var r_blink = Math.floor((4*(Math.random())));
    var e_btn = document.querySelectorAll(".btn")[r_blink]
    arr_pattern.push(e_btn.classList[1]);
    sounds_effect(e_btn.classList[1]);
    e_btn.classList.add("i_effect");
    setTimeout(function(){
      e_btn.classList.remove(
        "i_effect");
    }, 100);
}

function sounds_effect(click_class){
    var audio = new Audio('./sounds/'+click_class+".mp3");
    audio.play();
}