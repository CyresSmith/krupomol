'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Section, Title } from '@components/shared';

import { CERTIFICATION_ROUTE } from '@routes';

import { cn } from '@utils';

export const Certification = () => {
    const t = useTranslations('main.certification');

    return (
        <Section className="relative z-0">
            <Image
                alt=""
                className="-z-10 object-cover"
                fill
                priority
                sizes="100vw"
                src="/images/main-certification.jpg"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="container">
                <div className="z-50 rounded-40 border-7 border-accent px-24 py-20 mobile:px-6 mobile:py-16 tablet:px-8 tablet:py-16">
                    <div className="w-full desktop:w-[635px]">
                        <Title as="h3" className="mb-3 text-5xl text-background mobile:text-3xl">
                            {t('title')}
                        </Title>

                        <p className="mb-10 text-background mobile:text-sm">{t('text')}</p>
                    </div>

                    <Link
                        className={cn(buttonVariants({ variant: 'outline' }), 'max-w-full')}
                        href={CERTIFICATION_ROUTE}
                    >
                        <span className="truncate">{t('link')}</span>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
