import { Injectable } from "@nestjs/common";
import { MailProvider } from "./mail.provider";
import { SendEmailDto } from "./dtos/sendEmail.dto";

@Injectable()
export class MailService {
    constructor(
        private mailProvider: MailProvider,
    ){}

    async sendEmail(body: SendEmailDto){
        try {
            const { from, subjectEmail, sendTo } = body;
            const html = this.getTemplate(body)
            await this.mailProvider.sendEmail(from, subjectEmail, sendTo, html);
        } catch (error) {
            throw error;
        }
    }

    private getTemplate(body){
        const template = this.getTemplateFile(body.template);
        const html = template.fillTemplate(body);
        return html;
    }

    private getTemplateFile(template) {
        const path = "./templates";
        const templateFile = require(`${path}/${template}`);
        return templateFile;
    }
}