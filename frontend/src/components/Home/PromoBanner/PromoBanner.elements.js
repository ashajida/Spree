import styled from 'styled-components';
import { Container  as BannerContainer, Wrapper as BanWrapper, CtaButton} from '../../extend';


export const Section = styled.section`
    padding: 60px 0;
`;
export const Wrapper = styled(BanWrapper)``;
export const Container = styled(BannerContainer)``;
export const Banners = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 769px) {
        flex-direction: row;
    }
`;
export const BannerWrapper = styled.div`
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    @media screen and (min-width: 769px) {
        width: 30%;
        padding: 15px;
        margin-bottom: 0;
        ${({ size }) => {
            if(size == 'lg') {
                return `
                    width: 70%;
                `;
            }
        }}
    }

`;
export const Banner = styled.div`
    position: relative;
    width: 100%;
    color: #fff;
    text-align: center;
`;
export const ImageWrapper = styled.div`
    width: 100%;
    height: 500px;
`;
export const Content = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 90%;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const HeadingOne = styled.h3`
    font-size: 2rem;
    max-width: 100%;
    text-shadow: 2px 2px 4px #000000;
    margin-bottom: 20px;
`;

export const HeadingTwo = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px #000000;
`;

export const Button = styled(CtaButton)``;