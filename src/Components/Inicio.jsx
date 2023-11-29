import React from "react";
import Profile from "../assets/profile.jpg"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import * as S from "../Style/StyleInicio";

function Inicio() {
    return(
        <S.Main>
            <figure>
                <S.Profile src={Profile} alt="" />
            </figure>
            <S.SectionRedesSociais>
                <S.H2>Ola! sou o João Pedro</S.H2>
                <S.Figure>
                <img src={Facebook} alt="logo do facebook" />
                <img src={Instagram} alt="logo do instagram" />
                <img src={linkedin} alt="logo do linkedin" />
                </S.Figure>
            </S.SectionRedesSociais>
        </S.Main>
    );

}

export default Inicio