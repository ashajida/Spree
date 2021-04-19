import {
    Container,
    ProductWrapper,
    ProductLink,
    ImageWrapper,
    Image,
    Name,
    Text,
    Price,
    Button

} from './Product.elements';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, incrementCartTotal } from '../../actions/cartActions';

const Product = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
      e.preventDefault();
      const payload = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0].src,
        quantity: 1
      }

      dispatch(addToCart(dispatch, payload));

      dispatch(incrementCartTotal(payload.price)) 
    }

    return(
        <Fragment>
            <Container>
                <ProductWrapper>
                    <ProductLink to={ `/products/${ product.id }` }>
                        <ImageWrapper>
                            <Image src={ product.images[0].src } />
                        </ImageWrapper>
                        <Name>
                             <Text>{ product.name }</Text>
                        </Name>
                        <Price>
                            <Text>&pound;{ product.price }</Text>
                        </Price>
                    </ProductLink>
                    <Button onClick={ handleAddToCart }>Add to Cart</Button>
                </ProductWrapper>
            </Container>
        </Fragment>
    );
}

export default Product;