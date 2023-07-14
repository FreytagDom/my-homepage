import styled from "styled-components";
import { keyframes } from "styled-components";



export default function MyComponent() {
    return (
      <>
      {/* <Body> */}
          <Circle1 />
          <Circle2 />
          <Circle3 />
          <Circle4 />
          <Circle5 />
          <Circle6 />
          <Circle7 />
          <Circle8 />
          <Circle9 />
          <Circle10 />
          <Circle11 />
          <Circle12 />
          <Circle13 />
          <Circle14 />
          <Circle15 />
          <Circle16 />
          <Circle17 />
          <Circle18 />
          <Circle19 />
          <Circle20 />
          <Circle21 />
          <Circle22 />
          <Circle23 />
          <Circle24 />
          <Circle25 />
          <Circle26 />
          <Circle27 />
          <Circle28 />
          <Circle29 />
          <Circle30 />
          <Circle31 />
          <Circle32 />
          <Circle33 />
          <Circle34 />
          <Circle35 />
          <Circle36 />
          <Circle37 />
          <Circle38 />
          <Circle39 />
          <Circle40 />
        {/* </Body> */}
      </>
    );
  };

  
  const Body = styled.article`
  /* margin: 0; */
  overflow: hidden;
  background: #000;
  height: 100rem;
  min-width: 10rem;
  width: 100%;
  perspective: 500rem;
  `;

const screenAnimation = keyframes`

from {
  opacity: 0;
}

25% {
  opacity: 0.3;
  transform: scale3d(3, 3, 4);
}

50% {
  opacity: 0.75;
}

75% {
  opacity: 1;
}

to {
  opacity: 0;
}
`;



const Circle = styled.i`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  animation: 
 ${screenAnimation} infinite;
`;

const Circle1 = styled(Circle)`
  top: 20px;
  left: 30px;
 
  background: radial-gradient(
    center,
    ellipse cover,
    rgba(2, 226, 252, 0.65) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  box-shadow: 0px 0px 5px 0px #02e2fc;
  animation-duration: 5s;
`;

const Circle2 = styled(Circle)`
    top:420px;
    left:30px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(250,160,2,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #faa002;
    animation-duration: 21s;
  `;
  
  const Circle3 = styled(Circle)`
    top:550px;
    left:880px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(20,252,2,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #14fc02;
    animation-duration: 5s;
  `;
  
  const Circle4 = styled(Circle)`
    top:5px;
    left:1030px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(252,2,196,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #fc02c4;
    animation-duration: 4s;
  `;
  
  const Circle5 = styled(Circle)`
    top:280px;
    left:12px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(139,44,148,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #8b2c94;
    animation-duration: 5s;
  `;
  
  const Circle6 = styled(Circle)`
    top:550px;
    left:30px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(251,184,41,0.65) 0%,rgba(0,0,0,0) 100%);
  box-shadow:0px 0px 5px 0px #FBB829; 
    animation-duration: 6s;
  `;
  
  const Circle7 = styled(Circle)`
    top:650px;
    left:50px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(195,255,104,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #C3FF68; 
    animation-duration: 15s;
  `;
  
  const Circle8 = styled(Circle)`
    top:20px;
    left:860px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,0,102,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #FF0066; 
    animation-duration: 5s;
  `;

