'use client';

import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRecaptcha } from 'lib/hooks/useRecaptcha';
import { z } from 'zod';

import { Icon } from './icon';
import { LenisContext } from './smooth-scroll';

import { Button } from '@ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@ui/dialog';
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
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const lenis = useContext(LenisContext);

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

    const { execute } = useRecaptcha();

    const { errors, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof ConsultationFormSchema>) => {
        setIsLoading(true);

        try {
            const token = await execute('contact_form');

            if (!token) {
                console.error('reCAPTCHA failed');
                return;
            }

            const res = await fetch('/api/send-email', {
                body: JSON.stringify({ ...values, token }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });

            if (res.ok) {
                form.reset();
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error('Request failed', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!isModalOpen) return;

        const closeTimeout = setTimeout(() => setIsModalOpen(false), 4000);

        return () => {
            if (closeTimeout) clearTimeout(closeTimeout);
        };
    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen) {
            lenis?.stop();
        } else {
            lenis?.start();
        }

        return () => {
            lenis?.start();
        };
    }, [lenis, isModalOpen]);

    return (
        <>
            <Form {...form}>
                <form
                    className="mx-auto w-full max-w-[624px] px-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="mb-9">
                        <div className="mb-2 grid grid-cols-2 gap-5 mobile:flex mobile:flex-col mobile:gap-4">
                            {inputs.map(({ name, required, type }) => {
                                const placeholder = t(
                                    `form.${name as ConsultationTitle}.placeholder`
                                );

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
                                                            error={
                                                                !!errors[name as ConsultationTitle]
                                                            }
                                                            placeholder={placeholder}
                                                            {...field}
                                                        />
                                                    ) : (
                                                        <Input
                                                            error={
                                                                !!errors[name as ConsultationTitle]
                                                            }
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
                        <Button
                            disabled={!isValid || isLoading}
                            name={t('submit')}
                            size={'lg'}
                            type="submit"
                            variant={'primary'}
                        >
                            {t('submit')}

                            <Icon
                                className="ml-8"
                                name={isLoading ? 'loader' : 'arrow-right-top'}
                            />
                        </Button>
                    </div>
                </form>
            </Form>

            <Dialog onOpenChange={setIsModalOpen} open={isModalOpen}>
                <DialogContent className="sm:max-w-[425px] rounded-20 mobile:max-w-[90%]">
                    <DialogHeader>
                        <DialogTitle hidden={true}>Email successfully sent</DialogTitle>
                        <DialogDescription hidden={true}>
                            Your email to get a consultation successfully sent
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-8">
                        <p className="text-center text-xl">{t('modal-text')}</p>
                    </div>
                    <DialogFooter className="mx-auto w-1/3">
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            size="sm"
                            type="button"
                            variant="primary"
                        >
                            {t('close-modal')}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
