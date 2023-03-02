import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { ScreenIntro } from '@components/ScreenIntro'
import {
    Container,
    Icon
} from './style'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'
import { addClass } from '@storage/class/addClass'


export function NewClass(){
    const [teamName, setTeamName] = useState('')
    const navigation = useNavigation()
    
    async function handleNew(){
        try{
            if (teamName.trim() === ''){
               return Alert.alert('Nova Turma','O nome da turma não pode estar vazio') 
            }
            if (teamName.length > 18 ){
               return Alert.alert('Nova Turma','O nome da turma não pode exceder 18 caracteres')
            } 

            await addClass(teamName)
            navigation.navigate('classList')
        }
        catch(err){
            if (err instanceof AppError){
                Alert.alert('Nova Turma', err.message)
            } else {
                Alert.alert('Nova Turma','Não foi possível criar a nova turma');
                console.log(err)
            }
        }
    }

    return(
        <Container>
            <Header backButton/>
            <Icon/>
            <ScreenIntro title='Nova Turma' subTitle='`Crie uma turma para adicionar pessoas'/>
            <Input placeholder='Nome da turma' onChangeText={setTeamName}/>
            <Button buttonText='Criar' handleClick={handleNew}/>
        </Container>
    )
}