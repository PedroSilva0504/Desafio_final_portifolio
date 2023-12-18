import React from "react";
import CalculadoraPrint from "../assets/calculadora.png";
import ContadorPrint from "../assets/contador.png";
import FantastikaPrint from "../assets/fantastika.png";
import Lapizza from "../assets/lapizza.png";
import * as S from "../Style/StyleProjetos.jsx";

function Projetos() {
    return(
        <S.Section>
            <S.H2>Alguns dos meus Projetos!!!</S.H2>
            <S.ProjetosDesktop>
                <S.ContainerCalculadora>
                    <figure>
                        <S.ImgCalculadora src={CalculadoraPrint} alt="imagem de uma calculadora" />
                    </figure>
                    <S.Divdescricao>
                        <S.H2Calculadora>Calculadora usando Javascript, React e styled-components</S.H2Calculadora>
                        <S.A href="https://polite-tanuki-53f27a.netlify.app/" target="_blank">Visualizar Projeto</S.A>
                        <S.A href="https://github.com/PedroSilva0504/Calculadora_Desafio" target="_blank">Projeto no GitHub</S.A>
                    </S.Divdescricao>
                </S.ContainerCalculadora>
                <S.ContainerContador>
                    <figure>
                        <S.ImgContador src={ContadorPrint} alt="imagem de um contador web" />
                    </figure>
                    <S.Divdescricao>
                        <S.H2Contador>Contador usando Javascript, React e CSS</S.H2Contador>
                        <S.A href=" https://keen-halva-2a9e33.netlify.app/" target="_blank" >Visualizar Projeto</S.A>
                        <S.A href="https://github.com/PedroSilva0504/desafio_contador" target="_blank" >Projeto no Github</S.A>
                    </S.Divdescricao>
                </S.ContainerContador>
            </S.ProjetosDesktop>
            <S.Containerprojetos>
                <S.ContainerFantastika>
                    <figure>
                        <S.Img src={FantastikaPrint} alt="página fantastika print" />
                    </figure>
                    <S.Divdescricao>
                        <S.H2Fantastika>Fantastika, projeto feito com Html e CSS, com responsívo para Mobile</S.H2Fantastika>
                        <S.A href="https://pedrosilva0504.github.io/desafio-final-modulo-1/" target="_blank" > Visualizar Projeto</S.A>
                        <S.A href="https://github.com/PedroSilva0504/desafio-final-modulo-1" target="_blank" >Projeto no GitHub</S.A>
                    </S.Divdescricao>
                </S.ContainerFantastika>
                <S.ContainerLapizza>
                    <figure>
                        <S.Img src={Lapizza} alt="print de página de pizzaria" />
                    </figure>
                    <S.Divdescricao>
                        <S.H2Lapizza>Projeto de uma página de pizza, onde você pode selecionar qual pizza deseja comprar feita com JavaScript, React e CSS</S.H2Lapizza>
                        <S.A href="https://verdant-stroopwafel-1c61c5.netlify.app/" target="_blank" >Visualizar Projeto</S.A>
                        <S.A href="https://github.com/PedroSilva0504/page_lapizza" target="_blank" >Projeto no GitHub</S.A>
                    </S.Divdescricao>
                </S.ContainerLapizza>
            </S.Containerprojetos>
        </S.Section>
    )
}

export default Projetos