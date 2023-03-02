import AsyncStorage from "@react-native-async-storage/async-storage";
import { STUDENT_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { studentDTO } from "./studentDTO";
import { SelectStudentByClass } from "./selectStudentByClass";

export async function addStudent(newStudent : studentDTO, className : string){
    try{
        const storedStudents = await SelectStudentByClass(className)

        const studentAlreadyExists = storedStudents.filter(students => students.name === newStudent.name)

        if(studentAlreadyExists.length > 0){
            throw new AppError('Essa pessoa já está adicionada neste time')
        }

        const storage = JSON.stringify({...storedStudents, newStudent})

        await AsyncStorage.setItem(`${STUDENT_COLLECTION}-${className}`, storage)
    }
    catch(err){
        throw(err)
    }
}