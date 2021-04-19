import {
    ProductWrapper,
    Product as Prod, 
    ImageWrapper, 
    Image, 
    Content, 
    ProductName, 
    ProductPrice
} from './Product.elements';
import { Fragment } from 'react';

const Product = ({ product }) => {
    return(
        <Fragment>
            <ProductWrapper to={`/products/${ product.id }`}>
                <Prod>
                    <ImageWrapper>
                        <Image src={ product.images[0].src } />
                    </ImageWrapper>
                    <Content>
                        <ProductName>{ product.name }</ProductName>
                        <ProductPrice>{ product.price }</ProductPrice>
                    </Content>
                </Prod>
            </ProductWrapper>
        </Fragment>
    );
}

export default Product;