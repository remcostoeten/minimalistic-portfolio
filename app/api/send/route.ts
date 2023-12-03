import { EmailTemplate } from "@/components/email-template";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { firstName, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Contact Form Submission',
      react: EmailTemplate({ firstName, message }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};