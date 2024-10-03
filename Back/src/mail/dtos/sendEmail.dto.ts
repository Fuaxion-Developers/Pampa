import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { Templates } from "../enums/templates.enum";

export class SendEmailDto {
    @IsString()
    @IsNotEmpty()
    subjectEmail: string;

    @IsString()
    @IsNotEmpty()
    sendTo: string;

    @IsEnum(Templates)
    @IsNotEmpty()
    template: string;

    @IsObject()
    @IsOptional()
    params: any;
}