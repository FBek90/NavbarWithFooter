import React from 'react';
import { Container, Img, Title, Wrapper, Icon } from './style';


const PropertyCard = ({ value }) => {
    return (
        <Container>
            <Wrapper img>
                <Img src={value.img} alt='homes' />
            </Wrapper>
            <Title>{value.title}</Title>
            <Icon src={value.icon} />
        </Container>
    )
}

export default PropertyCard;