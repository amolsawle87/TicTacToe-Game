let player='X';
let gameover=false

function changeTurn(){
    if(player==='O'){
        return('X');
    }
    else{
        return('O');
    }
}

function refresh(){
    return(window.location.reload());


}


function isWin(){
    let boxtext=document.getElementsByClassName('boxtext');
    let winMatrix=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    winMatrix.forEach(element => {
        if((boxtext[element[0]].innerText===boxtext[element[1]].innerText) && (boxtext[element[1]].innerText===boxtext[element[2]].innerText) && (boxtext[element[0]].innerText!=="")){
            document.getElementsByClassName('game-info')[0].innerText='Player ' + boxtext[element[0]].innerText + ' Won';
            gameover=true
        }

        
    });

}
let boxElement=document.getElementsByClassName('box')
Array.from(boxElement).forEach(element => {
    let boxText=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=player;
            player=changeTurn();
            isWin()
            if(!gameover){
                document.getElementsByClassName('game-info')[0].innerText='Player ' + player + ' turn'
            }
            
        }

    })
})