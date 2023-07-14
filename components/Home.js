import Me from "../public/Me.jpg";
import MoonPicture from "../public/MoonPicture.png"
import Image from "next/image";
import styled from "styled-components";
import { keyframes } from "styled-components";


export default function Homepage() {
  return (
    <>
    <Background>
<Moon src={MoonPicture} alt="moon"/>
<Stars></Stars>
<Twinkling></Twinkling>
<Clouds></Clouds>
    <PageWrapper>
    <Headline>Dominic Freytag</Headline>
      <ImageWrap src={Me} alt="picture of me self" />

      <Infos>Einige Infos zum mir</Infos>
      <Text>
        Ich habe 2006 meine Ausbildung zum Kommunikationselektroniker mit der
        Fachrichtung Informationstechnik erfolgreich abgeschlossen. Im Anschluss
        habe ich noch 2 Jahre bei der Firma Erfahrungen in der Produktion
        gesammelt ehe ich bei, einer Marktführenden Firma in der Pneumatik
        Branche, weitere Erfahrungen im Pneumatik Bereich dazugewonnen habe. Auf
        Grund der Marktentwicklungen habe ich dann immer wieder neue Arbeit
        suchen müssen. Mir war es dabei wichtig in großen Unternehmen zu
        arbeiten damit ich möglichst viele verschieden Abläufe und Prozesse
        kennen lerne. Dabei hat mich schon immer die Entwicklung sowie
        Softwareanwendung interessiert was mich dazu bewogen hat eine
        Weiterbildung zum Softwareentwickler zu machen. Mein Ziel ist es smarte
        Anwendung für jeden zu schaffen, die einem im Alltag unterstützen und
        bei der Arbeit für Erleichterung sorgen
      </Text>
      </PageWrapper>
      </Background>
    </>
  );
}

const ImageWrap = styled(Image)`
  width: 130px;
  height: 160px;
  border-top-left-radius: 40rem;
  border-bottom-right-radius: 40rem;
  border-top-right-radius: 10rem;
  border-bottom-left-radius: 5rem;
  margin-left: 3rem;
  margin-right: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  position: sticky;
  z-index: 8;
`;

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgb(18, 178, 129);
  margin-left: 2rem;
  margin-right: 2rem;
  z-index: 8;
  position: sticky;
`;

const Infos = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgba(54, 164, 164, 0.811);
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.3rem;
  text-align: center;
  z-index: 8;
  position: sticky;
`;

const PageWrapper = styled.span`
  padding: 1rem;
  padding-right: 2rem;  
`;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const Headline = styled.h1`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  z-index: 3;
  position: relative;
  display: grid;
  width: 100%;
  margin-top: 0;
  padding-top: 5rem;
`;

const Background = styled.div`
  
@keyframes move-background {
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to { 
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
}
/* @-webkit-keyframes move-background {
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to { 
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
} */

/* @-moz-keyframes move-background {    
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to { 
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
}

    @-webkit-keyframes move-background {
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to { 
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
} */
  position: relative;
  top: 0rem;
  left:0;
  bottom: 0;
  right: 0;
  min-height: 50rem ;
  overflow: hidden;
  `;

const Stars = styled.div` 
  background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
  position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: block;
   z-index: 0;
 `;
 
 const Twinkling = styled.div`
   width:10000px;
   height: 100%;
   background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat;
   background-size: 1000px 1000px;
   position: absolute;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: 2;
     
     -moz-animation:move-background 70s linear infinite;
   -ms-animation:move-background 70s linear infinite;
   -o-animation:move-background 70s linear infinite;
   -webkit-animation:move-background 70s linear infinite;
   animation:move-background 70s linear infinite;
   `;
 
 const Clouds = styled.div`
   width:10000px;
   height: 100%;
   background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat;
   background-size: 1000px 1000px;
   position: absolute;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: 3;
 
    -moz-animation:move-background 150s linear infinite;
   -ms-animation:move-background 150s linear infinite;
   -o-animation:move-background 150s linear infinite;
   -webkit-animation:move-background 150s linear infinite;
   animation:move-background 150s linear infinite;
 `;

 const Moon = styled(Image)`
   position: absolute;
   z-index: 3;
   right: 2rem;
   top: 3rem;
   width: 9rem;
   height: 9rem;
   `;