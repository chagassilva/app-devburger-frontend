
import  {Link}  from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.nav`

width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:rgba(2, 2, 2, 0.87);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


img{
    width: 200px;
    height: 180px;
    margin: 40px;
}
`

export const NavLinksContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;



`

export const NavegatioLink = styled(Link)`

display: flex;
align-items: center;
justify-content: center;
gap: 20px;
padding: 10px 20px;
text-decoration: none;
color: #ffffff;
background-color: ${(props) => props.$isActive ? '#5c2669' : 'transparent'};
font-size: 18px;
font-family: 'Poppins', sans-serif;
font-weight: 400;



&:hover{
    background-color: #5c2669;
    color: #fff;
    border-radius: 10px;
    transition: 0.5s;
}

`


export const FooterMenuAdmin = styled.footer`

display:grid;


`






// span{
//     color: #000000;
// font-size: 20px;
// font-style: bold;
// font-weight: 800;
// }