import { IsNotEmpty } from "class-validator";



export class CreateTeacherDto {
    @IsNotEmpty()
    teacher_name: string;

    @IsNotEmpty()
    specialization: string;

    user_id: string


}
