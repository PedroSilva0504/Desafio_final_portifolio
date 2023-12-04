import React from "react";
import Profile from "../assets/profile.jpg"
import linkedin from "../assets/linkedin-logo.svg"
import GithubLogo from "../assets/github-logo.svg"
import WhatsappLogo from "../assets/whatsapp-logo.svg"
import * as S from "../Style/StyleInicio";

function Inicio() {
    return(
        <S.Main>
            <figure>
                <S.Profile src={Profile} alt="" />
            </figure>
            <S.SectionRedesSociais>
                <S.H2>Ola! sou o João Pedro</S.H2>
                <S.P>Desenvolvedor Fornt-end</S.P>
                <S.Figure>
                <a href="https://github.com/PedroSilva0504//" target="_blank"><S.Img src={GithubLogo} alt="logo do github" /></a>
                <a href="https://api.whatsapp.com/send?phone=5521981508722" target="_blank"><S.Img src={WhatsappLogo} alt="logo do whatsapp" /></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-188338293/" target="_blank" ><S.Img src={linkedin} alt="logo do linkedin" /></a>
                </S.Figure>
            </S.SectionRedesSociais>
            <p></p>
        </S.Main>
    );

}

export default Inicio