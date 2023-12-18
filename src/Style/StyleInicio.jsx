import styled from "styled-components";

export const Main = styled.main`
  background-color: #003153;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Profile = styled.img`
  width: 20vw;
  border-radius: 10%;

@media (max-width: 720px) {
 width: 40vw;
}
`; 

export const H2 = styled.h2`
  color: white;
  font-size: 60px;
  margin-bottom: 50px;

  @media (max-width: 720px) {
    text-align:center;
    font-size: 30px;
  }

`;

export const P = styled.p`
  color: white;
  font-size: 35px;
  margin-bottom: 25px;

  @media (max-width: 720px) {
    font-size:20px;
  }
`;

export const Pinfo= styled.p`
  width: 60vw;
  color: white;
  font-size: 20px;
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: space-around;
  width: 10vw;

  @media (max-width: 720px) {
    width: 50vw;
  }
`;

export const Img = styled.img`
width: 3vw;

@media (max-width: 720px) {
    width: 10vw;
  }
`;

export const SectionRedesSociais = styled.div`
  height: 20vh;

  @media (max-width: 720px) {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
  }
`;