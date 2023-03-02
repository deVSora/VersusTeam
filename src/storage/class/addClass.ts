import AsyncStorage from "@react-native-async-storage/async-storage"
import { CLASS_COLLECTION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError"
import { getClasses } from "./getClasses"

export async function addClass(classValue : string){    
    try{
        const storedGroups = await getClasses()

        const itemAlreadyExists = storedGroups.includes(classValue)
        
        if(itemAlreadyExists){
            throw new AppError('A turma já existe.')
        }

        const allClasses = JSON.stringify([...storedGroups, classValue])
        await AsyncStorage.setItem(CLASS_COLLECTION, allClasses)
    }
    catch(err){
        throw(err)
    }
}