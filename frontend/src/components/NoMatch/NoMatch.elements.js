import styled from "styled-components"
import { Link as NavLink } from 'react-router-dom';
import {Container as ContentContainer, Wrapper as ContentWrapper} from '../extend';

export const Section = styled.section`
    padding: 200px 0;
    text-align: center;
`;
export const Container = styled(ContentContainer)``;
export const Wrapper = styled(ContentWrapper)``;
export const Links = styled.div`
    margin-bottom: 40px;
`;
export const Link = styled(NavLink)`
    text-decoration none;
    display: block;
    margin-bottom: 20px;
`;
export const Heading = styled.h1`
    font-size: 2rem;
    width: 100%;
    @media screen and (min-width: 768px) {
        font-size: 4rem;
    }
`;