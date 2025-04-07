import { z } from 'zod';

import { EmailSchema, MessageSchema, NameSchema, PhoneOptionalSchema } from './shared.schemas';

export const ConsultationFormSchema = z.object({
    email: EmailSchema,
    message: MessageSchema.or(z.literal('')),
    name: NameSchema,
    phone: PhoneOptionalSchema,
    theme: NameSchema,
});
