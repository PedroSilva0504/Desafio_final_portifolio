import React, {useState} from "react";
import MenuMobile from "../assets/menuMobile.svg";
import CloseMenu from "../assets/x.svg";
import * as S from "../Style/StyleHeader";




 function Header (){
    const [menuOpen, setMenuOpen]  = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <S.Header>
            <S.Nav  >
                <S.Ul menuOpen={menuOpen} >
                    <S.Li><S.LinkNav to="/" onClick={() => setMenuOpen(false)}>Inicio</S.LinkNav></S.Li>
                    <S.Li><S.LinkNav to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</S.LinkNav></S.Li>
                    <S.Li><S.LinkNav to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</S.LinkNav></S.Li>
                </S.Ul>
            </S.Nav>
            <S.MenuButton onClick={toggleMenu} >
                {menuOpen ? <S.Icone src={CloseMenu} /> : <S.Icone src={MenuMobile}/>}
            </S.MenuButton>
        </S.Header>
    )
 }

 export default Header






