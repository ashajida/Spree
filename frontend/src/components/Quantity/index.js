import { Fragment } from 'react';
import { QuantityWrapper, Icon, Number, Container } from './Quantity.elements';
import { GrAdd, GrSubtract } from 'react-icons/gr';

const Quantity = ({ increment, decrement, quantity, size }) => {
    return(
        <Fragment>
            <Container>
                <QuantityWrapper>
                    <Icon onClick={ increment } size={ size }><GrAdd /></Icon>
                        <Number size={ size }>{ quantity }</Number>
                    <Icon onClick={ decrement } size={ size }><GrSubtract /></Icon>
                </QuantityWrapper>
            </Container>
        </Fragment>
    );
}

export default Quantity;