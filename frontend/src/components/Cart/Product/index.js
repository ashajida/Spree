import Quantity from '../../Quantity';
import { incrementProductQuantity, decrementProductQuantity, removeFromCart } from '../../../actions/cartActions';
import { Fragment, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
    Wrapper,
    ImageWrapper,
    Image,
    Name,
    NameWrapper,
    PriceWrapper,
    Price,
    Icon,
} from './Product.elements';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(product.quantity);
    const [eventToExercute, setEventToExercute] = useState('');

    useEffect(() => {
      if(eventToExercute == 'INCREMENT') { 
        dispatch(incrementProductQuantity(dispatch, {
          ...product, quantity: quantity
        }))
      };
      
      if(eventToExercute == 'DECREMENT') {
        dispatch(decrementProductQuantity(dispatch, {
          ...product, quantity: quantity
        }))
      };

    }, [quantity]);

    const handleIncrement = () => {
      const value = quantity + 1;
      setQuantity(value);
      setEventToExercute('INCREMENT');
    }

    const handleDecrement = () => {
        if(quantity == 0) return;
    
        const value = quantity - 1;
        setQuantity(value);
        setEventToExercute('DECREMENT');
    }

    const removeProduct = () => {
        dispatch(removeFromCart(dispatch, product))
    }

    return(
        <Fragment>
            <Wrapper>
                <ImageWrapper>
                   <Icon onClick={ removeProduct }><FaTimes /></Icon>
                    <Image src={ product.image } />
                </ImageWrapper>
                <NameWrapper>
                     <Name>{ product.name }</Name>
                </NameWrapper>
                <PriceWrapper>
                    <Price>&pound;{ product.price }</Price>
                </PriceWrapper>
                <Quantity increment={ handleIncrement } decrement={ handleDecrement } quantity={ quantity } size='sm' />
            </Wrapper>
        </Fragment>
    );
}

export default Product;