import React from 'react'
import PropertyCard from '../PropertyCard';
import { Container, responsive, Title, Wrapper } from './style';
import { property } from '../../mock/property';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PropertyCarousel = () => {
    return (
        <Container>
            <Wrapper>
                <Title title>Explore Our Properties</Title>
                <Title desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin</Title>
            </Wrapper>
            <Carousel
                additionalTransfrom={0}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                customTransition="all 3s"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}>
                {property.map((value) => {
                    return (
                        <PropertyCard key={value.id} value={value} />
                    )
                })}
            </Carousel>

        </Container>
    )
}
export default PropertyCarousel