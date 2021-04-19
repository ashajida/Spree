import image from './assets/images/loading.gif';
import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const ImageWrapper = styled.div`
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

export const Section = styled.section`
    padding: 100px 0;
    height: 100vh;
    width: 100%;
    position: relative;
`;