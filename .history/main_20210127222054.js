import string from "./css.js";

let interaction = {
  flag: false,
  ui: {
    mouth: document.querySelector(".bottom-mouth"),
    ball: document.querySelectorAll(".ball"),
    wrapper: document.querySelector(".switch"),
  },
  audio: {
    loaded: new Audio("./src/bulbasaur-loaded.mp3"),
    smile: new Audio("./src/bulbasaur-smile.mp3"),
    normal: new Audio("./src/bulbasaur-normal.mp3"),
  },
  init: (flag) => {
    if (flag) {
      interaction.audio.loaded.play();
      interaction.mouseLeave();
      interaction.ui.wrapper.addEventListener("mouseenter", interaction.smile);
      interaction.ui.wrapper.addEventListener(
        "mouseleave",
        interaction.mouseLeave
      );
    }
  },
  smile: () => {
    interaction.ui.mouth.classList.add("smile");
    interaction.ui.ball[0].style.left = "-9%";
    interaction.ui.ball[0].style.top = "10%";
    interaction.ui.ball[1].style.left = "50%";
    interaction.ui.ball[1].style.top = "10%";
    // console.log("进来了");
    document.removeEventListener("mousemove", interaction.rollEyes);
    interaction.audio.loaded.load();
    interaction.audio.normal.load();
    interaction.audio.smile.play();
    interaction.flag = true;
  },
  mouseLeave: () => {
    document.addEventListener("mousemove", interaction.rollEyes);
    interaction.ui.mouth.classList.remove("smile");
    if (interaction.flag) {
      interaction.audio.smile.load();
      interaction.audio.normal.play();
      interaction.flag = false;
    }
    console.log("离开了");
  },
  rollEyes: (event) => {
    // let centerX = window.innerWidth / 2;
    // let centerY = window.innerHeight / 2;
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    // if (Math.abs(mouseX - centerX) <= 150 && Math.abs(mouseY - centerY) <= 200) {} else {
    let x = (mouseX * 100) / window.innerWidth / 2 - 6;
    let y = (mouseY * 100) / window.innerHeight / 2 - 35;
    // 修正偏差
    //获取鼠标坐标(x,y)
    for (let i = 0; i < interaction.ui.ball.length; i++) {
      interaction.ui.ball[i].style.left = x + "%";
      interaction.ui.ball[i].style.top = y + "%";
    }
  },
};
const player = {
  id: undefined,
  time: 100,
  ui: {
    text: document.querySelector(".text"),
    style: document.querySelector("#style"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  n: 1,
  flag: false,
  init: () => {
    player.ui.text.innerText = string.substr(0, player.n);
    player.ui.style.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
    interaction.init(player.flag);
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      
      return;
    }
    player.ui.text.innerText = string.substr(0, player.n);
    player.ui.style.innerHTML = string.substr(0, player.n);
    player.ui.text.scrollTop = player.ui.text.scrollHeight;
  },
  play: () => {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();


