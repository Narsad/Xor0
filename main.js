const play = document.querySelector('.play');
const content = document.querySelector('.content');

play.addEventListener('click', function(){
    play.classList.add('play-none');
    content.classList.remove('content-none');
    main();
})

function main() {


const name = prompt('hello what is your name?');



alert(name + ' select game mode')

const robot = document.querySelector('#robot');
const man   = document.querySelector('#man');



function toPlayTogether(){
const game   = document.querySelector('.game');
const allBox = document.getElementsByClassName('box');
let   step   = 4;

game.addEventListener('click', function(){
    if(step%2 == 0){

        event.target.innerHTML = "X";

    }
    else{

        event.target.innerHTML = "0";

    }
    
    
    robot();
    gameover();
    
    
})



function gameover(){

   
    
    if(allBox[0].innerHTML=='X' && allBox[1].innerHTML=='X' && allBox[2].innerHTML=='X'){alert('победили X'); location.reload();};
    if(allBox[3].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[5].innerHTML=='X'){alert('победили X'); location.reload();};
    if(allBox[6].innerHTML=='X' && allBox[7].innerHTML=='X' && allBox[8].innerHTML=='X'){alert('победили X'); location.reload();};
    if(allBox[0].innerHTML=='X' && allBox[3].innerHTML=='X' && allBox[6].innerHTML=='X'){alert('победили X'); location.reload();};
    if(allBox[1].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[7].innerHTML=='X'){alert('победили X'); location.reload();};
    if(allBox[2].innerHTML=='X' && allBox[5].innerHTML=='X' && allBox[8].innerHTML=='X'){alert('победили X'); location.reload();};
    if(allBox[0].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[8].innerHTML=='X'){alert('победили X'); location.reload();};
    if(allBox[6].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[2].innerHTML=='X'){alert('победили X'); location.reload();};

    if(allBox[0].innerHTML=='0' && allBox[1].innerHTML=='0' && allBox[2].innerHTML=='0'){alert('победили 0'); location.reload();};
    if(allBox[3].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[5].innerHTML=='0'){alert('победили 0'); location.reload();};
    if(allBox[6].innerHTML=='0' && allBox[7].innerHTML=='0' && allBox[8].innerHTML=='0'){alert('победили 0'); location.reload();};
    if(allBox[0].innerHTML=='0' && allBox[3].innerHTML=='0' && allBox[6].innerHTML=='0'){alert('победили 0'); location.reload();};
    if(allBox[1].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[7].innerHTML=='0'){alert('победили 0'); location.reload();};
    if(allBox[2].innerHTML=='0' && allBox[5].innerHTML=='0' && allBox[8].innerHTML=='0'){alert('победили 0'); location.reload();};
    if(allBox[0].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[8].innerHTML=='0'){alert('победили 0'); location.reload();};
    if(allBox[6].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[2].innerHTML=='0'){alert('победили 0'); location.reload();};

}

function robot(){
 if(allBox[0].innerHTML=='X'||allBox[0].innerHTML=='0'){
     if(allBox[1].innerHTML=='X'||allBox[1].innerHTML=='0'){
         if(allBox[2].innerHTML=='X'||allBox[2].innerHTML=='0'){
             if(allBox[3].innerHTML=='X'||allBox[3].innerHTML=='0'){
                 if(allBox[4].innerHTML=='X'||allBox[4].innerHTML=='0'){
                     if(allBox[5].innerHTML=='X'||allBox[5].innerHTML=='0'){
                         if(allBox[6].innerHTML=='X'||allBox[6].innerHTML=='0'){
                            if( allBox[7].innerHTML=='X'||allBox[7].innerHTML=='0'){
                                if(allBox[8].innerHTML=='X'||allBox[8].innerHTML=='0'){
                                    allBox[8].innerHTML = 'X';
                                }
                            } else{allBox[7].innerHTML ='0';}
                         } else{allBox[6].innerHTML ='0';}
                     } else{allBox[5].innerHTML ='0';}
                 } else{allBox[4].innerHTML ='0';}
             } else{allBox[3].innerHTML ='0';}
         } else{allBox[2].innerHTML ='0';}
    } else{allBox[1].innerHTML ='0';}    
 } else{allBox[0].innerHTML ='0';}
    

    {
        console.log('ss');
    }
}
}




                                //Version 2



function toPlay(){
    const game   = document.querySelector('.game');
    const allBox = document.getElementsByClassName('box');
    let   step   = 4;
    
    game.addEventListener('click', function(){
        if(step%2 == 0){
    
            event.target.innerHTML = "X";
    
        }
        else{
    
            event.target.innerHTML = "0";
    
        }
    
        step = step + 1;
        
    
        gameover();
        
    })
    
    
    function gameover(){
    
       
        
        if(allBox[0].innerHTML=='X' && allBox[1].innerHTML=='X' && allBox[2].innerHTML=='X'){alert('победили X'); location.reload();};
        if(allBox[3].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[5].innerHTML=='X'){alert('победили X'); location.reload();};
        if(allBox[6].innerHTML=='X' && allBox[7].innerHTML=='X' && allBox[8].innerHTML=='X'){alert('победили X'); location.reload();};
        if(allBox[0].innerHTML=='X' && allBox[3].innerHTML=='X' && allBox[6].innerHTML=='X'){alert('победили X'); location.reload();};
        if(allBox[1].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[7].innerHTML=='X'){alert('победили X'); location.reload();};
        if(allBox[2].innerHTML=='X' && allBox[5].innerHTML=='X' && allBox[8].innerHTML=='X'){alert('победили X'); location.reload();};
        if(allBox[0].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[8].innerHTML=='X'){alert('победили X'); location.reload();};
        if(allBox[6].innerHTML=='X' && allBox[4].innerHTML=='X' && allBox[2].innerHTML=='X'){alert('победили X'); location.reload();};
    
        if(allBox[0].innerHTML=='0' && allBox[1].innerHTML=='0' && allBox[2].innerHTML=='0'){alert('победили 0'); location.reload();};
        if(allBox[3].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[5].innerHTML=='0'){alert('победили 0'); location.reload();};
        if(allBox[6].innerHTML=='0' && allBox[7].innerHTML=='0' && allBox[8].innerHTML=='0'){alert('победили 0'); location.reload();};
        if(allBox[0].innerHTML=='0' && allBox[3].innerHTML=='0' && allBox[6].innerHTML=='0'){alert('победили 0'); location.reload();};
        if(allBox[1].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[7].innerHTML=='0'){alert('победили 0'); location.reload();};
        if(allBox[2].innerHTML=='0' && allBox[5].innerHTML=='0' && allBox[8].innerHTML=='0'){alert('победили 0'); location.reload();};
        if(allBox[0].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[8].innerHTML=='0'){alert('победили 0'); location.reload();};
        if(allBox[6].innerHTML=='0' && allBox[4].innerHTML=='0' && allBox[2].innerHTML=='0'){alert('победили 0'); location.reload();};
    
    }}

    man.addEventListener('click', toPlay);
    robot.addEventListener('click', toPlayTogether);

}