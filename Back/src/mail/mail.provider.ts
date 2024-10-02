import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { env } from '../config/envCon';

const OAuth2 = google.auth.OAuth2;

const accountTransport = {
  service: env.mailer.service,
  auth: {
    type: env.mailer.auth.type,
    user: env.mailer.auth.user,
    clientId: env.mailer.auth.clientId,
    clientSecret: env.mailer.auth.clientSecret,
    refreshToken: env.mailer.auth.refreshToken,
    accessToken: "",
  }
}

const mail_pampa = async (callback) => {
  const oauth2Client = new OAuth2(
    accountTransport.auth.clientId,
    accountTransport.auth.clientSecret,
    "https://developers.google.com/oauthplayground",
  );
  oauth2Client.setCredentials({
    refresh_token: accountTransport.auth.refreshToken,
  });
  oauth2Client.getAccessToken((err, token) => {
    if (err)
      return console.log(err);
    accountTransport.auth.accessToken = token;
    callback(nodemailer.createTransport(accountTransport));
  });
}

@Injectable()
export class MailProvider {
    
    private transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });

    async sendEmail(from, subjectEmail, sendTo, html) {
        try {
            const info = await this.transporter.sendMail({
                from, // sender address
                to: sendTo, // list of receivers
                subject: subjectEmail, // Subject line
                html: html, // html body
              });
            
              console.log("Message sent: %s", info.messageId);
        } catch (error) {
            throw error;
        }
    }
}