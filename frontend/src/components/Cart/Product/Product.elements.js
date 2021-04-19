import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    position: relative;
    @media screen and (min-width: 768px) {
        width: 150px;
        height: 150px;
        margin-bottom: 0;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const NameWrapper = styled.div`

`;

export const Name = styled.span`
    display: block;
    padding: 10px;
`;

export const PriceWrapper = styled.div`

`;

export const Price = styled.span`
    display: block;
    padding: 10px;
    width: 77px;
`;

export const Icon = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    color: #000;
    border-radius: 50%;
    background: #fff;
    height: 30px;
    width: 30px;
    text-align: center;
    padding: 7px 0;
    box-shadow: 1px 2px 2px 2px #000;
    cursor: pointer;
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;