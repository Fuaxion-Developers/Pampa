import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { MailService } from "./mail.service";
import { SendEmailDto } from "./dtos/sendEmail.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Mail')
@Controller('mail')
export class MailController {
    constructor(
        private mailService: MailService,
    ){}

    @Post('send-mail')
    async sendEmail(@Body() body: SendEmailDto, @Res() res: Response){
        try {
            const response = await this.mailService.sendEmail(body);
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }
}