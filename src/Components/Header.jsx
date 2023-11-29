import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as S from "../Style/StyleHeader";




 function Header (){


    return (
        <S.Header>
            <S.Nav>
                <S.Ul>
                    <S.Li><S.LinkNav to="/">Inicio</S.LinkNav></S.Li>
                    <S.Li><S.LinkNav to="/sobre">Sobre</S.LinkNav></S.Li>
                    <S.Li><S.LinkNav to="/projetos">Projetos</S.LinkNav></S.Li>
                </S.Ul>
            </S.Nav>
        </S.Header>
    )
 }

 export default Header


////////-------------------/////////////



