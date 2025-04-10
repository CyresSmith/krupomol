import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Section, Title } from '@components/shared';

export const Info = async () => {
    const t = await getTranslations('certification');

    return (
        <Section className="relative">
            <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src="/images/certification-info-bg.jpg"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="z-1 container relative">
                <div className="w-full rounded-3xl border-[7px] border-solid border-accent px-5 py-16 tablet:w-1/2 desktop:w-1/2 desktop:px-14 desktop:py-14">
                    <Title as="h3" className="text-xl font-bold leading-[140%] text-white">
                        {t('info')}
                    </Title>
                </div>
            </div>
        </Section>
    );
};
