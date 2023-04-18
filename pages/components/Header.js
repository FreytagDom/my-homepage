import styled from "styled-components";
import { keyframes } from "styled-components";

export default function Header() {
  return (
    <header>
      <Headline>Dominic Freytag</Headline>
    </header>
  );
}

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
  z-index: 1;
  position: relative;
  display: grid;
  width: 100%;
  margin-top: 0;
  padding-top: 1rem;
`;
