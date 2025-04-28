import { NextRequest, NextResponse } from 'next/server';

import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-pool';

import { ConsultationFormSchema } from '@schemas';

export async function POST(req: NextRequest) {
    const host = process.env['EMAIL_HOST'];
    const port = process.env['EMAIL_PORT'];
    const user = process.env['EMAIL_USER'];
    const pass = process.env['EMAIL_PASS'];
    const receiver = process.env['EMAIL_RECEIVER'];

    if (!user || !host || !port || !pass) {
        return NextResponse.json({ error: true, message: 'Check env!' }, { status: 400 });
    }

    const parsedBody = ConsultationFormSchema.safeParse(await req.json());

    if (!parsedBody.success) {
        return NextResponse.json(
            { error: true, message: 'Form validation failed!' },
            { status: 400 }
        );
    }

    const transporter: Transporter<SMTPTransport.SentMessageInfo> = nodemailer.createTransport({
        auth: {
            pass: pass,
            user: user,
        },
        host: host,
        port: Number(port),
        secure: true,
        tls: {
            rejectUnauthorized: false,
        },
    } as SMTPTransport.Options);

    try {
        const { email, message, name, phone, theme } = parsedBody.data;

        await transporter.sendMail({
            from: user,
            replyTo: email,
            subject: `${theme}`,
            text: `Отримано повідомлення від ${name} - ${phone}: ${message}`,
            to: receiver,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (e: unknown) {
        const error = e instanceof Error ? e : new Error('Unknown error');
        console.error('Email sending error:', error);
        return NextResponse.json({ error: true, message: error.message }, { status: 500 });
    }
}
