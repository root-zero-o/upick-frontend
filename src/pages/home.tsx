import styled from "styled-components"
import welcomeScreen from "../images/home/WelcomeScreen.png";
import Logo from "../images/home/Logo.png";

const Home = () => {
    
  return (
    <StDiv>
        <StImg src={welcomeScreen}/>
        <StLogo src={Logo}/>
    </StDiv>
  )
}

const StDiv = styled.div`
  position: relative;
  width: 100%;
`;

const StImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 8%;
  object-fit: cover;
`;


export default Home;