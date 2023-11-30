import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #003153;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #000000;
  @media (max-width: 720px) {
        height:10vh;

        justify-content: end;
        align-items: start;
        
        
      }
`;
export const Nav = styled.nav`
  width: 60vw;
  
  @media (max-width: 720px) {
    display:block;
    width: 30vw;
    height:30vh;
    justify-content:center;
    
    
  }
`;
export const ImgMenu = styled.img`
  width: 10vw;
  display: none;

  @media (max-width: 720px) {
    display: block;
  }
`;




export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  font-size: 30px;
  color: white;

  @media (max-width: 720px) { 
    display: ${(props) => (props.menuOpen ? 'block' : 'none')};
    flex-direction: column;
    width:90vw;
    font-size:20px;
    border: none;
    



  }
`;

export const MenuButton = styled.button`
display: none;

@media (max-width: 720px) {
    width:10vw;
    display: block;
    border: none;
    background: transparent;
}`; 

export const Icone = styled.img`
width:10vw;
`;

export const Li = styled.li`
  /* @media (max-width: 720px) {
    display: none;
  } */

 
`;


export const LinkNav = styled(Link)`
  text-decoration: none;
  color: white;
`;

// -----------------

