import { getTranslations } from 'next-intl/server';
import { getImageProps } from 'next/image';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Icon } from '@components/shared';

import { PRODUCTS_ROUTE } from '@routes';

import { cn, getBackgroundImage } from '@utils';

export const Hero = async () => {
    const t = await getTranslations('main.hero');

    const {
        props: { srcSet },
    } = getImageProps({
        alt: '',
        height: 793,
        src: '/images/hero-1.jpg',
        width: 1920,
    });

    const gradient = 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)';
    const backgroundImage = `${gradient}, ${getBackgroundImage(srcSet)}`;

    return (
        <section
            className={cn('relative z-0 h-[793px] bg-cover bg-center bg-no-repeat')}
            style={{ backgroundImage }}
        >
            <div className="container z-50">
                <h1 className="mt-[245px] w-[753px] text-left text-6xl font-bold leading-normal text-background">
                    {t('title')}
                </h1>

                <Link className={cn('mt-11', buttonVariants({ size: 'lg' }))} href={PRODUCTS_ROUTE}>
                    {t('btn')}{' '}
                    <span className="ml-5 flex size-9 items-center justify-center rounded-full bg-primary">
                        <Icon className="fill-background" name="arrow-right-top" />
                    </span>
                </Link>
            </div>
        </section>
    );
};
