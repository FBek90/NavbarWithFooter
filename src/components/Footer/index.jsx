import React,{useState} from 'react'
import { Container, Foot, Title, Column,FooterLink, Contact,Input, Span,Wrapper, Button,Icon,Link } from './style'
import {discover,categoryList,links,contact,sns, policy} from '../../mock/footer'


function Footer() {
 const [email, setEmail] = useState('')
 const Submit =()=>{
  console.log('Email address: ', email);
  setEmail('')
  }
 return (
  <Container>
   {/* Footer above */}
   <Foot.Above>
   <Column>
    <Title>Contact Us</Title>
    {contact.map(({id, icon, info})=>{
     return( 
     <Contact key={id}> <Span>{icon}</Span>
      {info} 
     </Contact>)
    })}
    <Contact icon>
      {sns.map(({id, icon, path})=>{
     return <a target="blank" key={id} href={path}>{icon}</a> 
    })}
    </Contact>
  </Column>
     
    <Column>
    <Title>Discover</Title>
    {discover.map(({id, link,path})=>{
     return (
      <FooterLink key={id} to={path}>{link} </FooterLink>
     )
     })}
     </Column>
      <Column>
    <Title>List by Category</Title>
    {categoryList.map(({id, link,path})=>{
     return (
      <FooterLink key={id} to={path}>{link} </FooterLink>
     )
     })}
     </Column>
      <Column>
    <Title>Quick Links</Title>
    {links.map(({id, link,path})=>{
     return (
      <FooterLink key={id} to={path}>{link} </FooterLink>
     )
     })}
     </Column>
     <Column>
        <Title>Subscribe</Title>
        <Title.Define> We do not send spam so do not worry</Title.Define>
       <Wrapper>
        <Input type="email" placeholder='Enter your email'  value={email} onChange={(event) => setEmail(event.target.value)}/>
       <Button onClick={Submit}><Icon.Telegram /></Button>
       </Wrapper>
     </Column>
   </Foot.Above>


   {/* Footer below */}
    <Foot.Below>
      <Foot.Copyright> Copyright © 2021 CreativeLayers. All Right Reserved.</Foot.Copyright>
      <FooterLink brand to={'/'}><Foot.Brand><Icon.Logo /> Houzing</Foot.Brand></FooterLink>
      <Foot.Policy>
       {policy.map(({id, link, path})=>{
           return (
            <FooterLink key={id} to={path}>{link} </FooterLink>
        )
        })}
      </Foot.Policy>
    </Foot.Below>
  </Container>
 )
}

export default Footer
