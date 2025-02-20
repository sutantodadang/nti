import { IsNotEmpty } from "class-validator";



export class CreateStudentDto {
    @IsNotEmpty()
    student_name: string;

    @IsNotEmpty()
    student_grade: string;

    user_id: string
}
