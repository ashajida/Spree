import {Section, Container, Wrapper, Heading, Products, Button} from './BestSellingProducts.elements';
import { Fragment } from 'react';
import Product from '../../Product';
import Carousel, { consts }  from 'react-elastic-carousel';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';



const BestSellingProducts = ({ products }) => {
    const breakPointsCollection = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <BsArrowLeft /> : <BsArrowRight />;

        return (
          <Button onClick={ onClick } disabled={ isEdge }>
            { pointer }
          </Button>
        )
    }

    return(
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Best Selling</Heading>
                        <Products>
                            <Carousel 
                            breakPoints={ breakPointsCollection } 
                            pagination={ false}  
                            renderArrow={ myArrow }
                            >
                            {
                                products.map(product => (<Product key={ products.id } product={ product } />))
                            }
                            </Carousel>
                        </Products>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}

export default BestSellingProducts;