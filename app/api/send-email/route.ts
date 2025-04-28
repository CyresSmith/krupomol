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
            html: `
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Responsive Email Template</title>
    </head>
    <body style="font-family: 'Inter', sans-serif">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center" style="padding: 20px;">
                    <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #072C73;">
                        <tr>
                            <td class="header" style="background-color: #072C73; padding: 20px; text-align: center; color: white; font-size: 24px;">
                            Тема: ${theme}
                            </td>
                        </tr>
                        <tr>
                            <td class="body" style="padding: 20px; text-align: left; font-size: 16px; line-height: 1.6;">
                            <p style="font-weight: bold; color: black">Від: <span style="font-weight: 400">${name}</span></p>
                            <p style="font-weight: bold; color: black">Телефон: <span style="font-weight: 400">${phone}</span></p>
                            <p style="font-weight: bold; color: black">Email: <span style="font-weight: 400">${email}</span></p>
                            <p style="font-weight: bold; color: black">Повідомлення: <span style="font-weight: 400">${message}</span></p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>
`,
            replyTo: email,
            subject: 'Повідомлення з сайту Крупомол',
            to: receiver,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (e: unknown) {
        const error = e instanceof Error ? e : new Error('Unknown error');
        console.error('Email sending error:', error);
        return NextResponse.json({ error: true, message: error.message }, { status: 500 });
    }
}

// `
// <body style="font-family: 'Inter', sans-serif">
//     <table width="100%" border="0" cellspacing="0" cellpadding="0">
//         <tr>
//             <td align="center" style="padding: 20px;">
//                 <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
//                     <!-- Header -->
//                     <tr>
//                         <td class="header" style="background-color: #345C72; padding: 40px; text-align: center; color: white; font-size: 24px;">
//                         ${}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
//                         ${}
//                         <br><br>
//                         ${}
//                         </td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
// </body>
// `;
