import { IsNotEmpty } from "class-validator";



export class CreateRoleDto {
    @IsNotEmpty()
    role_name: string;

    @IsNotEmpty()
    role_unique_name: string;

}
