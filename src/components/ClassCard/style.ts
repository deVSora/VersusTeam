import styled, {css} from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'
import {TouchableOpacity}  from 'react-native'

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.GRAY_500};
    padding: 28px;
    border-radius: 6px;
    margin-bottom: 12px;
`

export const Icon = styled(UsersThree).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_500,
    weight: 'fill',
    size: 32,
}))`
    margin-right: 20px;
`

export const ClassTitle = styled.Text`
    ${({theme})=> css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG};
    `}
`