import { IsNotEmpty } from "class-validator";



export class CreateClassDto {
    @IsNotEmpty()
    class_name: string;

    @IsNotEmpty()
    class_room_number: string;

    @IsNotEmpty()
    teacher_id: string


}
