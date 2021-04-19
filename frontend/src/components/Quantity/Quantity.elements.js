import styled from 'styled-components';

export const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
`;

export const Icon = styled.div`
    padding: 15px;
    border: 1px solid #000;
    cursor: pointer;
    ${({ size }) => {
        if(size == 'sm') {
            return`
                padding-top: 10px;
                padding-bottom: 10px
            `;
        }
    }}
`;

export const Number = styled.span`
    padding: 15px 20px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    display: inline-block;
    ${({ size }) => {
        if(size == 'sm') {
            return`
                padding-top: 10px;
                padding-bottom: 10px
            `;
        }
    }}
`;

export const Container = styled.div`

`;