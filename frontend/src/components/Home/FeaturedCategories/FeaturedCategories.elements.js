import styled from 'styled-components';
import {Container as CategoryContainer, Wrapper as CategoryWrapper } from '../../extend';

export const Section = styled.section`
    padding: 60px 0;
`;

export const Container = styled(CategoryContainer)``;

export const Wrapper = styled(CategoryWrapper)``;

export const CategoriesWrapper = styled.div`
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
