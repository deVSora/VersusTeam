import {
    Container,
    Logo,
    Icon,
    BackButton
} from './style'
import { useNavigation } from '@react-navigation/native'
import logoImg from '@assets/logo.png'

type Props = {
    backButton ?: boolean;
}

export function Header( {backButton} : Props){
    const navigation = useNavigation()
 
    function handleBack(){
        navigation.navigate('classList');
    }

    return (
        <Container>
            {backButton && <BackButton onPress={handleBack}><Icon/></BackButton>}
            <Logo source={logoImg}/>
        </Container>
    )
}