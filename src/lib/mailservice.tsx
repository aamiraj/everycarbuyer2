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

  const info = await transporter.sendMail(mailOptions);

  return info;
};
