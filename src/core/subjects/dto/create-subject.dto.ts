import { IsNotEmpty } from "class-validator";



export class CreateSubjectDto {

    @IsNotEmpty()
    subject_name: string;

    @IsNotEmpty()
    description: string

    classes: string[]
}
