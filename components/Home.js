import Me1 from "../public/Me1.png";
import MoonPicture from "../public/MoonPicture.png"
import CloudsRepeat from "../public/CloudsRepeat.png"
import Stras from "../public/Stars.png"
import Twinkl from "../public/Twinkl.png"
import Image from "next/image";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function Homepage() {
  return (
    <>
    <Background>
<Moon src={MoonPicture} alt="moon"/>
<Stars src={Stras} alt="stars" ></Stars>
<Twinkling src={Twinkl} alt="twinkling" ></Twinkling>
<Clouds src={CloudsRepeat} ></Clouds>
    <PageWrapper>
    <Headline>Dominic Freytag</Headline>
      <ImageWrap src={Me1} alt="picture of me self" />
      <Infos>Einige Infos zu mir</Infos>
      <Text>
      Ich habe 2006 meine Ausbildung zum Kommunikationselektroniker mit der Fachrichtung Informationstechnik erfolgreich abgeschlossen. 
      Im Anschluss habe ich noch 2 Jahre bei der Firma Erfahrungen in der Produktion gesammelt, ehe ich bei einer Marktführenden Firma in der Pneumatik Branche, weitere Erfahrungen im Pneumatik Bereich dazugewonnen habe. 
      Aufgrund der Marktentwicklungen habe ich dann immer wieder neue Arbeit suchen müssen. 
      Mir war es dabei wichtig, in großen Unternehmen zu arbeiten, damit ich möglichst viele verschiedenen Abläufe und Prozesse kennenlerne. 
      Dabei hat mich schon immer die Entwicklung sowie Softwareanwendung interessiert, was mich dazu bewogen hat eine Weiterbildung zum Softwareentwickler zu machen. 
      Mein Ziel ist es smarte Anwendung für jeden zu schaffen, die einem im Alltag unterstützen und bei der Arbeit für Erleichterung sorgen.
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
  z-index: 3;
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
  position: relative;
  top: 0rem;
  left:0;
  bottom: 0;
  right: 0;
  min-height: 50rem ;
  overflow: hidden;
  `;

const Stars = styled(Image)` 
  background: black  repeat;
  position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: block;
   z-index: 0;
 `;
 
 const Twinkling = styled(Image)`
   width: 1800px;
   height: 1800px;
   background: transparent  repeat;
   background-size: 1000px 1000px;
   position: absolute;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: 2;
     
     -moz-animation:move-background 20s linear infinite;
   -ms-animation:move-background 20s linear infinite;
   -o-animation:move-background 20s linear infinite;
   -webkit-animation:move-background 20s linear infinite;
   animation:move-background 20s linear infinite;
   `;
 
 const Clouds = styled(Image)`
   width: 4000px;
   height: 950px;
   background: transparent, repeat;
   background-size: 1000px 1000px;
   position: absolute;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: 3;
   opacity: 0.9;
 
    -moz-animation:move-background 100s linear infinite;
   -ms-animation:move-background 100s linear infinite;
   -o-animation:move-background 100s linear infinite;
   -webkit-animation:move-background 100s linear infinite;
   animation:move-background 100s linear infinite;
 `;

 const Moon = styled(Image)`
   position: absolute;
   z-index: 3;
   right: 2rem;
   top: 3rem;
   width: 9rem;
   height: 9rem;
   `;