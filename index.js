let gameseq=[];
let userseq=[];
        

let started=false;
let level=0;

let h4=document.querySelector("h4");

let btns=document.querySelectorAll(".btn");

let allbtn=document.querySelector(".btn-container")

// nextlevel();

document.addEventListener("keypress",()=>
{
    if(started==false)
    {
        
        console.log("pressed");
        started=true;
        nextlevel();
    }
    
})



function nextlevel()
{
    userseq=[];
    level++;
    h4.innerText=`level ${level}`;

    let num=Math.floor(Math.random()*4);            // 0 to 3 as accessing btns through index 
    console.log(num);
    console.log(btns);

    let btn=btns[num];           //button to be flash 

    console.log(btn);
    gameseq.push(btn);
    console.log("game sequence is",gameseq);
    flash(btn);


}

function flash(btn)
{
    let currentcolor=window.getComputedStyle(btn).backgroundColor;
    btn.style.backgroundColor="White";

    setTimeout(()=>
    {
        btn.style.backgroundColor=`${currentcolor}`;
        console.log("change");
    },300);

    

}

allbtn.addEventListener("click",(e)=>
{
    let userclick=e.target;
    userseq.push(userclick);
    console.log("user sequence is ",userseq);
    flash(userclick);
    check();
})


function check()
{
    for(let i=0;i<userseq.length;i++)           //checking until user clicks so no array out of bound 
    {
        if (gameseq[i] !== userseq[i])
        {
            h4.innerText=`You loss and your score was ${level}`;
            reset();
            return;
        } 

    }

    if (userseq.length === gameseq.length)           //when user complete whole correct sequence only the we are calling nextlevel
    {
        setTimeout(()=>
        {
            nextlevel();

        },800);
    }
     
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}



