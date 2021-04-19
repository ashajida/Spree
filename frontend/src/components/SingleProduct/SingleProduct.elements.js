import styled from 'styled-components';
import { 
    Container as ContentContainer,
    Wrapper as ContentWrapper,
    Button as AddToCartBtn 
} from '../extend';

export const Container = styled(ContentContainer)``;

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 90px
`;
export const Wrapper = styled(ContentWrapper)``;

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 15px;
        justify-content: space-between;
    }
`;
export const ImageWrapper = styled.div`
    width: 100%;
    height: 500px;
    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        width: 42%;
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
export const Content = styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 55%;
    }
`;
export const Name = styled.p`
    font-weight: bold;
    margin-bottom: 30px;
    font-size: 1.2rem;
`;
export const Price = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 30px;
`;


export const Button = styled(AddToCartBtn)`
    background: #000;
    border: none;
    padding: 17px 15px;
    display: inline;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
`;
export const Description = styled.p``;

export const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

export const AddToCartButton = styled.div`

`;