import { ClassTitle, Container, Icon } from "./style";

type Props = {
    classTitle : string
    handleClass : () => void
}

export function ClassCard({classTitle, handleClass} : Props){
    return(
        <Container onPress={handleClass}>
            <Icon/>
            <ClassTitle>{classTitle}</ClassTitle>
        </Container>
    )
}