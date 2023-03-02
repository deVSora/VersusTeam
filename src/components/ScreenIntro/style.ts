import styled, {css} from 'styled-components/native'

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    margin-bottom: 32px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL};
        color: ${theme.COLORS.WHITE};
    `}
`

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_300};
    `}
`