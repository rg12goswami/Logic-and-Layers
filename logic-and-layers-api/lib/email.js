import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Emails you (NOTIFY_EMAIL) whenever a new inquiry comes in.
 *
 * FROM_EMAIL must be an address on a domain you've verified in Resend,
 * OR the Resend sandbox address "onboarding@resend.dev" while testing —
 * the sandbox address can only send to the email you signed up to Resend
 * with, which is fine for this use case since you're emailing yourself.
 */
export async function sendInquiryNotification(inquiry) {
  const { name, email, company, projectType, budget, description } = inquiry;

  await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: process.env.NOTIFY_EMAIL,
    replyTo: email,
    subject: `New inquiry: ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Project type: ${projectType}`,
      `Budget: ${budget}`,
      "",
      "Description:",
      description,
    ].join("\n"),
  });
}
