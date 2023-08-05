import MyComponent from "@/components/SkillBackground/SkillsBackground";
import SkillList from "@/components/Skills";
import styled from "styled-components";

export default function SkillLists () {

    return (
    <PageWrapper>
        <Body>
        <SkillList />
        <MyComponent />
        </Body>
    </PageWrapper>
    )
}

const PageWrapper = styled.span`
  padding: 0rem;
   display: grid;
`;

const Body = styled.span`
margin: 0; 
overflow: hidden;
background: #000;
min-height: 60rem;
min-width: 10rem;
perspective: 500rem;
`;