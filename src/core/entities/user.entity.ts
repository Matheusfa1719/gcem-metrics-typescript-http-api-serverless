import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { UserRoles } from "../enums";

export class User {
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
