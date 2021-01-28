const string = `
.bulbasaurWrapper{
	width: 277px;
	height: 384px;
	display: flex;
	justify-content: center;
	align-items: center;
}
#bulbasaur {
	position: relative;
    position: absolute;
	margin-left: 5%;
}
/*先画一个妙蛙种子的脸*/
#bulbasaur > .bulb1 {
	width: 50px;
	height: 120px;
	background: #70bfb9;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	border-left: 1px solid #121f1e;
}

#bulbasaur > .bulb2 {
	width: 187px;
	height: 120px;
	background: #70bfb9;
	display: inline-block;
	position: relative;
	left: -30px;
}

#bulbasaur > .bulb3 {
	width: 50px;
	height: 120px;
	background: #70bfb9;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	left: -60px;
	border-right: 1px solid #121f1e;
}

#bulbasaur > .bulb4 {
	width: 200px;
	height: 70px;
	background: #70bfb9;
	border-radius: 50%;
	position: relative;
	top: -47px;
	left: 17px;
    border-bottom: 1px solid #121f1e;
    position: relative;
    z-index: -1;
}

#bulbasaur > .bulb5 {
	width: 70px;
	height: 70px;
	background: #70bfb9;
	border-radius: 20%;
	display: inline-block;
	position: relative;
	bottom: -50px;
	-webkit-transform: skewX(20deg) rotate(10deg);
	-moz-transform: skewX(20deg) rotate(10deg);
	-o-transform: skewX(20deg) rotate(10deg);
	-ms-transform: skewX(20deg) rotate(10deg);
	transform: skewX(20deg) rotate(10deg);
	border-left: 1px solid #121f1e;
	border-top: 1px solid #121f1e;
}

#bulbasaur > .bulb6 {
	width: 165px;
	height: 50px;
	background: #70bfb9;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	bottom: -20px;
	left: -114px;
	border-top: 1px solid #121f1e;
}

#bulbasaur > .bulb7 {
	width: 70px;
	height: 70px;
	background: #70bfb9;
	border-radius: 20%;
	display: inline-block;
	position: relative;
	bottom: -50px;
	left: 89px;
	-webkit-transform: skewX(-20deg) rotate(-10deg);
	-moz-transform: skewX(-20deg) rotate(-10deg);
	-o-transform: skewX(-20deg) rotate(-10deg);
	-ms-transform: skewX(-20deg) rotate(-10deg);
	transform: skewX(-20deg) rotate(-10deg);
	border-right: 1px solid #121f1e;
	border-top: 1px solid #121f1e;
}
/*画妙蛙种子的眼睛*/
  .eye{
    width: 70px;
    height: 35px;
    border:1px solid black;
    transform: scale(0.8,1.2);
    overflow: hidden;
    position: relative;
    position: absolute;
    background: white;
  }
  .eyeLeft{
    border-radius: 70px 70px 10px 0px;
    transform:rotate(20deg);
    top: 110px;
    left: 20px;
  }
  .eyeRight{
    border-radius: 70px 70px 0px 10px;
    transform:rotate(-20deg);
    top:110px;
    right: 100px;
  }
  .ball{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border:1px solid red;
    background: #c93959;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1,0.8);
  } 
  .ballLeft{
    transform: rotate(-20deg);
    left: 45%;
    top: 10%;
  }
  .ballRight{
    transform: rotate(20deg);
    left: -7%;
    top: 10%;
  }
  .pupil{
    width: 9px;
    height: 21px;
    border-radius: 50%;
	background: #733c44;
  } 

#bulbasaur >.mouth{
    overflow: hidden;
    width: 190px;
    height: 50px;
    position: relative;
    position: absolute;
    top: 175px;
    left: 23px;
    z-index:1;
}
#bulbasaur >.mouth::before{
    content: '';
    display:block;
    position: absolute;
    z-index: 1;
    top: -1px;
    left: 0px;
    width: 0px;
    height: 0px;
    border-width:20px 95px 95px 95px;
    border-color: transparent;
    border-top-color: #70bfb9;
    border-style: solid;
}
/*画妙蛙种子的嘴*/
#bulbasaur >.mouth> .left-mouth {
    position: absolute;
    z-index: 1;
	left: 0px;
	top: 6px;
	width: 96px;
	height: 10px;
    border-radius: 50%;
	-webkit-box-shadow: 0 -1px 0 #121f1e;
	box-shadow: 0 -1px 0 #121f1e;
	-webkit-transform: rotate(10deg);
	-moz-transform: rotate(10deg);
	-o-transform: rotate(10deg);
	-ms-transform: rotate(10deg);
	transform: rotate(10deg);
}

#bulbasaur >.mouth> .right-mouth {
    position: absolute;
    z-index: 1;
	right: 0px;
	top: 6px;
	width: 96px;
	height: 10px;
	border-radius: 50%;
	-webkit-box-shadow: 0 -1px 0 #121f1e;
	box-shadow: 0 -1px 0 #121f1e;
	-webkit-transform: rotate(-10deg);
	-moz-transform: rotate(-10deg);
	-o-transform: rotate(-10deg);
	-ms-transform: rotate(-10deg);
	transform: rotate(-10deg);
}
#bulbasaur >.mouth> .bottom-mouth{
    width: 200px;
    height: 200px;
    overflow: hidden;
    border:1px solid black;
    position: relative;
    position:absolute;
    top: -187px;
    left: -4%;
    background:#953528;
    border-radius: 200px/180px;
    z-index: -1;
    opacity:0;
    transition: all 0.5s;
}
#bulbasaur >.mouth> .smile{
    top: -160px !important;
    opacity: 1 !important;
}
#bulbasaur >.mouth> .bottom-mouth >.left-tooth{
    position:absolute;
    z-index: -1;
    top: 161px;
    left: 30px;
    width: 0;
    height: 0;
    transform: rotate(-10deg);
    border: 10px solid transparent;
    border-width: 15px 10px 10px 10px;
    border-top-color: white;
}
#bulbasaur >.mouth> .bottom-mouth >.right-tooth{
    position:absolute;
    z-index: -1;
    top: 161px;
    right: 30px;
    width: 0;
    height: 0;
    transform: rotate(10deg);
    border: 10px solid transparent;
    border-width: 15px 10px 10px 10px;
    border-top-color: white;
}
#bulbasaur >.mouth> .bottom-mouth >.tongue{
    width: 160px;
    height: 160px;
    position:absolute;
    z-index:-4;
    top: 158px;
    left: 10%;
    border-radius: 50%;
    background: #f28193;
}
/*画几块斑点*/
#bulbasaur > .random-mark1 {
	background: #175d6f;
	width: 10px;
	height: 15px;
	border-radius: 50%;
	-webkit-transform: rotate(10deg);
	-moz-transform: rotate(10deg);
	-o-transform: rotate(10deg);
	-ms-transform: rotate(10deg);
	transform: rotate(10deg);
	position: absolute;
	top: 90px;
	left: 90px;
}

#bulbasaur > .random-mark2 {
	background: #175d6f;
	width: 25px;
	height: 35px;
	border-radius: 50% / 40%;
	-webkit-transform: rotate(20deg);
	-moz-transform: rotate(20deg);
	-o-transform: rotate(20deg);
	-ms-transform: rotate(20deg);
	transform: rotate(20deg);
	position: absolute;
	top: 60px;
	left: 120px;
}

#bulbasaur > .random-mark2::before {
	content: '';
	display: block;
	width: 15px;
	height: 35px;
	position: absolute;
	left: -5px;
	top: -5px;
	background: #70bfb9;
	-webkit-transform: rotate(20deg);
	-moz-transform: rotate(20deg);
	-o-transform: rotate(20deg);
	-ms-transform: rotate(20deg);
	transform: rotate(20deg);
}

#bulbasaur > .random-mark2::after {
	content: '';
	display: block;
	width: 6px;
	height: 33px;
	border-radius: 50% 0 0 50%;
	position: absolute;
	left: 6px;
	top: -1px;
	background: #175d6f;
	-webkit-transform: rotate(20deg);
	-moz-transform: rotate(20deg);
	-o-transform: rotate(20deg);
	-ms-transform: rotate(20deg);
	transform: rotate(20deg);
}

#bulbasaur > .random-mark3 {
	background: #175d6f;
	width: 15px;
	height: 20px;
	border-radius: 30%;
	-webkit-transform: skewX(-20deg)rotate(-20deg);
	-moz-transform: skewX(-20deg)rotate(-20deg);
	-o-transform: skewX(-20deg)rotate(-20deg);
	-ms-transform: skewX(-20deg)rotate(-20deg);
	transform: skewX(-20deg)rotate(-20deg);
	position: absolute;
	top: 120px;
	left: 120px;
}

#bulbasaur > .random-mark3:before {
	content: '';
	display: block;
	background: #70bfb9;
	width: 15px;
	height: 25px;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
	position: absolute;
	top: 4px;
	left: -5px;
}

#bulbasaur > .random-mark3:after {
	content: '';
	display: block;
	background: #175d6f;
	width: 4px;
	height: 19px;
	border-radius: 50% 0 0 50%;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
	position: absolute;
	top: 1px;
	left: 5px;
}
/*画眉毛*
#bulbasaur > .left-eyebrow {
	position: absolute;
	left: 65px;
	top: 110px;
	width: 27px;
	height: 5px;
	border-radius: 50%;
	-webkit-box-shadow: 0 -1px 0 #121f1e;
	box-shadow: 0 -1px 0 #121f1e;
	-webkit-transform: rotate(50deg);
	-moz-transform: rotate(50deg);
	-o-transform: rotate(50deg);
	-ms-transform: rotate(50deg);
	transform: rotate(50deg);
}

#bulbasaur > .right-eyebrow {
	position: absolute;
	left: 143px;
	top: 112px;
	width: 25px;
	height: 5px;
	border-radius: 50%;
	-webkit-box-shadow: 0 -1px 0 #121f1e;
	box-shadow: 0 -1px 0 #121f1e;
	-webkit-transform: rotate(-50deg);
	-moz-transform: rotate(-50deg);
	-o-transform: rotate(-50deg);
	-ms-transform: rotate(-50deg);
	transform: rotate(-50deg);
}
/*画鼻孔*/
#bulbasaur > .left-nostril {
	position: absolute;
	left: 100px;
	top: 162px;
	background: #377268;
	width: 2px;
	height: 6px;
	border-radius: 50%;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

#bulbasaur > .right-nostril {
	position: absolute;
	left: 130px;
	top: 162px;
	background: #377268;
	width: 2px;
	height: 6px;
	border-radius: 50%;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
/*画一个蒜头*/
#bulbasaur > .cup1 {
	position: absolute;
	width: 280px;
	height: 200px;
	background: #2a7b37;
	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	top: -30px;
	left: -22px;
}

#bulbasaur > .cup1:before {
	content: '';
	display: block;
	background: #2a7b37;
	width: 120px;
	height: 60px;
	position: absolute;
	left: 80px;
	top: -30px;
}

#bulbasaur > .cup-mask1 {
	position: absolute;
	width: 50px;
	height: 101px;
	background: #fff;
	border-radius: 50%;
	-webkit-transform: rotate(60deg);
	-moz-transform: rotate(60deg);
	-o-transform: rotate(60deg);
	-ms-transform: rotate(60deg);
	transform: rotate(60deg);
	top: -90px;
	left: 20px;
}

#bulbasaur > .cup-mask2 {
	position: absolute;
	width: 50px;
	height: 101px;
	background: #fff;
	border-radius: 50%;
	-webkit-transform: rotate(-60deg);
	-moz-transform: rotate(-60deg);
	-o-transform: rotate(-60deg);
	-ms-transform: rotate(-60deg);
	transform: rotate(-60deg);
	top: -90px;
	left: 165px;
}

#bulbasaur > .cup2 {
	width: 24px;
	height: 24px;
	background: #2a7b37;
	border-radius: 30%;
	-webkit-transform: rotate(40deg);
	-moz-transform: rotate(40deg);
	-o-transform: rotate(40deg);
	-ms-transform: rotate(40deg);
	transform: rotate(40deg);
	position: absolute;
	top: -70px;
	left: 92px;
}

#bulbasaur > .cup3 {
	width: 25px;
	height: 25px;
	background: #2a7b37;
	border-radius: 30%;
	-webkit-transform: rotate(60deg);
	-moz-transform: rotate(60deg);
	-o-transform: rotate(60deg);
	-ms-transform: rotate(60deg);
	transform: rotate(60deg);
	position: absolute;
	top: -70px;
	left: 119px;
}

#bulbasaur > .cup3:after {
	content: '';
	width: 15px;
	height: 15px;
	border-radius: 20%;
	-webkit-transform: rotate(-15deg);
	-moz-transform: rotate(-15deg);
	-o-transform: rotate(-15deg);
	-ms-transform: rotate(-15deg);
	transform: rotate(-15deg);
	position: absolute;
	z-index: 1;
	background: #fff;
	left: -14px;
	top: 10px;
}
/*画蒜头的条纹*/
#bulbasaur > .line{
	width: 150px;
	height: 10px;
	border-radius: 50%;
	position: absolute;
	top: 10px;
	left: 45px;
	transform: rotate(90deg);
	box-shadow: 0 1px 0 #121f1e;
	
}
#bulbasaur > .line::before{
	content:'';
	display:block;
	width: 150px;
	height: 30px;
	border-radius: 50%;
	position: absolute;
	top: 32px;
    left: -5px;
	transform: rotate(30deg);
	box-shadow: 0 1px 0 #121f1e;
}

#bulbasaur > .line::after{
	content:'';
	display:block;
	width: 150px;
	height: 50px;
	border-radius: 50%;
	position: absolute;
	top: -52px;
    left: 0px;
    transform: rotate(154deg);
	box-shadow: 0 1px 0 #121f1e;
}

#bulbasaur > .body1 {
	position: absolute;
	z-index: -10;
	width: 270px;
	height: 200px;
	background: #70bfb9;
	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	top: 50px;
	left: -17px;
	border: 1px solid #121f1e;
}

#bulbasaur > .leg1 {
	position: absolute;
	z-index: -10;
	width: 65px;
	height: 130px;
	background: #70bfb9;
	border-radius: 40% 40% 40% 40% / 40% 40% 40% 40%;
	-webkit-transform: rotate(-15deg);
	-moz-transform: rotate(-15deg);
	-o-transform: rotate(-15deg);
	-ms-transform: rotate(-15deg);
	transform: rotate(-15deg);
	top: 170px;
	left: -10px;
	border: 1px solid #121f1e;
}

#bulbasaur > .leg1:after {
	content: '';
	position: absolute;
	width: 60px;
	height: 85px;
	background: #70bfb9;
	left: 15px;
	top: -10px;
}

#bulbasaur > .leg2 {
	position: absolute;
	z-index: -10;
	width: 65px;
	height: 130px;
	background: #70bfb9;
	border-radius: 40% 40% 40% 40% / 40% 40% 40% 40%;
	-webkit-transform: rotate(15deg);
	-moz-transform: rotate(15deg);
	-o-transform: rotate(15deg);
	-ms-transform: rotate(15deg);
	transform: rotate(15deg);
	top: 170px;
	left: 180px;
	border: 1px solid #121f1e;
}

#bulbasaur > .leg2:after {
	content: '';
	position: absolute;
	width: 60px;
	height: 85px;
	background: #70bfb9;
	left: -8px;
	top: -10px;
}

#bulbasaur > .random-mark4 {
	background: #175d6f;
	width: 30px;
	height: 40px;
	border-radius: 40% 60% 50% 40% / 30% 20% 40% 30%;
	-webkit-transform: rotate(-15deg);
	-moz-transform: rotate(-15deg);
	-o-transform: rotate(-15deg);
	-ms-transform: rotate(-15deg);
	transform: rotate(-15deg);
	position: absolute;
	top: 220px;
	left: 10px;
}

#bulbasaur > .random-mark4:before {
	content: '';
	position: absolute;
	width: 20px;
	height: 40px;
	background: #70bfb9;
	-webkit-transform: rotate(-30deg);
	-moz-transform: rotate(-30deg);
	-o-transform: rotate(-30deg);
	-ms-transform: rotate(-30deg);
	transform: rotate(-30deg);
	left: 14px;
	top: -6px;
}

#bulbasaur > .random-mark4:after {
	content: '';
	position: absolute;
	width: 10px;
	height: 38px;
	border-radius: 0 50% 50% 0;
	background: #175d6f;

	-webkit-transform: rotate(-30deg);
	-moz-transform: rotate(-30deg);
	-o-transform: rotate(-30deg);
	-ms-transform: rotate(-30deg);
	transform: rotate(-30deg);
	left: 12px;
	top: -1px;
}

#bulbasaur > .random-mark5 {
	background: #175d6f;
	width: 18px;
	height: 28px;
	border-radius: 40% 60% 50% 40% / 30% 20% 40% 30%;

	-webkit-transform: rotate(75deg);
	-moz-transform: rotate(75deg);
	-o-transform: rotate(75deg);
	-ms-transform: rotate(75deg);
	transform: rotate(75deg);
	position: absolute;
	top: 210px;
	left: 216px;
}

#bulbasaur > .random-mark5:before {
	content: '';
	position: absolute;
	width: 12px;
	height: 40px;
	background: #70bfb9;

	-webkit-transform: rotate(-30deg);
	-moz-transform: rotate(-30deg);
	-o-transform: rotate(-30deg);
	-ms-transform: rotate(-30deg);
	transform: rotate(-30deg);
	left: 10px;
	top: -10px;
}

#bulbasaur > .random-mark5:after {
	content: '';
	position: absolute;
	width: 8px;
	height: 27px;
	border-radius: 0 50% 50% 0;
	background: #175d6f;

	-webkit-transform: rotate(-30deg);
	-moz-transform: rotate(-30deg);
	-o-transform: rotate(-30deg);
	-ms-transform: rotate(-30deg);
	transform: rotate(-30deg);
	left: 7px;
	top: -1px;
}

#bulbasaur > .nail1 {
	background: #d1e0db;
	width: 12px;
	height: 12px;
	border: 1px solid #121f1e;
	border-radius: 30%;

	-webkit-transform: skewX(30deg)rotate(30deg);
	-moz-transform: skewX(30deg)rotate(30deg);
	-o-transform: skewX(30deg)rotate(30deg);
	-ms-transform: skewX(30deg)rotate(30deg);
	transform: skewX(30deg)rotate(30deg);
	position: absolute;
	z-index: -15;
	top: 292px;
	left: 24px;
}

#bulbasaur > .nail2 {
	background: #d1e0db;
	width: 12px;
	height: 12px;
	border: 1px solid #121f1e;
	border-radius: 30%;

	-webkit-transform: skewX(30deg)rotate(45deg);
	-moz-transform: skewX(30deg)rotate(45deg);
	-o-transform: skewX(30deg)rotate(45deg);
	-ms-transform: skewX(30deg)rotate(45deg);
	transform: skewX(30deg)rotate(45deg);
	position: absolute;
	z-index: -15;
	top: 289px;
	left: 34px;
}

#bulbasaur > .nail3 {
	background: #d1e0db;
	width: 12px;
	height: 12px;
	border: 1px solid #121f1e;
	border-radius: 30%;

	-webkit-transform: skewX(30deg)rotate(30deg);
	-moz-transform: skewX(30deg)rotate(30deg);
	-o-transform: skewX(30deg)rotate(30deg);
	-ms-transform: skewX(30deg)rotate(30deg);
	transform: skewX(30deg)rotate(30deg);
	position: absolute;
	z-index: -15;
	top: 286px;
	left: 43px;
}

#bulbasaur > .nail4 {
	background: #d1e0db;
	width: 12px;
	height: 12px;
	border: 1px solid #121f1e;
	border-radius: 30%;

	-webkit-transform: skewX(-30deg)rotate(-45deg);
	-moz-transform: skewX(-30deg)rotate(-45deg);
	-o-transform: skewX(-30deg)rotate(-45deg);
	-ms-transform: skewX(-30deg)rotate(-45deg);
	transform: skewX(-30deg)rotate(-45deg);
	position: absolute;
	z-index: -15;
	top: 292px;
	left: 200px;
}

#bulbasaur > .nail5 {
	background: #d1e0db;
	width: 12px;
	height: 12px;
	border: 1px solid #121f1e;
	border-radius: 30%;

	-webkit-transform: skewX(-30deg)rotate(-45deg);
	-moz-transform: skewX(-30deg)rotate(-45deg);
	-o-transform: skewX(-30deg)rotate(-45deg);
	-ms-transform: skewX(-30deg)rotate(-45deg);
	transform: skewX(-30deg)rotate(-45deg);
	position: absolute;
	z-index: -15;
	top: 289px;
	left: 190px;
}

#bulbasaur > .nail6 {
	background: #d1e0db;
	width: 12px;
	height: 12px;
	border: 1px solid #121f1e;
	border-radius: 30%;

	-webkit-transform: skewX(-30deg)rotate(-30deg);
	-moz-transform: skewX(-30deg)rotate(-30deg);
	-o-transform: skewX(-30deg)rotate(-30deg);
	-ms-transform: skewX(-30deg)rotate(-30deg);
	transform: skewX(-30deg)rotate(-30deg);
	position: absolute;
	z-index: -15;
	top: 285px;
	left: 180px;
}
`
export default string;