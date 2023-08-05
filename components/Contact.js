import styled from "styled-components";
import Image from "next/image";
import Github from '../public/Github.svg'
import Linkedin from '../public/Linkedin.svg'
import XingLogo from '../public/XingLogo.png'
import EmailSend from '../public/EmailSend.png'
import Link from "next/link";


export default function Contact() {
    const handleEmailButtonClick = () => {
        window.location.href = "mailto:dominic.freytag@dominicfreytag.de";
      };
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
    <EmailButton onClick={handleEmailButtonClick}  >
<Email src={EmailSend} alt="Email send"></Email>
    </EmailButton>
    </ContacWrapper>
    </>
)

}

const ContacWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(5, 2fr);
 max-width: 25rem;
 align-content: center;
 padding-left: 2rem;
 align-items: center;
 justify-items: center;
 `;

const EmailButton = styled.button`
 background: transparent;
 border: none;
 outline : none!important;
 cursor: pointer ;
`;

const Email =styled(Image)`
 z-index: 3;
 width: 1.5rem;
 height:  1.5rem;
 margin-left: 0.5rem;
`;

const GitHub = styled(Image)`
 z-index: 3;
 width: 1.5rem;
 height:  1.5rem;
 text-decoration: none;
 margin-left: 1rem;
`;

const LinkedIn = styled(Image)`
 z-index: 3;
 width: 1.5rem;
 height:  1.5rem;
 margin-left: 1rem;
`;

const Xing = styled(Image)`
 z-index: 3;
 width: 1.4rem;
 height:  1.4rem;
 margin-left: 1rem;
`;