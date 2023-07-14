import styled from "styled-components";
import { keyframes } from "styled-components";
import MyComponent from "./SkillBackground/SkillsBackground"

export default function SkillList() {

    return (
        <>
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
      <MyComponent/>
    </Section>
    </>
    
    )
}



const H3 = styled.h3`
  text-decoration: underline;
  font-size: 1.5rem;
  color: greenyellow;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  display: grid;
  margin-top: 2rem;
`;

const Section = styled.section`
  color: antiquewhite;
  font-size: 0.6rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 6rem;
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
color: white;
`;

const Lists = styled.ul`
  font-size: 0.85rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
