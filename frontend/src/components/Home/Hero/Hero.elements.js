import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CtaButton } from '../../extend';

export const Section = styled.section`
    position: reletive;
`;

export const HeroWrapper = styled.div``;

export const HeroImageWrapper = styled.div``;

export const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
`;

export const HeroContent = styled.div`
    position: absolute;
    max-width: 600px;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 4px #000000;
    text-align: center;
`;

export const Heading = styled.h1`
    color: #fff;
    margin-bottom: 60px;
    font-size: 3rem;
    font-weight: 400;
    ${({ sm }) => {
        if(sm) {
            return `
                font-size: 2rem;
                margin-bottom: 60px;
            `;
        }
    }}

    @media screen and (min-width: 768px) {
        font-size: 5rem;
        ${({ sm }) => {
            if(sm) {
                return `
                    font-size: 3rem;
                    // margin-bottom: 20px;
                `;
            }
        }}
    }
`;

export const Button = styled(CtaButton)``;

