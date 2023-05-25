import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import InsulinApp from "../public/InsulinApp.png";
import OnlineShop from "../public/OnlineShop.png";
import { keyframes } from "styled-components";

export default function Project() {
  return (
    <>
      <H3>Meine Projekte</H3>
      <Projects>
        <ProjectOne>
          <Link href="https://insulinapp.vercel.app/">
            <IconWrap src={InsulinApp} alt="InsulinApp" />
            <Text>My first own Web-App</Text>
          </Link>
        </ProjectOne>
        <ProjectTwo>
          <Link href="https://e-commerce-hygraph-example.vercel.app/">
            <IconWrap src={OnlineShop} alt="under construction" />
            <Text>e-commerce-example</Text>
          </Link>
        </ProjectTwo>
      </Projects>
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

const Projects = styled.span`
  display: grid;
  justify-items: center;
  justify-content: space-evenly;
  grid-area: auto;
  margin-top: 4rem;
`;

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgb(16, 78, 129);
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
