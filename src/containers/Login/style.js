import styled from "styled-components";
import BackgroundLeftlogin from "../../assets/Background-Left-Login.svg";
import BackgroundRightlogin from "../../assets/Background-Right-Login.svg";
import { Link as ReactLink} from "react-router-dom";

// Nome do componente:  sempre com a primeira letra maiuscula

export const Container = styled.div`

background-color:rgb(0, 0, 0, 0.8);
margin: 20px 20px;
width:1440px;
height:798px;
grid-template-columns: 1fr 1fr;
display: grid;
justify-self: center;
flex-direction: column;
gap: 15px;
top:-2361px;
left: 3795px;

`

export const ContainerLeft = styled.div`

display:flex;
justify-content:center;
align-items:center;
background-image: url(${BackgroundLeftlogin});
background-repeat: no-repeat;
background-size: cover;
background-position: center;


img{
    width:445px;
    height:409px;
    
}

`
export const ContainerRight = styled.div`

display:flex;
justify-content:center;
flex-direction:column;
justify-content: space-evenly;
align-items:center;
background-image: url(${BackgroundRightlogin});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

p{font-size: 20px; font-weight: 800; color: #FFFFFF;}

a{text-decoration:none;color: #9758A6;}

h2{
  width: 368px;
  height: 80px;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #FFFFFF;
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-style: normal;

}

span{
  color: #9758A6;
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-style: normal;
 }


`

export const Form = styled.form`



`

export const InputContainerLogin = styled.div`

input{

width: 350px;
height: 52px;
flex-direction:column;
display:flex;
justify-content:center;
margin: 15px 0 15px 0;
border-radius:5px;
border: none;
padding: 10px;

}

label{

font-family: Poppins;
font-weight: 600;
font-size: 18px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
color: #FFFFFF;
}

p{

  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 0%;
  height: 10px;
  letter-spacing: 0%;
  color:rgb(255, 0, 0);
  

}

`

export const Link = styled(ReactLink)`

text-decoration:none;
color: #9758A6;

`