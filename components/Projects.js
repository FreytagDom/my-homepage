import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import InsulinApp from "../public/InsulinApp.png";
import OnlineShop from "../public/OnlineShop.png";
import { keyframes } from "styled-components";

export default function Project() {
  return (
    <>
    <Wrapper>
      <H3>Meine Projekte</H3>
      <Projects>
        <ProjectOne>
          <Links href="https://insulinapp.vercel.app/">
            <IconWrap src={InsulinApp} alt="InsulinApp" />
            <Text style={{
              textDecoration: 'underline',
            }}>My first own Web-App</Text>
          </Links>
          <Text> Dies ist meine erste WebApp welche ich bei der Weiterbildung erstellt habe.
              Sie dient Diabetikern zum errechnen und tracken ihrer Insulin-Einheiten die sie sich spritzen müssen.</Text>
        </ProjectOne>
        <ProjectTwo>
          <Links href="https://e-commerce-hygraph-example.vercel.app/">
            <IconWrap src={OnlineShop} alt="under construction" />
            <Text style={{
              textDecoration: 'underline',
            }}>e-commerce-example</Text>
          </Links>
          <Text>Dies ist ein Beispiel wie ein einfacher kleiner Online-Shop aussehen könnte.</Text>
        </ProjectTwo>
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
  animation: scroll 100s linear infinite;
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"),
    #111111;
  color: #eee;
  height: 100vh;
  min-width: 360px;
  width: 100%;
  perspective: 1000px;
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