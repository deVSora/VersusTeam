import styled, {css} from 'styled-components/native'
import { TextInput, TouchableOpacity } from 'react-native'

export const Container = styled(TextInput)`
    ${({theme})=> css`
        background-color: ${theme.COLORS.GRAY_700};
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR}
    `}
    padding: 16px;
    border-radius: 6px;
    max-width: 100%;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: space-between;
`