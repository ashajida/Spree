import { Fragment } from 'react';
import Product from '../ProductWithBtn';
import {
    Section,
    Container,
    Wrapper,
    Heading,
    Products
} from './Shop.elements'

const Shop = ({products}) => {

    return(
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Shop</Heading>
                        <Products>
                            { (products.length > 0) && products.map(product => <Product product={ product } key={ product.id } />) }
                        </Products>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}

export default Shop;