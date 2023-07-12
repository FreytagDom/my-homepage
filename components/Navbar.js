import styled from "styled-components";
import Burger from "./Burger";
import React from "react";



export default function Navbar() {
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menuOpen: false,
      };
    }

    handleStateChange(state) {
      this.setState({ menuOpen: state.isOpen });
    }

    closeMenu() {
      this.setState({ menuOpen: false });
    }

    toggleMenu() {
      this.setState((state) => ({ menuOpen: !state.menuOpen }));
    }

    render() {
      return (
        <div>
          <Burger onClick={() => this.toggleMenu()} />
        </div>
      );
    }
  }
  return (
    <NavbarHead>
      <ParentComponent />
    </NavbarHead>
  );
}

const NavbarHead = styled.section`
  justify-content: space-evenly;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  justify-items: center;
  align-content: center;
  display: grid;
  top: 0;
  width: 100%;
  opacity: 0.9;
  height: 4rem;
  z-index: 8;
  background-color: cadetblue;
  position: sticky;
`;



