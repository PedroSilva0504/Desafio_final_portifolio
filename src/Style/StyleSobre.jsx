import styled from "styled-components";

export const Section = styled.section`
 background-color: #003153;
 height: 90vh;
 display: flex;
 justify-content:space-around;
 align-items: center;

 @media (max-width: 720px) {
 flex-direction: column;
 height: 100%;
}
`;

export const Div = styled.div`

text-align: center;
padding: 10px;
`
export const H2 = styled.h2`
margin-bottom: 10px;
font-family: 'Inter', sans-serif;
color: #EA631F;

@media (max-width: 720px) {
    font-size:1.2rem;
}
`

export const DivCursos = styled.div`
background-color: white;
height: 50vh;
width: 20vw;
border-radius:30px;
box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.9);
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items:center;


@media (max-width: 720px) {
    width:70vw;
}

`;

export const SectionVnw = styled.section`

display:flex;
font-size:15px;
text-align:start;

justify-content:space-evenly;
width: 19vw;

@media (max-width: 720px) {
    font-size:10px;
    width: 50vw;
    
}
`;

export const SectionRocket = styled.section`

display:flex;
font-size:15px;
text-align:start;
width: 17vw;


@media (max-width: 720px) {
    font-size:10px;
    width:50vw;
}
`;

export const SectionFirjan = styled.section`

display:flex;
font-size:15px;
text-align:start;
width:17vw;


@media (max-width: 720px) {
    font-size:10px;
    width:50vw;
}
`;

export const ImgRocket = styled.img`
width:3vw;
border-radius:10px;

@media (max-width: 720px) {
    width:10vw;
}
`;

export const ImgFirjan = styled.img`
width:4vw;
border-radius:10px;

@media (max-width: 720px) {
    width:10vw;
}

`;

export const Img = styled.img`
width: 2vw;
border-radius:10px;

@media (max-width: 720px) {
    width:10vw;
}
`;

export const DivHabilidades = styled.div`
background-color: white;
height: 50vh;
width: 20vw;
border-radius:30px;
display:flex;
flex-direction: column;
justify-content:center;
box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.9);

@media (max-width: 720px) {
    width:70vw;
}
`;

export const ImgHabilidades = styled.img`
width: 2.8vw;

    @media (max-width: 720px) {
    width:6vw;
}
`;

export const SectionHabilidades = styled.section`
display: flex;
text-align: start;
margin-left:30px;
justify-content:space-evenly;
padding-top: 10px;
align-items:center;
    @media (max-width: 720px) {
    font-size:12px;
}
`;

export const DivExperiencia = styled.div`
background-color: white;
height: 50vh;
width: 20vw;
border-radius:30px;
box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.9);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: v;

@media (max-width: 720px) {
    width:70vw;
}
`;

export const P = styled.p`
font-size: 20px;
`;



