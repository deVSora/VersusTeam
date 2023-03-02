import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const Spinner = styled.ActivityIndicator`

`