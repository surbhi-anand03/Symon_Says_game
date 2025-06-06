let gameSeq = [];
let userSeq = [];
let btns = ["brown","pink","purple","green"]

let started =  false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("Game Started");
    started = true;
    
    levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    // Random button choose
    let randInd = Math.floor(Math.random()*3);
    let ranColour = btns[randInd];
    let randBtn = document.querySelector(`.${ranColour}`)
    gameSeq.push(ranColour);
    console.log(gameSeq)
    gameFlash(randBtn);

}

function check(idx){
    console.log("Current level:",level)
    // let idx = level-1;
    if (userSeq[idx]===gameSeq[idx]){
        // console.log("same val.")
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }

    }
    else{
        h2.innerHTML = `Game Over! You have scored <b>${level}</b>. <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn)

    userColour = btn.getAttribute("id")
    userSeq.push(userColour)

    check(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn")
for (bton of allBtn){
    bton.addEventListener("click", btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}