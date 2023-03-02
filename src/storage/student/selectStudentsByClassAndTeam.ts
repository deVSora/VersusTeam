import { SelectStudentByClass } from "./selectStudentByClass";

export async function selectStudentsByClassAndTeam(className: string, team: string){
    try{
        const storage = await SelectStudentByClass(className)
        
        const students = storage.filter(student => student.team === team)

        return students
    }
    catch(err){
        throw err
    }
}