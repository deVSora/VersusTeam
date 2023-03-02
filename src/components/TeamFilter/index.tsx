import { TouchableOpacityProps } from 'react-native'
import {
    Container,
    Text,
    isSelected
} from './style'

type Props = TouchableOpacityProps &{
    isSelected ?: isSelected
    teamTitle : string
}

export function TeamFilter({isSelected = false, teamTitle, ...rest} : Props){
    return (
        <Container {...rest} type={isSelected}>
            <Text>{teamTitle}</Text>
        </Container>
    )
}