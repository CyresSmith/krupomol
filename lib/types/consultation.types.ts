import { z } from 'zod';

import { ConsultationFormSchema } from '@schemas';

export type ConsultationTitle = keyof z.infer<typeof ConsultationFormSchema>;
