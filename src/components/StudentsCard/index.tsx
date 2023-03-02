import {
    CloseButton,
    CloseIcon,
    Container, 
    NameContainer, 
    Text, 
    UserIcon 
} from "./style";

interface Props{
    name : string
}

export function StudentsCard({name} : Props){
    return(
        <Container>
            <NameContainer>
                <UserIcon/>
                <Text>{name}</Text>
            </NameContainer>
            <CloseButton>
                <CloseIcon/> 
            </CloseButton>
        </Container>
    )
}