import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Button } from '@ui/button';

import { Title } from '@components/shared';

export const Certification = async () => {
    const t = await getTranslations('main.certification');

    return (
        <section className="relative z-0 py-24 mobile:py-10">
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
                <div className="border-7 z-50 rounded-40 border-accent px-24 py-20 mobile:px-6 mobile:py-16 tablet:px-8 tablet:py-16">
                    <div className="w-full desktop:w-[635px]">
                        <Title as="h3" className="mb-3 text-5xl text-background mobile:text-3xl">
                            {t('title')}
                        </Title>

                        <p className="mb-10 text-background mobile:text-sm">{t('text')}</p>
                    </div>

                    <Button className="max-w-full" variant={'outline'}>
                        <span className="truncate">{t('link')}</span>
                    </Button>
                </div>
            </div>
        </section>
    );
};
