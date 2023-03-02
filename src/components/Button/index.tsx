import { TouchableOpacityProps } from 'react-native'
import {
    Container,
    buttonBackgroundColor,
    ButtonText
} from './style'



type Props = TouchableOpacityProps & {
    buttonText : string,
    backgroundColor ?: buttonBackgroundColor
    handleClick: () => void
}

export function Button({buttonText, handleClick, backgroundColor = 'primaryColor', ...rest} : Props){
    return (
        <Container type={backgroundColor} onPress={handleClick} {...rest}>
            <ButtonText>{buttonText}</ButtonText>
        </Container>
    )
}