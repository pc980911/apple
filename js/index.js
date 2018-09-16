let box=document.querySelector(".meaubox");
let close=document.querySelector(".icon-cuohao");
let open=document.querySelector(".icon-hengxian");
console.log(box, close, open);
open.onclick=function () {
    box.style.height="100%";
};
close.onclick=function () {
    animate(box,{height:"0"},200);
};



let adds=document.querySelectorAll("footer ol .jia");
let smalls=document.querySelectorAll(".small");
console.log(adds, smalls);
let Times=0;
for (let i=0;i<adds.length;i++) {
    adds[i].onclick=function () {
        Times++;
        // 判断点击的次数，单击显示，第二次单击隐藏
        if (Times%2!==0) {
            adds[i].style.transform="rotate(45deg)";
            smalls[i].style.display="block"
        }else if(Times%2===0){
            adds[i].style.transform="rotate(90deg)";
            smalls[i].style.display="none"
        }
    }
}