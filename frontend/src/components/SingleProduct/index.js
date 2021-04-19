import {
    Container,
    Section,
    Wrapper,
    ProductWrapper,
    ImageWrapper,
    Image,
    Content,
    Name,
    Price,
    Icon,
    Number,
    Button,
    Description,
    QuantityWrapper,
    AddToCartButton
} from './SingleProduct.elements';
import { addToCart, incrementCartTotal } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';
import { Fragment, useState } from 'react';
import Quantity from '../Quantity';

const SingleProduct = ({ product }) => {
    const [ quantity, setQuantity ] = useState(0);
    const dispatch = useDispatch();

    const increment = () => {
        const value = quantity + 1;
        setQuantity(value);
    }

    const decrement = () => {
        if(quantity == 0) return;

        const value = quantity - 1;
        setQuantity(value);
    }

    const addProductToCart = () => {
        if(quantity == 0) return;

        const payload = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0].src,
            quantity: quantity
        }
        
        dispatch(addToCart(dispatch, payload));
        dispatch(incrementCartTotal(payload.price * quantity))
    }
    
    return(
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <ProductWrapper>
                            <ImageWrapper>
                                <Image src={ product.images[0].src } />
                            </ImageWrapper>
                            <Content>
                                <Name>{ product.name }</Name>
                                <Price>&pound;{ product.price }</Price>
                                <QuantityWrapper>
                                    <Quantity increment={ increment } decrement={ decrement } quantity={ quantity } />
                                    <AddToCartButton>
                                         <Button onClick={ addProductToCart }>Add to cart</Button>
                                    </AddToCartButton>
                                </QuantityWrapper>
                                <Description>
                                    { product.description.replace('<p>', '').replace('</p>', '')}
                                </Description>
                            </Content>
                        </ProductWrapper>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}

export default SingleProduct;