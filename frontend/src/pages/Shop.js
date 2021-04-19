import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import { useEffect, Fragment } from 'react';
import Shop from '../components/shop';

const ShopPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts(dispatch));
  }, []);
 
  return (
        <Fragment>
          <Shop products={ products }/>
        </Fragment>
  );
}

export default ShopPage;