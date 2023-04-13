import styled from "styled-components";
import Me from "../public/Me.jpg";
import Image from "next/image";

export default function Homepage() {
  return (
    <Imagecontainer>
      <Picture>
        <Image src={Me} alt="picture from me" />
      </Picture>
    </Imagecontainer>
  );
}

const Picture = styled.span`
  width: 130px;
  height: 160px;
  border-top-left-radius: 40rem;
  border-bottom-right-radius: 40rem;
  border-top-right-radius: 10rem;
  border-bottom-left-radius: 5rem;
  margin-left: 25px;
  margin-top: 100px;
  position: static;
  z-index: 2;
`;
const Imagecontainer = styled.span`
  display: flex;
  width: 20vh;
  height: 20vh;
  z-index: 2;
`;
