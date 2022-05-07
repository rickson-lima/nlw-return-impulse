import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "./../mail.adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "55249df5113f9e",
    pass: "11190d671ac14c",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Rickson Lima <lima.rickson20@gmail.com>",
      subject,
      html: body,
    });
  }
}
