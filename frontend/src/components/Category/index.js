import { CategoryWrapper, ImageWrapper, Image, ContentWrapper, Heading, SmHeading,  Category as Link } from './Category.elements';
import { Fragment } from 'react';

const Category = ({ categoryObj }) => {
    return (
        <Fragment>
            <CategoryWrapper>
                <Link to={`/categories/${categoryObj.id}`}>
                    <ImageWrapper>
                        <Image src={ categoryObj.image.src } />
                    </ImageWrapper>
                    <ContentWrapper>
                        <Heading>{ categoryObj.name }</Heading>
                        <SmHeading>{ categoryObj.count }</SmHeading>
                    </ContentWrapper>
                </Link>
            </CategoryWrapper>
        </Fragment>
    );
}

export default Category;