let gameseq=[];
let userseq=[];
let h2=document.querySelector("h2")
let btns=["yellow","green","red","purple"]
let started=false;
let level=0;

document.addEventListener("keydown",function(){
    if (started===false){
        console.log("Game Started");
        started=true;
        levelup();
    }
});

let gameflash=function(btn){
    console.log("functioncalled");
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

let levelup=function(){
    userseq=[];
    level++;
    h2.innerText=(`Level ${level}`)
    let randomindex=Math.floor(Math.random()*4);
    let randomcolor= btns[randomindex];
    let randombtn=document.querySelector(`.${randomcolor}`);
    // console.log(randomindex);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);
}

let userflash=function(btn){
    console.log("functioncalled");
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
        },300);
}

let check=function(inx){
    console.log("check function called");
    if (userseq[inx]===gameseq[inx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelup(),1000);
        }
    }
    else{
        h2.innerHTML=`Game Over, Your score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white"} , 1000)
        reset();
        
    }
}
function btnpress(){
        // jo kaam btn press karne pr hona chaiye wo yaha likhna h
        let btn=this ;
        userflash(btn);
        let usercolor=btn.getAttribute("id");
        userseq.push(usercolor);
        // console.log(userseq);
        check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (i of allbtns) {
    i.addEventListener("click", btnpress);
}

let reset=function(){
    started=false
    gameseq=[]
    userseq=[]
    level=0
}