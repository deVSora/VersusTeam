import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { ScreenIntro } from '@components/ScreenIntro'
import { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import {
    Container,
    TeamContainer,
    Counter,
    InputContainer,
    Icon,
    TouchableIcon
} from './style'
import { TeamFilter } from '@components/TeamFilter'
import { StudentsCard } from '@components/StudentsCard'
import {useRoute, useNavigation} from '@react-navigation/native'
import { addStudent } from '@storage/student/addStudent'
import { AppError } from '@utils/AppError'
import { selectStudentsByClassAndTeam } from '@storage/student/selectStudentsByClassAndTeam'
import { studentDTO } from '@storage/student/studentDTO'
import { teams } from '@utils/index'
import theme from '@theme/index'
import { RemoveClass } from '@storage/class/removeClass'
import { SelectStudentByClass } from '@storage/student/selectStudentByClass'

export function ClassDetail(){
    const [team, setTeam] = useState(teams)
    const [studentName, setStudentName] = useState('')
    const [students, setStudents] = useState<studentDTO[]>([])
    const [activated, setActivated] = useState('TIME A')

    type RouteParams = {
        teamName : string
    }
    
    const navigation = useNavigation()

    const route = useRoute();

    const { teamName } = route.params as RouteParams;

    async function fetchStudentsByTeam(){
        try{
            const studentsByTeam = await selectStudentsByClassAndTeam(teamName, activated)            
            setStudents(studentsByTeam)
        }
        catch(err){
            console.log(err)
            Alert.alert('Alunos', 'Não foi possível carregar os alunos do time selecionado')
        }
    }

    async function classRemove(){
        try {
            await RemoveClass(teamName)
            navigation.navigate('classList')
        }
        catch(err){
            console.log(err)
            Alert.alert('Remover Turma', 'Não foi possível remover a turma')
        }
    }

    async function handleClassRemove(){
        Alert.alert(
            'Remover',
            'Desejar remover a turma?',
            [
                { text: 'Não', style: 'cancel'},
                { text: 'Sim', onPress: () => classRemove()}
            ]
        )
    }

    async function handleAddPlayer(){
        if(studentName.trim().length === 0){
            return Alert.alert('Novo Aluno', 'Informe o nome do aluno para adicionar')
        }

        const newStudent = {
            name: studentName,
            team: activated
        }

        console.log(newStudent, teamName)

        try{
            await addStudent(newStudent, teamName)
            fetchStudentsByTeam()
            setStudentName('')
        }
        catch(err){
            if( err instanceof AppError){
                Alert.alert('Novo Aluno', err.message)
            } else{
                console.log(err)
                Alert.alert('Novo Aluno', 'Não foi possível adicionar')
            }
        }
    }

    useEffect(()=>{fetchStudentsByTeam()},[activated])

    return(
        <Container>
            <Header backButton/>
            <ScreenIntro title={teamName} subTitle='Adicione a galera e separe os times'/>
            <InputContainer>
                <Input placeholder='Nome do participante' 
                value={studentName} 
                onSubmitEditing={handleAddPlayer}
                 style={{flexGrow:1}}
                 returnKeyType='done'
                 autoCorrect={false} 
                 onChangeText={setStudentName} />
                <TouchableIcon onPress={handleAddPlayer}>
                    <Icon size={24} color={theme.COLORS.GREEN_700}></Icon>
                </TouchableIcon>
            </InputContainer>
            <TeamContainer>
                <FlatList
                    horizontal
                    data={ team }
                    keyExtractor={ item => item.teamName }
                    renderItem={ item => <TeamFilter 
                                            teamTitle={item.item.teamName} 
                                            onPress={() => setActivated(item.item.teamName)} 
                                            isSelected={activated === item.item.teamName}/>
                                }/>
                <Counter>
                    { students.filter(el => el.name).length }
                </Counter>
            </TeamContainer>
            <FlatList
                data={students}
                keyExtractor = { item  => item.name }
                renderItem = { item => <StudentsCard name={item.item.name}/>}
            />
            <Button handleClick={handleClassRemove} buttonText='Remover turma' backgroundColor='secondaryColor'/>
        </Container>
    )
}