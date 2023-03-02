import { Plus, User } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, {css} from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme})=> theme.COLORS.GRAY_500};
    align-items: center;
    padding: 15px 16px 15px 13px;
    margin-bottom: 14px;
    border-radius: 6px;
`

export const UserIcon = styled(User).attrs(({theme}) => ({
    size : 24,
    color : theme.COLORS.GRAY_200,
    weight : "fill",
}))`
    margin-right: 4px;
`
export const NameContainer = styled.View`
    flex-direction: row;
`

export const Text = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const CloseButton = styled(TouchableOpacity)``

export const CloseIcon = styled(Plus).attrs(({theme}) => ({
    size : 24,
    color : theme.COLORS.RED_DARK,
}))`
    transform: rotate(45deg);
`