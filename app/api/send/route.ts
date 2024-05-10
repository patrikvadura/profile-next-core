import { EmailTemplate } from '@/app/components/Email/contact-form'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: { body: { name: any; email: any; message: any } }) {
  const { name, email, message } = req.body

  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: '🎉Máte novou zprávu z vašeho webu!',
      react: EmailTemplate({ name, email, message }),
    })

    return { status: 200, body: data }
  } catch (error) {
    // @ts-ignore
    return { status: 500, body: { error: error.message } }
  }
}
