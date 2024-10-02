import { Module } from "@nestjs/common";
import { MailController } from "./mail.controller";
import { MailService } from "./mail.service";
import { MailProvider } from "./mail.provider";

@Module({
    imports: [],
    controllers: [MailController],
    providers: [MailService, MailProvider]
})
export class MailModule {}