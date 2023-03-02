import AsyncStorage from "@react-native-async-storage/async-storage";

import { CLASS_COLLECTION, STUDENT_COLLECTION } from '@storage/storageConfig'

import { getClasses } from "./getClasses";

export async function RemoveClass(targetClass : string){
    try{
        const storedClasses = await getClasses()
        const classes = storedClasses.filter( classEl => classEl !== targetClass)

        await AsyncStorage.setItem(CLASS_COLLECTION, JSON.stringify(classes))
        await AsyncStorage.removeItem(`${STUDENT_COLLECTION}-${targetClass}`)
    }
    catch(err){
        throw err
    }
}