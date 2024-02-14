let dec = document.querySelector(".btn-1");
let reset = document.querySelector(".btn-2");
let inc = document.querySelector(".btn-3");
let count = 0;

dec.addEventListener("click", ()=> {
    count--;
    document.querySelector("p").innerText = count;
    if(count<0){
        document.querySelector("p").style.color="rgb(186,32,32)";
    }
});

reset.addEventListener("click", ()=> {
    count=0;
    document.querySelector("p").innerText = count;
});

inc.addEventListener("click", ()=> {
    count++;
    document.querySelector("p").innerText = count;
    if(count>0){
        document.querySelector("p").style.color="rgb(32,186,32)";
    }
});