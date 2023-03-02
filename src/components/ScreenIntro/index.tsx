import {
    Container, Subtitle, Title
} from './style'

interface Props{
    title : string;
    subTitle : string;
}

export function ScreenIntro({title, subTitle} : Props){
    return(
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subTitle}</Subtitle>
        </Container>
    )
}