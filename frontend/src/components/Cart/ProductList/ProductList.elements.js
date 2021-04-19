import styled from 'styled-components';

export const Products = styled.div`
    width: 100%;
    padding: 0;
    margin-bottom: 30px;
    @media screen and (min-width: 789px) {
        width: 70%;
        padding: 15px;
        margin-bottom: 0;
    }
    @media screen and (min-width: 969px) {
        width: 50%;
    }
`;

export const Heading = styled.h2`
    text-align: center;
    margin-bottom: 60px;
`;