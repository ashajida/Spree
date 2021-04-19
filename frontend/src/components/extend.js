import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const Wrapper = styled.div`
    padding: 15px;
`;

export const CtaButton = styled(Link)`
    padding: 20px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid #fff;
    display: inline-block;
    transition: 0.3s background;
    letter-spacing: 3px;
    &:hover {
        background: #000;
        border: 1px solid #000;
    }
`; 

export const Button = styled.button`
    background: #000;
    border: none;
    padding: 17px 15px;
    display: inline;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
`;