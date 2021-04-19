import styled from 'styled-components';
import { Container as CartContainer, Wrapper as CartWrapper } from '../extend';

export const Section = styled.section`
    padding-bottom: 90px;
    padding-top: 150px;
`;
export const Container = styled(CartContainer)``;
export const Wrapper = styled(CartWrapper)`
    { CartWrapper }
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;