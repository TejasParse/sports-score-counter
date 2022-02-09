let score1=0;
let score2=0;
let winScore;

reset();

function test1() {
    console.log("bc");
}

function add1() {
    score1++;
    let obj = document.querySelector("#score1");
    obj.innerHTML = score1;
    console.log(score1);
    checkWin();
}

function add2() {
    score2++;
    let obj = document.querySelector("#score2");
    obj.innerHTML = score2;
    console.log(score2);
    checkWin();
}

function delete1() {
    score1--;
    score1 = Math.max(score1,0);
    let obj = document.querySelector("#score1");
    obj.innerHTML = score1;
    console.log(score1);
    checkWin();
}

function delete2() {
    score2--;
    score2 = Math.max(score2,0);
    let obj = document.querySelector("#score2");
    obj.innerHTML = score2;
    console.log(score2);
    checkWin();
}

function checkWin()
{
    if(document.querySelector('#points').checked && score1==score2 && score1==winScore-1)
    {
        winScore++;
        document.querySelector("#win").value=winScore;
        return;
    }

    if(score1==winScore)
    {
        if(document.querySelector('#points').checked && (score1-score2==1))
        {
            winScore++;
            document.querySelector("#win").value=winScore;
            return;
        }

        let obj = document.querySelector("#annoucement");
        obj.innerHTML = "Player 1 Won<br>Player 1: "+score1+ "<br>Player 2: "+score2;
        reset();
    }
    if(score2==winScore)
    {
        if(document.querySelector('#points').checked && (score2-score1==1))
        {
            winScore++;
            document.querySelector("#win").value=winScore;
            return;
        }

        let obj = document.querySelector("#annoucement");
        obj.innerHTML = "Player 2 Won<br>Player 1: "+score1+ "<br>Player 2: "+score2;
        reset();
    }

}

function reset()
{
    let obj = document.querySelector("#win");
    obj.disabled= false;
    score1=0;
    score2=0;
    obj = document.querySelector("#score1");
    obj.innerHTML = score1;
    obj = document.querySelector("#score2");
    obj.innerHTML = score2;

    let objs1 = document.querySelectorAll(".updateButton");
    for(let i of objs1)
    {
        i.disabled=true;
    }
    document.querySelector("#points").disabled=false;
    
}

function start()
{

    let obj = document.querySelector("#win");

    if(obj.value==="")
    {
        alert("Please enter a value");
        return;
    }

    winScore=obj.value;
    obj.disabled= true;
    document.querySelector("#points").disabled=true;
    let objs = document.querySelectorAll(".updateButton");
    for(let i of objs)
    {
        i.disabled=false;
    }

    document.querySelector("#annoucement").innerHTML="";

}
