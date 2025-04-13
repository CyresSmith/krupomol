import { getTranslations } from 'next-intl/server';

import { BorderCard, ImageSection, Title } from '@components/shared';

export const Info = async () => {
    const t = await getTranslations('certification');

    return (
        <ImageSection image="certification-info-bg">
            <BorderCard className="tablet:w-1/2 desktop:w-1/2">
                <Title as="h3" className="text-xl font-bold leading-[140%] text-white">
                    {t('info')}
                </Title>
            </BorderCard>
        </ImageSection>
    );
};
