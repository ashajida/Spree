import { Fragment } from 'react';
import {
    Section, 
    HeroImageWrapper, 
    HeroContent, 
    Heading, 
    Image, 
    Button
} from './Hero.elements';

const Hero = ({ image }) => {
    return(
        <Fragment>
            <Section>
                <HeroImageWrapper>
                    <Image src={ image } />
                </HeroImageWrapper>
                <HeroContent>
                    <Heading>Summer is here</Heading>
                    <Heading sm>Sale up to 50% off</Heading>
                    <Button>Shop now</Button>
                </HeroContent>
            </Section>
        </Fragment>
    );
}

export default Hero;