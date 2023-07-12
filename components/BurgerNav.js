import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li>
        <LinkWrapper href="/" passHref>
          <Tags>Home</Tags>
        </LinkWrapper>
      </li>

      <li>
        <LinkWrapper href="/skillPage" passHref>
          <Tags>Skills</Tags>
        </LinkWrapper>
      </li>

      <li>
        <LinkWrapper href="/projects" passHref>
          <Tags>Projects</Tags>
        </LinkWrapper>
      </li>

    </Ul>
  );
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 8;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #82ffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 16rem;
    width: 13rem;
    padding-top: 3.5rem;
    margin-top: 4rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.9;
   border-bottom-left-radius: 15%;
    li {
      color: #fff;
    }
  }
`;

const Tags = styled.p`
  margin: 5px 20px;
  font-size: 1.1rem;
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: grid;
  z-index: 2;
`;

const LinkWrapper = styled(Link)`
  padding-top: 1rem;
  display: grid;
  text-decoration: none;
  grid-row: 3;
  position: relative;
`;
