import { Column } from "typeorm";

export class CreateUserDto {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    phone: string;
    url: string;
  
}
