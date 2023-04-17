import styled from "styled-components";
import Image from "next/image";
import copyright2 from "../public/copyright2.png";

export default function Footer() {
  return (
    <FooterLine>
      <Image src={copyright2} alt="" />
      Created by FreyDom 2023
    </FooterLine>
  );
}

const FooterLine = styled.footer`
  max-height: 0.8rem;
  font-size: 0.7rem;
  color: #1aa1d8;
  display: flex;
  position: fixed;
  bottom: 5px;
  width: 100%;
  margin-left: 6px;
`;
