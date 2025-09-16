const increasebtn=document.querySelector('#increaseBTN');
const decreasebtn=document.querySelector('#decreaseBTN');
const resetbtn=document.querySelector('#restBTN');
const countlabel=document.querySelector("#countlabel");
let count=0;

increasebtn.onclick=()=>{
    count++
    countlabel.innerText=count;
}

decreasebtn.onclick=()=>{
    count--
    countlabel.innerText=count;
}
resetbtn.onclick=()=>{
    count=0
    countlabel.innerText=count;
}