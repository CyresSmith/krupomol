import parsePhoneNumberFromString from 'libphonenumber-js';
import { z } from 'zod';

import { SCHEMAS_MESSAGES } from '@constants';

const { email, maxLength, minLength, phone: phoneMessage } = SCHEMAS_MESSAGES;

export const PhoneSchema = z
    .string()
    .trim()
    .transform((arg, ctx) => {
        if (!arg) return arg;

        const phone = parsePhoneNumberFromString(arg, {
            defaultCallingCode: '+380',
            defaultCountry: 'UA',
            extract: true,
        });

        if (phone?.isValid()) {
            return phone.formatInternational();
        }

        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: phoneMessage,
        });

        return z.NEVER;
    });

export const PhoneOptionalSchema = PhoneSchema.or(z.literal(''));

export const NameSchema = z
    .string()
    .min(3, { message: `${minLength} 3` })
    .max(50, { message: `${maxLength} 50` })
    .trim();

export const EmailSchema = z.string().email({ message: email }).trim();

export const MessageSchema = z
    .string()
    .min(10, { message: `${minLength} 10` })
    .max(500, { message: `${maxLength} 500` })
    .trim();
