import { getTranslations } from 'next-intl/server';

import ProductImage from './product-image';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Icon, Title } from '@components/shared';

import { CertificateType, IconName, ProductListType } from '@types';

import { CONTACTS_ROUTE } from '@routes';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

const nutritionalKeys = ['fats', 'acids', 'carbohydrates', 'protein', 'salt', 'sugar'] as const;
const energyKeys = ['kcal', 'kj'] as const;
const infoKeys = ['mass', 'package', 'gpCount', 'gpWeight', 'expiration'] as const;

const ProductDataCard = ({
    icon = 'restaurant',
    items,
    title,
}: {
    icon: IconName;
    items: { text: string; title: string }[];
    title: string;
}) => (
    <div className="overflow-hidden rounded-3xl bg-background p-5 text-text-color shadow-lg">
        <div className="mb-3 grid grid-cols-[max-content,1fr] gap-3 border-b border-primary pb-3">
            <Icon className="h-[56px] w-[56px] fill-primary" name={icon} />
            <h3 className="text-lg font-bold text-primary">{title}</h3>
        </div>

        <div className="flex flex-col gap-2">
            {items.map(({ text, title }) => (
                <p className="flex justify-between" key={title}>
                    <span className="mr-2">{title}:</span>
                    {text}
                </p>
            ))}
        </div>
    </div>
);

export const ProductInfo = async (product: Omit<ProductListType, 'href'>) => {
    const t = await getTranslations('products');

    const c = await getTranslations('certification.certificates');
    const certificates = c.raw('list') as CertificateType[];

    const { image, title } = product;

    const getIconName = (id: string) => {
        switch (id) {
            case 'expiration':
                return 'time';

            case 'gpCount':
                return 'grid';

            case 'gpWeight':
                return 'scales';

            case 'mass':
                return 'scales';

            case 'package':
                return 'archive';

            default:
                break;
        }
    };

    return (
        <>
            <div className="container flex flex-col gap-12 desktop:grid desktop:grid-cols-[400px_1fr]">
                <ProductImage image={image} title={title} />

                <div>
                    <Title
                        as="h2"
                        className="max-w-full text-left text-2xl font-bold uppercase mobile:text-center tablet:text-3xl desktop:text-4xl"
                        id="product"
                    >
                        {title}
                    </Title>

                    <div className="mt-5 flex flex-col gap-5 desktop:grid desktop:grid-cols-2">
                        <div className="flex flex-col gap-5">
                            <ProductDataCard
                                icon="restaurant"
                                items={nutritionalKeys.map(key => ({
                                    text: product[key],
                                    title: t(`data.${key}`),
                                }))}
                                title={t('data.nutritional')}
                            />

                            <ProductDataCard
                                icon="flashlight"
                                items={energyKeys.map(key => ({
                                    text: product[key],
                                    title: t(`data.${key}`),
                                }))}
                                title={t('data.energy')}
                            />
                        </div>

                        <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-primary p-5 text-background shadow-lg">
                            <div>
                                {infoKeys.map((key, i) => (
                                    <div
                                        className="mt-2 flex items-start gap-3 first:mt-0"
                                        key={key + i}
                                    >
                                        <Icon
                                            className="h-[24px] w-[24px] fill-background desktop:h-[30px] desktop:w-[30px]"
                                            name={getIconName(key) as IconName}
                                        />

                                        <p className="flex flex-1 items-end justify-between">
                                            <span className="mr-2">{t(`data.${key}`)}:</span>
                                            {key === 'package'
                                                ? t(
                                                      `data.${product[key] as 'paper' | 'polypropylene'}`
                                                  )
                                                : product[key]}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between gap-5 fill-background tablet:justify-center">
                                {certificates.map(({ id }) => (
                                    <Icon
                                        className="h-[100px] w-[100px] mobile:h-[75px] mobile:w-[75px]"
                                        key={id}
                                        name={id as IconName}
                                    />
                                ))}
                            </div>

                            <Link
                                className={cn('w-full', buttonVariants({ variant: 'default' }))}
                                href={{ hash: ANCHORS.consultation, pathname: CONTACTS_ROUTE }}
                            >
                                {t(`data.buy`)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
