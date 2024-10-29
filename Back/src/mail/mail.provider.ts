import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { env } from '../config/envCon';

const oAuth2Client = new google.auth.OAuth2(
  env.mailer.auth.clientId,
  env.mailer.auth.clientSecret,
  'https://developers.google.com/oauthplayground',
);
oAuth2Client.setCredentials({ refresh_token: env.mailer.auth.refreshToken });

@Injectable()
export class MailProvider {

  async sendEmail(subjectEmail, sendTo, html) {
    try {
      // const accessToken = await oAuth2Client.getAccessToken();

      // const transport = nodemailer.createTransport({
      //   service: env.mailer.service,
      //   auth: {
      //     type: env.mailer.auth.type,
      //     user: env.mailer.auth.user,
      //     clientId: env.mailer.auth.clientId,
      //     clientSecret: env.mailer.auth.clientSecret,
      //     refreshToken: env.mailer.auth.refreshToken,
      //     accessToken,
      //   }
      // });
      
      const transport = nodemailer.createTransport({
        host: env.mailer.host,
        port: 465,
        secure: true,
        auth: {
          user: env.mailer.auth.user,
          pass: env.mailer.auth.pass,
        }
      });

      const info = await transport.sendMail({
        to: sendTo, // list of receivers
        subject: subjectEmail, // Subject line
        html: html, // html body
      });

      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      throw error;
    }
  }
}
