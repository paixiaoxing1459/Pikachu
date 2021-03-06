const string = `.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}

.skin{
    background: #ffe600;
    min-height: 50vh;
    position: relative;
}
.nose{
    border:10px solid red;
    border-color: black transparent  transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left:50%;
    top: 160px;
    margin-left: -10px;
    z-index: 20;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(10deg);
    }
    50%{
        transform: rotate(0deg);
    }
    75%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%; 
    /* 50%——中轴 100%——最低点
        或者写 center bottom 也能达到相同效果   
    */
    animation: wave 0.3s infinite linear;
}

.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0px 0px;
    background-color: black;
}

.eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 120px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 1px;
}

.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}

.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 190px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.left{        
    border-radius: 0 0 0 50px;
    border-left-color: transparent;
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{  
    border-radius: 0 0 50px 0px;
    border-right-color: transparent;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px; 
}
.mouth .up .lip.right::before{
    left: -6px;
}

.mouth .down{
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;  /* border-radius 高级写法  */
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 110px;
}

.circle{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 220px;
    margin-left: -44px;
    z-index: 5;
}
.circle > img{
    position: absolute;
    top: 50%;
    left: 50%;
}
.circle.left{
    transform: translateX(-175px);
    background: #ff0000;
    border-radius: 50%;
}
.circle.left > img{
    transform: rotateY(180deg);
    transform-origin: 0 0; /* 更改一个元素变形的原点 */
}
.circle.right{
    transform: translateX(175px);
    background: #ff0000;
    border-radius: 50%;
}
`
export default string