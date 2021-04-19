import {
    Section,
    Wrapper,
    Banners, 
    BannerWrapper, 
    Banner, 
    ImageWrapper, 
    Image,
    Container,
    Content,
    HeadingOne,
    HeadingTwo,
    Button
} from './PromoBanner.elements';

const PromoBanner = ({ data }) => {
    return(
        <Section>
            <Container>
                <Wrapper>
                    <Banners>
                        { data.map(data => {
                            const { image, heading_one, heading_two, size } = data;
                            return(
                                <BannerWrapper size={ size }>
                                    <Banner>
                                        <ImageWrapper>
                                            <Image src={ image } />
                                        </ImageWrapper>
                                        <Content>
                                            <HeadingOne>{ heading_one }</HeadingOne>
                                            <HeadingTwo>{ heading_two }</HeadingTwo>
                                            <Button>Shop Now</Button>
                                        </Content>
                                    </Banner>
                                </BannerWrapper>
                            );
                        }) }
                     </Banners>
                </Wrapper>
            </Container>
        </Section>
    );
}

export default PromoBanner;