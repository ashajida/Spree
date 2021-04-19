import SingleProduct from '../components/SingleProduct';
import { Fragment, useEffect, useState } from 'react';
import WoocommerceApi from '../woocommerce-api';
import {
    useParams
  } from "react-router-dom";
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';

const Product = () => {
    const api = new WoocommerceApi();
    const [ product, setProduct ] = useState({});
    const products = useSelector(state => state.products.products );
    const [ showPage, setShowPage ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        if(products.length > 0) {
            const result = products.filter(product => {
                if(product.id == id) {
                    return product;
                }
            })

            setProduct(result[0]);
            setShowPage(true);
        } else {
            api.getProduct(id)
            .then(res => {
                setProduct(res.data);
                setShowPage(true);
            });    
        }
       
    }, []);

    if(showPage) {
        return(
            <Fragment>
                <SingleProduct product={product} />
            </Fragment>
        );
    }
    
    return(
        <Fragment>
            <Loading />
        </Fragment>
    );
}


export default Product;