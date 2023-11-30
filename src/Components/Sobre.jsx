import React from "react";
import Vnw  from "../assets/logoVNW.png"
import Firjan from "../assets/firjan.png"
import Rocketseat from "../assets/rocketseat.png"
import Html from "../assets/html5.png"
import Css from "../assets/logoCss.png"
import JavaScript from "../assets/iconsjavascript.png"
import JsReact from "../assets/react.svg"
import Sass from "../assets/sass.png"
import StyledComponents from "../assets/styled.png"
import * as S from "../Style/StyleSobre"

function Sobre() {
    return(
        <S.Section>
            <S.Div>
                <S.H2>Cursos</S.H2>
                <S.DivCursos>
                    <S.SectionVnw>
                        <div>
                            <h2>Desenvolvimento front-end</h2>
                            <p>Abr/2023 - dez/2023</p>
                        </div>
                        <figure>
                            <S.Img src={Vnw} alt="" />
                        </figure>
                    </S.SectionVnw>
                    <S.SectionRocket>
                        <div>
                            <h2>Fundamentos HTML, CSS, Javascript, Git e Github</h2>
                            <p>Carga horária de 12 horas</p>
                        </div>
                        <figure>
                            <S.ImgRocket src={Rocketseat} alt="" />
                        </figure>
                    </S.SectionRocket>

                    <S.SectionFirjan>
                        <div>
                            <h2>Tecnico em Segurança do Trabalho</h2>
                            <p>Fev/2019 - Jul/2020</p>
                        </div>
                        <figure>
                            <S.ImgFirjan src={Firjan} alt="" />
                        </figure>
                    </S.SectionFirjan>
                    
                </S.DivCursos>
            </S.Div>
            <S.Div>
                <S.H2>Habilidades</S.H2>
                <S.DivHabilidades>
                    <S.SectionHabilidades>
                        <h2>Html</h2>
                        <figure>
                            <S.ImgHabilidades src={Html} alt="logo html 5" />
                        </figure>
                    </S.SectionHabilidades>
                    <S.SectionHabilidades>
                        <h2>CSS</h2>
                        <figure>
                            <S.ImgHabilidades src={Css} alt="logo css 3" />
                        </figure>
                    </S.SectionHabilidades>
                    <S.SectionHabilidades>
                        <h2>Javascript</h2>
                        <figure>
                            <S.ImgHabilidades src={JavaScript} alt="logo javascript" />
                        </figure>
                    </S.SectionHabilidades>
                    <S.SectionHabilidades>
                        <h2>React</h2>
                        <figure>
                            <S.ImgHabilidades src={JsReact} alt="logo React" />
                        </figure>
                    </S.SectionHabilidades>
                    <S.SectionHabilidades>
                        <h2>SASS</h2>
                        <figure>
                            <S.ImgHabilidades src={Sass} alt="logo SASS"/>
                        </figure>
                    </S.SectionHabilidades>
                    <S.SectionHabilidades>
                        <h2>Styled-components</h2>
                        <figure>
                            <S.ImgHabilidades src={StyledComponents} alt="logo Styled-components" />
                        </figure>
                    </S.SectionHabilidades>

                </S.DivHabilidades>
            </S.Div>
            <S.Div>
                <S.H2>Experiência Profissional </S.H2>
                <S.DivExperiencia>
                    <h2>
                        Call center:
                    </h2>
                    <S.P>Atendimento ao cliente via Chat, produto cartões de crédito, 
                        solucionando problemas, tirando dúvidas, 
                        e direcionando as demandas para os setores responsáveis, entre outubro de 2020 à setembro de 2023.
                    </S.P>
                </S.DivExperiencia>
            </S.Div>
        </S.Section>

    )
}

export default Sobre