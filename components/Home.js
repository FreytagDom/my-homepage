import Me from "../public/Me.jpg";
import Image from "next/image";
import styled from "styled-components";
import Project from "./Projects";

export default function Homepage() {
  return (
    <>
      <ImageWrap src={Me} alt="picture of me self" />
      <Text>
        Hier stelle ich meine Projekte vor und erzähle etwas über mich.
        <b>
          <i>
            <u>Ich arbeite an diesen Projekten in meiner Freizeit.</u>
          </i>
        </b>
      </Text>
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
      <Project />
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
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
  position: static;
`;

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgb(16, 78, 129);
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Infos = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgba(54, 164, 164, 0.811);
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.3rem;
  text-align: center;
`;

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
