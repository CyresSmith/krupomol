'use client';

import { useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Icon } from './icon';

import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';

import { ConsultationTitle, InputProps } from '@types';

import { ConsultationFormSchema } from '@schemas';

import { cn } from '@utils';

/* eslint-disable @typescript-eslint/no-misused-promises */

const inputs: InputProps[] = [
    { name: 'name', required: true, type: 'text' },
    { name: 'email', required: true, type: 'email' },
    { name: 'theme', required: true, type: 'select' },
    { name: 'phone', type: 'tel' },
    { name: 'message', type: 'textarea' },
];

export const ConsultationForm = () => {
    const t = useTranslations('shared.consultation-form');

    const form = useForm<z.infer<typeof ConsultationFormSchema>>({
        defaultValues: {
            email: '',
            message: '',
            name: '',
            phone: '',
            theme: '',
        },
        mode: 'onChange',
        resolver: zodResolver(ConsultationFormSchema),
    });

    const { errors, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof ConsultationFormSchema>) => {
        try {
            const res = await fetch('/api/send-email', {
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });

            // if (!res.ok) {
            //     const errorData = await res.json();
            //     console.error('Error:', errorData);
            // } else {
            //     const data = await res.json();
            //     console.log('Success:', data);
            // }
            console.log(res);
        } catch (error) {
            console.error('Request failed', error);
        }
    };

    return (
        <Form {...form}>
            <form
                className="mx-auto w-full max-w-[624px] px-4"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="mb-9">
                    <div className="mb-2 grid grid-cols-2 gap-5 mobile:flex mobile:flex-col mobile:gap-4">
                        {inputs.map(({ name, required, type }) => {
                            const placeholder = t(`form.${name as ConsultationTitle}.placeholder`);

                            return (
                                <FormField
                                    control={form.control}
                                    key={name}
                                    name={name as keyof z.infer<typeof ConsultationFormSchema>}
                                    render={({ field }) => (
                                        <FormItem
                                            className={cn(
                                                {
                                                    'col-span-2': name === 'message',
                                                    'col-start-1 col-end-2':
                                                        name === 'name' || name === 'theme',
                                                    'col-start-2 col-end-3':
                                                        name === 'email' || name === 'phone',
                                                },
                                                {
                                                    'row-start-1 row-end-2':
                                                        name === 'name' || name === 'email',
                                                    'row-start-2 row-end-3':
                                                        name === 'theme' || name === 'phone',
                                                    'row-start-3': name === 'message',
                                                }
                                            )}
                                        >
                                            <FormLabel>
                                                {t(`form.${name as ConsultationTitle}.label`)}
                                                {required && (
                                                    <span className="text-destructive">*</span>
                                                )}
                                            </FormLabel>

                                            <FormControl>
                                                {type === 'textarea' ? (
                                                    <Textarea
                                                        className="max-h-[270px] min-h-[135px] resize-none"
                                                        error={!!errors[name as ConsultationTitle]}
                                                        placeholder={placeholder}
                                                        {...field}
                                                    />
                                                ) : (
                                                    <Input
                                                        error={!!errors[name as ConsultationTitle]}
                                                        placeholder={placeholder}
                                                        type={type}
                                                        {...field}
                                                    />
                                                )}
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            );
                        })}
                    </div>

                    <p className="text-text-color">
                        <span className="text-destructive">*</span> {t('required')}
                    </p>
                </div>

                <div className="flex justify-center">
                    <Button disabled={!isValid} size={'lg'} type="submit" variant={'primary'}>
                        {t('submit')}

                        <Icon className="ml-8" name="arrow-right-top" />
                    </Button>
                </div>
            </form>
        </Form>
    );
};
