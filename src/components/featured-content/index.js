import React from 'react'
import FeaturedTech from '../featured-tech'
import { FeaturedContentWrap } from './style'
import { Container } from 'reactstrap'

const FeaturedContent = () => (
    <FeaturedContentWrap>
        <Container>
            <FeaturedTech />
        </Container>
    </FeaturedContentWrap>
)

export default FeaturedContent
