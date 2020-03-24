import styled from 'styled-components'

export const HeroSectionWrap = styled.div`
    min-height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    background: #323232;
    color: #f3f3f3;
    
    h1{
        margin: 0 0 .5rem 0;
        font-size: 3.8rem;
        font-weight: 700;
    }

    p{
        margin: 0;
        font-size: 1.3rem;
        font-weight: 200;
        font-style: italic;
    }
`