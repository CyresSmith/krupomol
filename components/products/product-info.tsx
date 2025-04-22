import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

import ProductTitle from './product-title';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Icon } from '@components/shared';

import { CertificateType, IconName, ProductType, ProductTypeKeys } from '@types';

import { CONTACTS_ROUTE } from '@routes';

import { ANCHORS } from '@constants';

import { cn, getProductImage } from '@utils';

const nutritionalKeys = ['fats', 'acids', 'carbohydrates', 'protein', 'salt', 'sugar'];
const energyKeys = ['kcal', 'kj'];
const infoKeys = ['mass', 'packageType', 'gpCount', 'gpWeight', 'expiration'];

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

export const ProductInfo = async (product: ProductType) => {
    const locale = await getLocale();
    const t = await getTranslations('products');

    const c = await getTranslations('certification.certificates');
    const certificates = c.raw('list') as CertificateType[];

    const { image, title } = product;

    const productTitle = title[locale];

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

            case 'packageType':
                return 'archive';

            default:
                break;
        }
    };

    return (
        <>
            <div className="container grid grid-cols-[400px_1fr] items-start gap-12">
                <div className="relative h-full overflow-hidden rounded-lg">
                    <Image
                        alt={productTitle}
                        fill
                        sizes="100%"
                        src={getProductImage(image)}
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <div>
                    <ProductTitle title={productTitle} />

                    <div className="mt-5 grid grid-cols-2 gap-5">
                        <div className="flex flex-col gap-5">
                            <ProductDataCard
                                icon="restaurant"
                                items={nutritionalKeys.map(key => ({
                                    text: product[key as ProductTypeKeys],
                                    title: t(`data.${key}`),
                                }))}
                                title={t('data.nutritional')}
                            />

                            <ProductDataCard
                                icon="flashlight"
                                items={energyKeys.map(key => ({
                                    text: product[key as ProductTypeKeys],
                                    title: t(`data.${key}`),
                                }))}
                                title={t('data.energy')}
                            />
                        </div>

                        <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-5 text-background">
                            <div>
                                {infoKeys.map((key, i) => (
                                    <div
                                        className="mt-2 flex items-center gap-3 first:mt-0"
                                        key={key + i}
                                    >
                                        <Icon
                                            className="h-[30px] w-[30px] fill-background"
                                            name={getIconName(key) as IconName}
                                        />

                                        <p className="flex flex-1 justify-between">
                                            <span className="mr-2">{t(`data.${key}`)}:</span>
                                            {key === 'packageType'
                                                ? t(`data.${product[key as ProductTypeKeys]}`)
                                                : product[key as ProductTypeKeys]}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between gap-5 fill-background">
                                {certificates.map(({ id }) => (
                                    <Icon
                                        className="h-[100px] w-[100px]"
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
