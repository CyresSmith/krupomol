import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

import ProductTitle from './product-title';

import { CertificateType, ProductType } from '@types';

import { getProductImage } from '@utils';

const nutritionalKeys = ['fats', 'acids', 'carbohydrates', 'protein', 'salt', 'sugar'];
const energyKeys = ['kcal', 'kj'];
const infoKeys = ['mass', 'packageType', 'gpCount', 'gpWeight', 'expiration'];

export const ProductInfo = async (product: ProductType) => {
    const locale = await getLocale();
    const t = await getTranslations('products');

    const c = await getTranslations('certification.certificates');
    const certificates = c.raw('list') as CertificateType[];

    const { expiration, gpCount, gpWeight, image, mass, packageType, title } = product;

    const productTitle = title[locale];

    return (
        <>
            <div className="container grid grid-cols-[400px_1fr] items-start gap-12">
                <div className="relative h-[526px] overflow-hidden rounded-lg">
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
                            <div className="overflow-hidden rounded-3xl bg-background p-5 text-text-color shadow-lg">
                                <h3 className="mb-3 text-lg font-bold text-primary after:my-2 after:block after:w-full after:border-b after:border-primary after:content-['']">
                                    {t('data.nutritional')}
                                </h3>

                                {nutritionalKeys.map((key, i) => (
                                    <p className="mt-2 flex justify-between" key={key + i}>
                                        <span className="mr-2">{t(`data.${key}`)}:</span>
                                        {product[key]}
                                    </p>
                                ))}
                            </div>

                            <div className="overflow-hidden rounded-3xl bg-background p-5 text-text-color shadow-lg">
                                <h3 className="mb-3 text-lg font-bold text-primary after:my-2 after:block after:w-full after:border-b after:border-primary after:content-['']">
                                    {t('data.energy')}
                                </h3>

                                {energyKeys.map((key, i) => (
                                    <p className="mt-2 flex justify-between" key={key + i}>
                                        <span className="mr-2">{t(`data.${key}`)}:</span>
                                        {product[key]}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-3xl bg-primary p-5 text-background">
                            {infoKeys.map((key, i) => (
                                <p className="mt-2 flex justify-between" key={key + i}>
                                    <span className="mr-2">{t(`data.${key}`)}:</span>
                                    {key === 'packageType'
                                        ? t(`data.${product[key]}`)
                                        : product[key]}
                                </p>
                            ))}

                            <div className="flex gap-5">
                                {certificates.map(({ desc, id, title }) => (
                                    <div
                                        className="relative flex size-[48px] min-w-[48px] items-center justify-center"
                                        key={id}
                                    >
                                        <Image
                                            alt={desc}
                                            className="object-contain transition"
                                            fill
                                            sizes="100%"
                                            src={`/images/${id}.png`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
