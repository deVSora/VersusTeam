import { useState, useCallback } from 'react'

import { Container } from './style'

import { Header } from '@components/Header' 
import { ScreenIntro } from '@components/ScreenIntro'
import { ClassCard } from '@components/ClassCard'
import { Alert, FlatList } from 'react-native'
import { Button } from '@components/Button'

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getClasses } from '@storage/class/getClasses'

export function ClassList(){
    const [classes, setClasses] = useState<string[]>()
    const navigation = useNavigation();

    function handleNewItem(){
        navigation.navigate('newClass')
    }

    async function fetchClasses(){
        try{
            const tempClasses = await getClasses()
            setClasses(tempClasses)
        }
        catch(err){
            console.log(err)
            Alert.alert('Turmas', 'Não foi possível carregar as turmas')
        }
    }

    function handleItemClick(className : string){
        navigation.navigate('classDetail', { teamName : className})
    }

    useFocusEffect(useCallback(()=> {
        fetchClasses()
    }, []))

    return (
        <Container>
            <Header/>
            <ScreenIntro title='Turmas' subTitle='Jogue com a sua turma'/>
            <FlatList 
                data={classes}
                keyExtractor={item => item}
                renderItem={item =>  <ClassCard handleClass={()=> handleItemClick(item.item)} classTitle={item.item}/>}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <ScreenIntro title='' subTitle='Não tem turmas registradas'/>
                }
            />
            <Button handleClick={handleNewItem} buttonText='Criar nova turma'/>
        </Container>
    )
}