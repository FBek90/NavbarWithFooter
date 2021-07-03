import styled from 'styled-components';


export const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;

`
export const Wrapper = styled.div`
position: relative;

`

export const Img = styled.img`
opacity: 0.7;
filter: brightness(70%);
transform: translate();
:hover{
    transition: .3s ease-in-out;
    cursor: pointer;
    opacity: 1;
}
width: 269px;
height: 320px;
display: flex;
flex-direction: row;

`
export const Title = styled.div`
position: absolute;
padding: 0 90px;
line-height: 23px;
font-weight: 600;
font-style: normal;
color: var(--default-text-color);
font-size: var( --secondary-title-size);
text-transform: uppercase;
margin: auto;
bottom: 10%;
`
 
export const Icon = styled.img`
width: 60px;
height: 60px;
position: absolute;
top: 40%;
`