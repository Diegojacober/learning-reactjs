import styled from 'styled-components'

export const Title = styled.h1`
    & {
        color: ${props => props.isRed ? 'red' : '#000'}
    }
    

    & small{
        color: blue;
        margin-left: 10px;
    }
` 
