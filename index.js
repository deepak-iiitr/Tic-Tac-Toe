console.log("Tic Tac Toe");
console.log("deepak Gupta");
let music=new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let isgameover=false;
let isTie=false
let turn="X";
let boxes=document.getElementsByClassName("box");        // boxes is an array and it has all box class variable.---> very imp in js
let game_won=new Audio("game_won.wav");
const changeTurn=()=>{    // this change turn from x to o and o to x;
    return turn === "X"?"O":"X";
}
// const checkWin = ()=>{
    // if(boxes[0]==="X" && boxes[1]==="X" && boxes[2]==="X"){
    //     document.querySelector('.info').textContent="X won the game!!";
    //     gameover.play();

    // }
    // else if(boxes[0+3]==="X" && boxes[1+3]==="X" && boxes[2+3]==="X"){
    //     document.querySelector('.info').textContent="X won the game!!";
    //     gameover.play();

    // }
    // else if(boxes[0+3+3]==="X" && boxes[1+3+3]==="X" && boxes[2+3+3]==="X"){
    //     document.querySelector('.info').textContent="X won the game!!";
    //     gameover.play();

    // }
    // else if(boxes[0]==="X" && boxes[3]==="X" && boxes[6]==="X"){
    //     document.querySelector('.info').textContent="X won the game!!";
    //     gameover.play();

    // }
    // else if(boxes[0+1]==="X" && boxes[3+1]==="X" && boxes[6+1]==="X"){
    //     document.querySelector('.info').textContent="X won the game!!";
    //     gameover.play();
        
    // }
    //     gameover.play();
    // }or('.info').te
    //     gameover.play();

    // }
    // else if(boxes[0]==="O" && boxes[3]==="O" && boxes[6]==="O"){
    //     document.querySelector('.info').textContent="O won the game!!";
    //     gameover.play();

    // }
    // else if(boxes[0+1]==="O" && boxes[3+1]==="O" && boxes[6+1]==="O"){
    //     document.querySelector('.info').textContent="O won the game!!";
    //     gameover.play();
        
    // }
    // else if(boxes[0+2]==="O" && boxes[3+2]==="O" && boxes[6+2]==="O"){
    //     document.querySelector('.info').textContent="O won the game!!";
    //     gameover.play();
        
    // }
    // else if(boxes[0]==="O" && boxes[4]==="O" && boxes[8]==="O"){
    //     document.querySelector('.info').textContent="O won the game!!";
    //     gameover.play();

    // }
    // else if(boxes[2]==="O" && boxes[4]==="O" && boxes[6]==="O"){
    //     document.querySelector('.info').textContent="O won the game!!";
    //     gameover.play();
        
    // }

// }

// const checkTie=()=>{
//     let boxtext_s=document.getElementsByClassName('boxtext');
//     boxtext_s.forEach(e=>{
//         if(e[0].innerText===""){
//             return false;
//         }
//     })
//     return true;
// }
const checkTie=()=>{
    console.log("deepak1");
    let toe=true;
    let boxtext_s=document.getElementsByClassName('boxtext');
    let tie=[0,1,2,3,4,5,6,7,8];
    tie.forEach(ele=>{
        if(boxtext_s[ele]===""){
            toe=false;
        }
    })
    if(toe){
        return false;
    }
    else{
        return true;
    }

}
const checkWin=()=>{      // this check win of any number 
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[1]].innerText===boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==""){
            document.querySelector('.info').textContent=boxtexts[e[0]].innerText + " won the game!!!";
            isgameover=true;
            game_won.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="20vw";
            // document.querySelector('.info').style.color=green;
        }
    })
}
// music.play();
console.log(boxes);
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            // checkTie();
            console.log(checkTie());
            let is_Tie=checkTie();
            if(is_Tie){
                console.log("deepak");
                console.log(is_Tie);
                isgameover=true;
                document.querySelector('.info').textContent="TIE";
            }
            if(!isgameover){
                document.querySelector('.info').textContent="Turn for " + turn;
            }
        }
    })
})

document.querySelector('#reset').addEventListener('click',()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isgameover=false;
    document.querySelector('.info').textContent="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0vw";
})
