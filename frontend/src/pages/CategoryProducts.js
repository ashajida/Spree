import { Fragment, useEffect, useState } from 'react';
import WoocommerceApi from '../woocommerce-api';
import { useParams } from 'react-router-dom';
import Products from '../components/CategoryProducts';
import Loading from '../components/Loading';

const CategoryProducts = () => {
    const cachedProducts = localStorage.getItem('productList');
    const [ products, setProducts ] = useState([]);
    const [ showPage, setShowPage ] = useState(false);
    const api = new WoocommerceApi();
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
       
        if(cachedProducts == null) {
            api.getProductsByCategory(id)
            .then(res => {
                setProducts(res.data);
                setShowPage(true);
            });
        } else {
            const products = JSON.parse(cachedProducts).filter(product => {
                if(product.categories[0].id == id) return product;
            });

            setProducts(products);
            setShowPage(true);
        }
      
    }, []);

    if(showPage) {
        return(
            <Fragment>
                <Products products={ products } />
            </Fragment>
        );
    }

    return(
        <Fragment>
            <Loading />
        </Fragment>
    );
}

export default CategoryProducts;