import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Button as AddToCartBtn} from '../extend';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    @media screen and (min-width: 768px) {
        width: 50%;
    }

    @media screen and (min-width: 969px) {
        width: 25%;
    }
`;
export const ProductWrapper = styled.div``;
export const ProductLink = styled(Link)`
    displau: block;
    text-decoration: none;
    color: #000;
    transition: 0.3s;

    &:hover {
        color: #ccc;
        img {
            transform: scale(1.5);
        }
    }

   

`;
export const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    margin-bottom: 20px;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s;
`;
export const Name = styled.div`
    margin-bottom: 20px;
`;
export const Text = styled.p`
    font-weight: bold;
    margin-bottom: 20px;
`;
export const Price = styled.div``;
export const Button = styled(AddToCartBtn)``;