import { Fragment } from 'react';
import image from './assets/images/loading.gif';
import { ImageWrapper, Image, Section } from './elements';

const Loading = () => {
    return(
        <Fragment>
            <Section>
                <ImageWrapper>
                    <Image src={ image }/>
                </ImageWrapper>
            </Section>
        </Fragment>
    );
}

export default Loading;