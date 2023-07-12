import styled from "styled-components";
import { keyframes } from "styled-components";

export default function SkillList() {

    return (
        <>
        <Bg></Bg>
        <Bg2></Bg2>
        <Bg3></Bg3>
    <H3>Fähigkeiten und Skills</H3>
    <Section>
      <SkillsLeft>
        <H4>gelernter Komminikationselektroniker</H4>
        <Lists>
          <li>löten</li>
          <li>bonding</li>
          <li>testen</li>
          <li>Fehlersuche</li>
          <li>Reparatur</li>
          <li>Dokumentation</li>
        </Lists>
      </SkillsLeft>
      <Skills>
        <H4>Bootcampweiterbildung zum Web-Developer</H4>
        <Lists>
          <li>html</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>React</li>
          <li>Next</li>
          <li>Styled-Components</li>
          <li>MongoDB</li>
          <li>mongoose</li>
        </Lists>
      </Skills>
    </Section>
    </>
    
    )
}



const H3 = styled.h3`
  text-decoration: underline;
  font-size: 1rem;
  color: midnightblue;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  display: grid;
`;

const Section = styled.section`
  color: midnightblue;
  font-size: 13px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-area: auto;
  align-items: start;
`;

const SkillsLeft = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-column: 1;
`;

const Skills = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-column: 2;
`;

const H4 = styled.h4`
  color: cornflowerblue;
  font-size: 0.9rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Lists = styled.ul`
  font-size: 0.85rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Bg = styled.div`
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
  @keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
  `;


const Bg2 = styled.div`
  animation-direction:alternate-reverse;
  animation-duration:4s;
  @keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
`;

const Bg3 = styled.div`
  animation-duration:5s;
  @keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
`;


