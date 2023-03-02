import styled, {css} from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Plus } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
    padding: 0px 24px;
`

export const Icon = styled(Plus)``

export const TeamContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const TouchableIcon = styled.TouchableOpacity`
    position: absolute;
    padding: 10px;
    right: 10px;
    top: 10px;
`

export const Counter = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const ButtonSubmit = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
`