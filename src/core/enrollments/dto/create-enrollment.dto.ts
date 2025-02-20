import { IsNotEmpty } from "class-validator";



export class CreateEnrollmentDto {

    @IsNotEmpty()
    subject_class_id: string;

    @IsNotEmpty()
    student_id: string

    enrollment_date: Date

}
