import AsyncStorage from "@react-native-async-storage/async-storage";
import { CLASS_COLLECTION } from '@storage/storageConfig'

export async function getClasses(){
    try{
        const storage = await AsyncStorage.getItem(CLASS_COLLECTION)
        const classGroup : string[] = storage ? JSON.parse(storage) : []

        return classGroup
    }
    catch(err){
        console.log(err)
    }
}