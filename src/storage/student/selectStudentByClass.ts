import AsyncStorage from "@react-native-async-storage/async-storage";
import { STUDENT_COLLECTION } from "@storage/storageConfig";
import { studentDTO } from "./studentDTO";

export async function SelectStudentByClass(className : string){
    try{
        const storage = await AsyncStorage.getItem(`${STUDENT_COLLECTION}-${className}`)
        const students : studentDTO[] = storage ? JSON.parse(storage) : [];
        
        return students
    }
    catch(err){
        throw err
    }

}