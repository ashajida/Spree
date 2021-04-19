import styled from 'styled-components';
import {
    Container as ShopContainer,
    Wrapper as ShopWrapper 
} from '../extend';

export const Container = styled(ShopContainer)``;

export const Wrapper = styled(ShopWrapper)``;

export const Heading = styled.h2`
    text-align: center;
    margin-bottom: 60px;
`;
export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 90px;
`;
export const Products = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
