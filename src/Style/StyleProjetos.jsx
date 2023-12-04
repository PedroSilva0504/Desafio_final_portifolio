import styled from "styled-components";


export const Section = styled.section`
background-color: #003153;
height: 100vh;

@media (max-width:720px){
    height:260vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
`;

export const H2 = styled.h2`
color: white;
margin-left: 30px;

@media (max-width:720px){
    text-align: center;
}
`
;

export const ProjetosDesktop = styled.section`
display: flex;
align-items: center;
width: 100vw;
justify-content:space-evenly;
margin-top: 90px;

@media (max-width:720px){
    flex-direction:column;
    height: 120vh;
}
`;

export const ContainerCalculadora = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 45vw;
transition:0.8s;

@media (max-width:720px){
    flex-direction: column;
    width: 80vw;
}

&:hover{
    transform:scale(1.2) ;
}
`;

export const Divdescricao = styled.div`
display: flex;
flex-direction:column;

@media (max-width:720px){
    width: 80vw;
    align-items: center;
    justify-content: center;
    
}
`;

export const A = styled.a`
text-decoration: none;
color: white;
width: 6.6vw;
margin-top: 10px;
position: relative;
transition: 0.4s;
@media (max-width: 720px){
    margin-top: 10px;
    width:70vw;
    text-align: center;
}
&:hover{
    color: #050505;
    transform: scale(1.1);

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: #a9a9a9; 
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 0.3s ease;
    }
    &:hover:after {
      width: 100%;
    }

}
`;

export const ImgCalculadora = styled.img`
width: 15vw;
border-radius: 5%;

@media (max-width: 720px){
    width: 60vw;
}
`;

export const H2Calculadora = styled.h2`
    width:20vw ;
    color:#EA631F ;

    @media (max-width: 720px){
        width: 80vw;
        text-align: center;
        font-size: 20px;
    }
`;

export const ContainerContador = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
width: 45vw;
transition:0.8s;

@media (max-width:720px){
    flex-direction: column;
}

&:hover{
    transform:scale(1.2) ;
}

`;

export const ImgContador = styled.img`
width: 15vw;
border-radius: 5%;

@media (max-width: 720px){
    width: 60vw;
}
`;

export const H2Contador = styled.h2`
    width:20vw ;
    color:#EA631F ;

    @media (max-width: 720px){
        width: 80vw;
        text-align: center;
        font-size: 20px;
    }
`;

export const Containerprojetos = styled.section`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100vw;
height: 50vh;

@media (max-width:720px){
    flex-direction: column;
    height: 120vh;
}

`;

export const Img = styled.img`
width: 15vw;
border-radius: 5%;

@media (max-width: 720px){
    width: 60vw;
}

`;

export const ContainerFantastika = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 45vw;
transition:0.8s;

@media (max-width:720px){
    flex-direction: column;
}

&:hover{
    transform:scale(1.2) ;
}


`;

export const ContainerLapizza= styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 45vw;
transition:0.8s;

@media (max-width:720px){
    flex-direction: column;
}

&:hover{
    transform:scale(1.2) ;
}


`;

export const H2Fantastika = styled.h2`
width:20vw ;
color:#EA631F ;

@media (max-width: 720px){
        width: 80vw;
        text-align: center;
        font-size: 20px;
    }
`;

export const H2Lapizza = styled.h2`
width:20vw ;
color:#EA631F ;

@media (max-width: 720px){
        width: 80vw;
        text-align: center;
        font-size: 20px;
    }
`;