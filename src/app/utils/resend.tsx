"use server";

import { Resend } from "resend";

const token = process.env.VITE_RESEND_API;

console.log({ token });

const resend = new Resend(token);

export const sendEmail = async (
  name: string,
  content: string,
  contact: string
) => {
  console.log("Sending email...");
  const { data, error } = await resend.emails.send({
    from: `${name}<no-reply@milopadma.com>`,
    to: ["public@milopadma.com"],
    subject: `<Portfolio> ${name}`,
    html: `<div>Content: <p>${content}</p> <br><br/> Contact: <p>${contact}</p></div>`,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
  return true;
};
