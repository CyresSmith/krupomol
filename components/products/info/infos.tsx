import { getTranslations } from 'next-intl/server';

import { Info } from './info';

import { BorderCard, ImageSection, Title } from '@components/shared';

import { ProductsItemInfoType } from '@types';

export const Infos = async () => {
    const t = await getTranslations('products');
    const infoList = t.raw('info.infoList') as ProductsItemInfoType[];

    return (
        <ImageSection id="info" image="products-more-info">
            <div className="z-1 container relative">
                <BorderCard className="tablet:w-1/2 desktop:w-1/2">
                    <Title
                        as="h3"
                        className="mb-7 text-[30px] font-bold leading-[140%] text-white desktop:text-[44px]"
                        title={t('info.title')}
                    />
                    <ul className="flex flex-col gap-5 font-title text-base font-bold text-white">
                        {infoList.map((item, i) => (
                            <Info item={item} key={i} />
                        ))}
                    </ul>
                </BorderCard>
            </div>
        </ImageSection>
    );
};
