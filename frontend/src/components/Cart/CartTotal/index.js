import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
    Wrapper,
    Heading,
    SubTotal,
    ShippingMethod,
    Total,
    Button,
    Text
} from './CartTotal.elements';

const CartTotal = () => {
    let totalPrice = useSelector(state => state.cart.totalPrice);

    return(
        <Fragment>
            <Wrapper>
                <Heading>Order Summary</Heading>
                <SubTotal>
                    <Text>Subtotal</Text>
                    <Text>&pound;{ totalPrice }</Text>
                </SubTotal>
                <ShippingMethod>
                    <Text>Shipping</Text>
                    <Text>Free</Text>
                </ShippingMethod>
                <Total>
                    <Text>Total</Text>
                    <Text>&pound;{ totalPrice }</Text>
                </Total>
                <Button>Checkout</Button>
            </Wrapper>
        </Fragment>
    );
}

export default CartTotal;
