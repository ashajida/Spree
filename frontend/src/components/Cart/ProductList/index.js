import {useSelector} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Product from '../Product';
import { Heading, Products} from './ProductList.elements';

const ProductList = ({products}) => {

    const productList = products.map(product => <Product product={ product } key={ product.id }/>);

    return(
        <Fragment>
            <Products>
                <Heading>Cart</Heading>
                { productList }
            </Products>
        </Fragment>
    );

}

export default ProductList;