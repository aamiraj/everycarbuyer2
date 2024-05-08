import EmailTemplate from "@/components/EmailTemplate";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export const sendMail = async (subject: string, user: any, car: any) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const mailOptions = {
    from: `Everycarbuyer ${process.env.NODEMAILER_EMAIL}`,
    to: user?.email,
    subject: subject,
    html: render(EmailTemplate({ ...car, ...user })),
  };

  const info = await transporter.sendMail(mailOptions);

  return info;
};
