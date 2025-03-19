import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log(body);

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Faltó completar alguno de los campos' },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Espacio Constitucional <info@espacioconstitucional.com>`,
      to: 'info@espacioconstitucional.com',
      subject: 'Mensaje desde espacioconstitucional.com',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json(
        {
          message: 'Error enviando el mensaje. Por favor, intenta nuevamente',
          error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Mensaje enviado con éxito', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error enviando mensaje', error);
    return NextResponse.json(
      { message: 'Error enviando mensaje', error },
      { status: 500 }
    );
  }
}
