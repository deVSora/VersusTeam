import theme from '@theme/index'
import {
    Container,
    Spinner
} from './style'

export function Loading(){
    return(
        <Container>
            <Spinner color={theme.COLORS.GREEN_500}/>
        </Container>
    )
}