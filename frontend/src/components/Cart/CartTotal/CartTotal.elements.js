import styled from 'styled-components';
import { Button as CheckOutBtn } from '../../extend';

export const Wrapper = styled.div`
    width: 100%;
    padding: 0;
    @media screen and (min-width: 768px) {
        width: 50%;
        padding: 15px;
    }
`;
export const Heading = styled.h2`
    margin-bottom: 60px;
`;

export const SubTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;
export const ShippingMethod = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;
export const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;
export const Button = styled(CheckOutBtn)`
    ${ CheckOutBtn }
    display: block;
    width: 100%;
    @media screen and (min-width: 768px) {
        display: inline;
        width: auto;
    }
    
`;

export const Text = styled.span`
    display: inline-block;
    font-size: 1.2rem;
`;