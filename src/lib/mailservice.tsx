import EmailTemplate from "@/components/EmailTemplate";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export const sendMail = async (
  subject: string,
  toEmail: string,
  optData: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: render(EmailTemplate(optData)),
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("email sent");
        resolve(info);
      }
    });
  });
};
