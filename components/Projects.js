import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import InsulinApp from "../public/InsulinApp.png";
import OnlineShop from "../public/OnlineShop.png";
import Klopfzeichen from "../public/Klopfzeichen.jpg"
import { keyframes } from "styled-components";
import Homepage from "./Home";

export default function Project() {
  return (
    <>
    <Wrapper>
      <H3>Meine Projekte</H3>
      <Projects>
        <ProjectOne>
          <Links href="https://insulinapp.de" target="_blank" rel="noopener noreferrer">
            <IconWrap src={InsulinApp} alt="InsulinApp" style={{borderRadius: '50%'}}/>
            <Text style={{
              textDecoration: 'underline',
            }}>My first own Web-App</Text>
          </Links>
          <Text> Dies ist meine erste WebApp, welche ich bei der Weiterbildung erstellt habe. Seitdem habe ich sie stätig Verbessert und neue Funktionen hinzugefüg.
            Zum vergleich hier der <Links href="https://insulinapp.vercel.app/" target="_blank" rel="noopener noreferrer">
          ältere stand
          </Links> wo ich noch Next-Auth genutzt habe 
              Sie dient Diabetikern zum errechnen und tracken ihrer Insulin-Einheiten die sie sich spritzen müssen. Sie richtet sich in erster Line an Kinder. </Text>
        </ProjectOne>
        <ProjectTwo>
          <Links href="https://klopfzeichenhoeren.de" target="_blank" rel="noopener noreferrer">
            <IconWrap src={Klopfzeichen} alt="under construction" />
            <Text style={{
              textDecoration: 'underline',
            }}>Klopfzeichenhören</Text>
          </Links>
          <Text>Diese WebSite habe ich für einen kleinen Buch-Autor nach seinen wünschen erstellt.</Text>
        </ProjectTwo>
        <ProjectThree>
          <Links href="https://e-commerce-hygraph-example.vercel.app/" target="_blank" rel="noopener noreferrer">
            <IconWrap src={OnlineShop} alt="under construction" />
            <Text style={{
              textDecoration: 'underline',
            }}>e-commerce-example</Text>
          </Links>
          <Text>Dies ist ein Beispiel wie ein einfacher kleiner Online-Shop aussehen könnte.</Text>
        </ProjectThree>
      
      </Projects>
      </Wrapper>
    </>
  );
}

const IconWrap = styled(Image)`
  display: grid;
  @media (max-width: 780px) {
    width: 6rem;
    height: 6rem;
  }
  @media (min-width: 781px) {
    width: 10rem;
    height: 10rem;
  }
`;

const Links = styled(Link)`
 text-decoration: none;
 color: aliceblue;
`;

const Projects = styled.span`
  display: grid;
  justify-items: center;
  justify-content: space-evenly;
  grid-area: auto;
  margin-top: 4rem;
`;

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: aqua;
 width: 10rem;
`;

const ProjectOne = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-column: 1;
  justify-items: center;
`;

const ProjectTwo = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-column: 2;
  justify-items: center;
`;

const ProjectThree = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-column: 1;
  grid-row: 2;
  justify-items: center;
  margin-top: 4rem;
`;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(-360deg);
 }
 to {
   -webkit-filter: hue-rotate(-0deg);
 }
`;

const H3 = styled.h3`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  z-index: 1;
  position: relative;
  display: grid;
  width: 100%;
  margin-top: 2rem;
`;


const Wrapper =styled.article`
  animation: scroll 300s linear infinite;
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"),
    #111111;
  color: #eee;
  min-height: 120%;
  height: max-content;
  /* min-width: 30rem; */
  width: 100%;
  perspective: 500rem;
  perspective-origin: 50% 50%;


@keyframes scroll {
  100% {
    background-position: 0px -400%;
  }
}

@media (prefers-reduced-motion) {
  .Wrapper {
    animation: scroll 800s linear infinite;
  }
}

@media (min-width: 670px) {
  .title {
    font-size: 5rem;
  }
}
`;