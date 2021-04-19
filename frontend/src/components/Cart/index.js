import { Fragment } from 'react';
import ProductsList from './ProductList'
import CartTotal from './CartTotal';
import {
    Section,
    Container,
    Wrapper
} from './Cart.elements';
import { useSelector } from 'react-redux';
const Cart = () => {

    const products = useSelector(state => state.cart.items);

    return(
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <ProductsList products={ products }/>
                        <CartTotal />
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );

}


export default Cart;