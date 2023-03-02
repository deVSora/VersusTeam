import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 0px 24px;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
`
export const Icon = styled(UsersThree).attrs(({theme}) => ({
    size: 56,
    color: theme.COLORS.GREEN_500,
    weigth: 'bold',
}))`
    margin-top: 132px;
    align-self: center;
`