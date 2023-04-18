import styled from "styled-components";

export default function Footer() {
  return <FooterLine>Created by FreyDom 2023</FooterLine>;
}

const FooterLine = styled.footer`
  max-height: 0.8rem;
  font-size: 0.7rem;
  color: #1aa1d8;
  display: flex;
  bottom: 5px;
  width: 100%;
  margin-left: 6px;
`;