const Circle9 = styled(Circle)`
    top:896px;
    left:132px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,0,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #FFFF00; 
    animation-duration: 13s;
  `;
  
  const Circle10 = styled(Circle)`
    top:578px;
    left:357px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(127,175,27,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #7FAF1B; 
    animation-duration: 4s;
  `;
  
  const Circle11 = styled(Circle)`
    top:380px;
    left:230px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(1,210,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #01D2FF; 
    animation-duration: 5s;
  `;
  
  const Circle12 = styled(Circle)`
    top:570px;
    left:1100px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(237,247,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #EDF7FF; 
    animation-duration: 6s;
  `;
  
  const Circle13 = styled(Circle)`
    top:600px;
    left:600px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,255,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #00FFFF; 
    animation-duration: 7s;
  `;
  
  const Circle14 = styled(Circle)`
    top:200px;
    left:520px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,0,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #0000FF; 
    animation-duration: 14s;
  `;
  
  const Circle15 = styled(Circle)`
    top:370px;
    left:500px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(16,225,228,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #10e1e4; 
    animation-duration: 9s;
  `;
  
  const Circle16 = styled(Circle)`
    top:620px;
    left:730px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,51,0,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow:0px 0px 5px 0px #FF3300; 
    animation-duration: 3s;
  `;
  const Circle17 = styled(Circle)`    top:62px;
  left:330px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,234,232,0.65) 0%,rgba(0,0,0,0) 100%);
  box-shadow: 0px 0px 5px 0px #FFEAE8;
  animation-duration: 4s;
  `;

  const Circle18 = styled(Circle)`
    top:0px;
    left:250px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,229,0,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #FFE500;
    animation-duration: 5s;
  `;

  const Circle19 = styled(Circle)`
     top:600px;
    left:180px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,102,153,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #FF6699;
    animation-duration: 6s;
  `;

  const Circle20 = styled(Circle)`
    top:987px;
    left:13px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(84,156,204,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #549CCC;
    animation-duration: 7s;
  `;

  const Circle21 = styled(Circle)`
  top:120px;
    left:930px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(184,175,3,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #B8AF03;
    animation-duration: 8s;
    `;

  const Circle22 = styled(Circle)`
   top:80px;
    left:700px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(171,250,249,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #ABFAF9;
    animation-duration: 5s;
  `;

  const Circle23 = styled(Circle)`
  top:350px;
    left:720px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(127,15,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #7F0FFF;
    animation-duration: 2s;
  `;

  const Circle24 = styled(Circle)`
  top:997px;
    left:678px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(48,128,0,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #308000;
    animation-duration: 3s;
  `;

  const Circle25 = styled(Circle)`
   top:714px;
    left:246px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,38,38,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #FF2626;
    animation-duration: 4s;
  `;

  const Circle26 = styled(Circle)`
     top:0px;
    left:480px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(15,29,215,0.65) 0%,rgba(0,0,0,0) 100%);
  box-shadow: 0px 0px 5px 0px #0F1DD7;
    animation-duration: 5s;
  `;

  const Circle27 = styled(Circle)`
   top:456px;
    left:1000px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(51,102,153,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #336699;
    animation-duration: 6s;
  `;

  const Circle28 = styled(Circle)`
   top:350px;
    left:865px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(70,172,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #46ACFF;
    animation-duration: 7s;
  `;

  const Circle29 = styled(Circle)`
      top:100px;
    left:100px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(222,4,5,0.65) 0%,rgba(0,0,0,0) 100%);
  box-shadow: 0px 0px 5px 0px #DE0405;
    animation-duration: 8s;
  `;

  const Circle30 = styled(Circle)`
   top:1087px;
    left:722px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(77,254,21,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #4DFE15;
    animation-duration: 9s;
  `;

  const Circle31 = styled(Circle)`
     width:200px;
    height:200px;
    top:795px;
    left:605px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(243,10,70,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #F30A46;
    animation-duration: 1s;
  `;

  const Circle32 = styled(Circle)`
   top:234px;
    left:678px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(245,253,45,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #F5FD2D;
    animation-duration: 2s;
  `;

  const Circle33 = styled(Circle)`
  top:270px;
    left:1230px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(178,0,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #B200FF;
    animation-duration: 3s;
  `;

  const Circle34 = styled(Circle)`
      width:200px;
    height:200px;
    top:1126px;
    left:332px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(102,204,255,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #66CCFF;
    animation-duration: 4s;
  `;

  const Circle35 = styled(Circle)`
    top:407px;
    left:83px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(20,243,175,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #14F3AF;
    animation-duration: 5s;
  `;

  const Circle36 = styled(Circle)`
    width:200px;
    height:200px;
    top:176px;
    left:297px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(100,245,102,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #64F566;
    animation-duration: 6s;
  `;

  const Circle37 = styled(Circle)`
   width:300px;
    height:300px;
    top:820px;
    right:10px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(236,218,65,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #ECDA41;
    animation-duration: 7s;
  `;

  const Circle38 = styled(Circle)`
   top:500px;
    left:500px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,61,45,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #FF3D2D;
    animation-duration: 8s;
  `;

  const Circle39 = styled(Circle)`
      top:20px;
    right:26px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(74,73,235,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #4A49EB;
    animation-duration: 9s;
  `;

  const Circle40 = styled(Circle)`
    width:200px;
    height:200px;
    top:251px;
    left:1053px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,72,0,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #FF4800;
    animation-duration: 10s;
  `;

