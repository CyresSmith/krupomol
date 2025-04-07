import { getTranslations } from 'next-intl/server';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/index';

import { Icon, Title } from '@components/shared';

import { PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

export const Hero = async () => {
    const t = await getTranslations('products.hero');

    return (
        <div className="container relative z-10 my-auto flex flex-col items-center justify-center">
            <Title
                as="h1"
                className="text-left text-5xl font-bold leading-normal text-background tablet:text-center desktop:text-6xl desktop:leading-normal"
            >
                {t('title')}
            </Title>

            <Link
                className={cn('mt-11 mobile:w-full', buttonVariants({ size: 'lg' }))}
                href={PRODUCTS_ROUTE}
            >
                <span className="truncate">{t('link')}</span>
                <span className="ml-5 flex size-9 min-w-9 items-center justify-center rounded-full bg-primary">
                    <Icon className="fill-background" name="arrow-right-top" />
                </span>
            </Link>
        </div>
    );
};
