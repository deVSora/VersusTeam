import styled, {css} from 'styled-components/native'

export type isSelected = boolean

type Props ={
    type : isSelected
}

export const Container = styled.TouchableOpacity<Props>`
    background-color: transparent;
    border: solid 1px;
    border-color: ${({theme, type})=> type ? theme.COLORS.GREEN_500 : 'transparent'};
    border-radius: 4px;
    padding: 8px 12px;
    justify-content: space-between;
    margin-right: 8px;
`

export const Text = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.WHITE};
    `}
`