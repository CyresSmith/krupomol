import { z } from 'zod';

import { EmailSchema, MessageSchema, NameSchema, PhoneSchema } from './shared.schemas';

export const ConsultationFormSchema = z.object({
    email: EmailSchema,
    message: MessageSchema,
    name: NameSchema,
    phone: PhoneSchema,
    theme: NameSchema,
});
