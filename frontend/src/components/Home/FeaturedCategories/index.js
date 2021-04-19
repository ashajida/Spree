import { Section, CategoriesWrapper, Container, Wrapper, Heading } from './FeaturedCategories.elements';
import Category from '../../Category';
import { Fragment } from 'react';

const FeaturedCategories = ({ categories }) => {
    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Featured Categories</Heading>
                        <CategoriesWrapper>
                            {
                                categories.map(categoryObj => {
                                    return(<Category key={ categoryObj.id } categoryObj={ categoryObj }/>)
                                })
                            }
                    </CategoriesWrapper>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}

export default FeaturedCategories;