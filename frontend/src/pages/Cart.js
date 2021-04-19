import { useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    },[]);

    return ( 
      <Fragment>
        <Cart />
      </Fragment>
    );
}

export default CartPage;