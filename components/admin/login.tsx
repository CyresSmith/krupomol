'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@ui/form';
import { Input } from '@ui/input';

import { Section } from '@components/shared';

interface Props {
    handleSubmit: (pass: string) => void;
}

export const Login = ({ handleSubmit }: Props) => {
    const formSchema = z.object({
        password: z.string(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            password: '',
        },
        mode: 'onChange',
        resolver: zodResolver(formSchema),
    });

    const { isValid } = form.formState;

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        handleSubmit(value.password);
    };

    /* eslint-disable @typescript-eslint/no-misused-promises */

    return (
        <Section>
            <div className="container">
                <Form {...form}>
                    <div className="mx-auto w-1/2 rounded-20 bg-primary px-4 py-10 text-primary shadow-lg mobile:w-full desktop:rounded-40 desktop:px-24 desktop:py-8">
                        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="mb-4 inline-block w-full text-center font-title text-2xl font-bold text-background placeholder-inherit">
                                            Вхід адміністратора
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Введіть пароль"
                                                {...field}
                                                type="password"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                className="mx-auto mt-6 w-1/2 mobile:w-full"
                                disabled={!isValid}
                                size={'default'}
                                type="submit"
                                variant={'outline'}
                            >
                                Увійти
                                {/* <Icon className="ml-8" name="arrow-right-top" /> */}
                            </Button>
                        </form>
                    </div>
                </Form>
            </div>
        </Section>
    );
};
