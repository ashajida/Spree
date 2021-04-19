import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryWrapper = styled.div`
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        padding: 15px;
        margin-bottom: 0px;
    }
`;

export const Category = styled(Link)`
    position: relative;
    height: 300px;
    text-decoration: none;
    display: block;
    &:hover {
        img {
            transform: scale(1.5);
        }
    }

`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.3s;
`;

export const ContentWrapper = styled.div`
    position: absolute;
    display: inline-block;
    transform: translateX(-50%);
    color: #fff;
    left: 50%;
    bottom: 0;
    width: 90%;
    padding 20px 0;
`;

export const Heading = styled.h3`
    text-shadow: 2px 2px 4px #000000;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
`;

export const SmHeading = styled.h4`
    text-shadow: 2px 2px 4px #000000;
    font-size: 1.2rem;
    text-align: center;
`;


