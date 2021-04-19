import { Fragment } from "react";
import Product from "../ProductWithBtn";
import {
    Section,
    Container,
    Wrapper,
    Heading,
    Products as ProductsWrapper
} from './CategoryProducts.elements';

const Products = ({ products }) => {
 
    return(
        <Fragment>
            <Section>
                <Container>
                        <Heading>{ (products.length > 0) && products[0].categories[0].name }</Heading>
                        <ProductsWrapper>
                            { (products.length > 0) && products.map(product => <Product product={ product } key={ product.id } />) }
                        </ProductsWrapper>
                </Container>
            </Section>
        </Fragment>
    );
}

export default Products;