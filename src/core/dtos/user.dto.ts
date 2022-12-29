import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { UserRoles } from "../enums";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(UserRoles)
    @IsNotEmpty()
    role: UserRoles;
}