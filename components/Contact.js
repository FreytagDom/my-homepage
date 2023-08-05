import styled from "styled-components";
import Image from "next/image";
import Github from '../public/Github.svg'
import Linkedin from '../public/Linkedin.svg'
import XingLogo from '../public/XingLogo.png'
import Link from "next/link";

export default function Contact() {
return(
    <>
    <ContacWrapper>
        <Link  href='https://github.com/FreytagDom' >
        <GitHub  src={Github} alt="Github" />
        </Link>
        <Link href='https://www.linkedin.com/in/dominic-freytag-637a2524a' >
        <LinkedIn  src={Linkedin} alt="Linkedin" />
        </Link>
        <Link href='https://www.xing.com/profile/Dominic_Freytag/'>
        <Xing   src={XingLogo} alt="Xing"></Xing>
        </Link>
    <Email>dominicfreytag@web.de</Email>
    </ContacWrapper>
    </>
)

}

const ContacWrapper = styled.div`
display: grid;
 grid-template-columns: repeat(5, 1fr);
 max-width: 15rem;
 align-content: center;
 padding-left: 2rem;
 `;

const Email = styled.div`
padding-left: 3rem;
color: aquamarine;
font-size: 1rem;
color: aliceblue;
z-index: 3;
`;

const GitHub = styled(Image)`
z-index: 3;
width: 1.5rem;
height:  1.5rem;
text-decoration: none;
`;

const LinkedIn = styled(Image)`
z-index: 3;
width: 1.5rem;
height:  1.5rem;
`;

const Xing = styled(Image)`
z-index: 3;
width: 1.4rem;
height:  1.4rem;
`;