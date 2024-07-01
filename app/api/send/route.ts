import { EmailTemplate } from '@/app/components/Email/contact-form'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message, recipient } = await req.json()

    // @ts-ignore
    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: [recipient],
      subject: '🎉Máte novou zprávu z vašeho webu!',
      react: EmailTemplate({ name, email, message }),
    })

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 })
    }

    return new Response(JSON.stringify(data))
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}
