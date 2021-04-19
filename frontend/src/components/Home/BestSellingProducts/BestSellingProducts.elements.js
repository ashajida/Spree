import styled from 'styled-components';
import {Container as ProductContainer, Wrapper as ProductWrapper } from '../../extend';

export const Section = styled.section`
    padding: 60px 0;
`;

export const Wrapper = styled(ProductWrapper)``;

export const Container = styled(ProductContainer)``;

export const Products = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Heading = styled.h2`
    text-align: center;
    margin-bottom: 60px;
`;

export const Button = styled.button`
    border: 1px solid #ccc;
    background: #fff;
    display: block;
    padding: 10px 15px;
    height: 35px;
    flex-direction: column;
    margin: auto 0;
    cursor: pointer;
`;