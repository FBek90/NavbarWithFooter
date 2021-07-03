import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { ReactComponent as Map } from '../../assets/icons/map.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 200px;
  background: #ffffff;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const Foot = styled.div``

Foot.Above = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
Foot.Below = styled.div`
  display: flex;
  margin: 20px 0px;
  border-top: 1px solid #ececec;
  padding: 20px 0px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

`;
export const Title = styled.div`
  font-weight: 600;
  font-size: var(--font-size-primary);
  margin-bottom: 25px;
  color: #151515;
`;
export const FooterLink = styled(Link)`
  font-size:${({brand})=>brand ?  "25px": "var(--font-size-secondary)"};
  color: ${({brand})=>brand ?  "var(--facebook-bg-color)": "var(--icon-hover-color)"};
  line-height: 2;
  flex:${({brand})=> brand && '2'};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  :active {
    transform: scale(0.99);
  }
  :hover {
    color: ${({brand})=>brand ?   "var(--icon-hover-color)" :"var(--facebook-bg-color)"};
    font-weight: ${({brand})=>!brand && "500"};
  }
`;
Title.Define = styled.div`
 font-size: var(--font-size-secondary);
  color: var(--icon-hover-color);
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 370px;
  height:50px;
  border: none;
  padding: 10px;
  :focus {
    outline: none;
  }
`;

Foot.Copyright = styled.div`
  display: flex;
  flex: 3;
  align-items: center;

  font-size: var(--font-size-secondary);
  color: var(--icon-hover-color);
`;
Foot.Brand = styled.div`
  display: flex;
  font-weight: bold;
  font-size: var(--navbar-title-size);
  line-height: 22px;
  height: 30px;
  align-items: center;
  cursor: pointer;
  color: var(--facebook-bg-color);
  :hover{
    color: var(--icon-hover-color);
    & path {
      fill: var(--icon-hover-color);
    }
  }
`
Foot.Policy = styled.div`
display: flex;
flex: 2;
align-items: center;
justify-content: space-around;
font-size: var(--font-size-secondary);
color: var(--icon-hover-color);
`;

export const Contact = styled.div`
display: flex;
align-items: center;
font-size: var(--font-size-secondary);
width: 256px;
color: var(--icon-hover-color);;
line-height: 26px;
margin-bottom: 8px;
margin-top:${({icon})=> icon && '10px'} ;
`
export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #E6E9EC;
  padding:2px
 `
export const Button = styled.button`
  background: var(--property-bg-text-color);
  border-radius: 3px;
  width: 50px;
  height:48px;
  border: none;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  :hover{
  background: var(--facebook-bg-color);;

  }

`;

Contact.Subscribe = styled.div`

 border: 1px solid #E6E9EC;
`
export const Span = styled.span`
display: flex;
align-items: center;
font-size: var(--font-size-secondary);
line-height: 26px;
`

export const Icon = styled.div``

Icon.Email = styled(Email)`
  margin-right: 15px;
  & path {
      fill: var(--icon-hover-color);
    }
  `
  
Icon.Map = styled(Map)`
  margin-right: 15px;
     & path {
      fill: var(--icon-hover-color);
    }

`
Icon.Phone = styled(Phone)`
  margin-right: 15px;
  width:18px;
  height:18px;
  & path {
      fill: var(--icon-hover-color);
    }
 
`
Icon.Twitter = styled(Twitter)`
  margin-right: 30px;
     & path {
      fill: var(--twitter-bg-color);
    }
  cursor: pointer;


`
Icon.Linkedin = styled(Linkedin)`
  margin-right: 30px;
     & path {
      fill: #0e76a8 ;
    }
  cursor: pointer;


`
Icon.Facebook = styled(Facebook)`
  margin-right: 30px;
     & path {
      fill: var(--facebook-bg-color);
    }
  cursor: pointer;

`
Icon.Instagram = styled(Instagram)`
  margin-right: 30px;
     & path {
      fill: #fb3958 ;
    }
  cursor: pointer;

`
Icon.Telegram = styled(Telegram)`
  
  `
  Icon.Logo = styled(Logo)`
  margin-right: 10px;
  height: 40px;
  & path {
      fill: var(--facebook-bg-color);
    }
  :hover,
  :focus {
    & path {
      fill: var(--icon-hover-color);
    }
  }
`