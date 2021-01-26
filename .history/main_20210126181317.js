let mouth = document.querySelector(".bottom-mouth");
let ball = document.querySelectorAll(".ball");
let wrapper = document.querySelector(".bulbasaurWrapper");
let loadedSource = "./src/bulbasaur-loaded.mp3";
let smileSource = "./src/bulbasaur-smile.mp3";
let normalSource = "./src/bulbasaur-normal.mp3";

let loaded = new Audio(loadedSource);
let smile = new Audio(smileSource);
let normal = new Audio(normalSource);

let flag = false;

// window.addEventListener('load', doSomething, false)

window.onload = () => {
  loaded.play()
};
// wrapper.addEventListener('mouseenter',(e)=>{smileReady(e)})
// document.addEventListener('mousemove',rollEyes)
mouseLeave()

wrapper.addEventListener('mouseenter',smileReady)
wrapper.addEventListener('mouseleave',mouseLeave)

function smileReady (){
  mouth.classList.add("smile");
  ball[0].style.left = "-9%";
  ball[0].style.top = "10%";
  ball[1].style.left = "50%";
  ball[1].style.top = "10%";
  console.log("进来了");
  document.removeEventListener('mousemove',rollEyes)
  loaded.load()
  normal.load()
  smile.play();
  flag = true
  
}
  function mouseLeave(){
    document.addEventListener('mousemove',rollEyes)
    mouth.classList.remove("smile");
    if(flag){
      smile.load()
      normal.play()
      flag = false
    }
    
  }
  function rollEyes(event) {

    // let centerX = window.innerWidth / 2;
    // let centerY = window.innerHeight / 2;
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    // if (Math.abs(mouseX - centerX) <= 150 && Math.abs(mouseY - centerY) <= 200) {} else {
    let x = (mouseX * 100) / window.innerWidth / 2 - 6;
    let y = (mouseY * 100) / window.innerHeight / 2 - 35;
    // 修正偏差
    //获取鼠标坐标(x,y)
    for (let i = 0; i < ball.length; i++) {
      ball[i].style.left = x + "%";
      ball[i].style.top = y + "%";
    }
  };

