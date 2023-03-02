import styled, {css} from 'styled-components/native'
import {TouchableOpacity} from 'react-native'

export type buttonBackgroundColor = 'primaryColor' | 'secondaryColor';

type Props = {
    type ?: buttonBackgroundColor
}

export const Container = styled(TouchableOpacity)<Props>`
    background-color: ${({theme, type})=> type === 'primaryColor' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 16px 0px;
`

export const ButtonText = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.WHITE};
    `}
`