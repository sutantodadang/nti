import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterUser {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    user_name: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    role_id: string;
}

export class LoginUser {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}   