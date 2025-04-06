import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Icon } from '@components/shared';

import { PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

export const Hero = async () => {
    const t = await getTranslations('main.hero');

    return (
        <section className="relative h-[793px]">
            <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src="/images/hero-1.jpg"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

            <div className="container relative z-10">
                <h1 className="desktop:text:6xl mt-[245px] text-left text-5xl font-bold leading-normal text-background desktop:w-[753px]">
                    {t('title')}
                </h1>

                <Link
                    className={cn('mt-11 mobile:w-full', buttonVariants({ size: 'lg' }))}
                    href={PRODUCTS_ROUTE}
                >
                    {t('link')}
                    <span className="ml-5 flex size-9 items-center justify-center rounded-full bg-primary">
                        <Icon className="fill-background" name="arrow-right-top" />
                    </span>
                </Link>
            </div>
        </section>
    );
};
