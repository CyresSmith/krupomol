'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { AnimatedTextBox, BorderCard, ImageSection, Title } from '@components/shared';

import { CERTIFICATION_ROUTE } from '@routes';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

export const Certification = () => {
    const t = useTranslations('main.certification');

    return (
        <ImageSection id={ANCHORS.main.certification} image="main-certification">
            <BorderCard>
                <div className="w-full desktop:w-[635px]">
                    <AnimatedTextBox from="top">
                        <Title
                            as="h3"
                            className="mb-3 text-[44px] text-background mobile:text-[34px]"
                            title={t('title')}
                        />
                    </AnimatedTextBox>

                    <AnimatedTextBox from="left">
                        <p className="mb-10 text-background mobile:text-sm">{t('text')}</p>
                    </AnimatedTextBox>
                </div>

                <AnimatedTextBox from="bottom">
                    <Link
                        className={cn(
                            buttonVariants({ variant: 'outline' }),
                            'max-w-full mobile:w-full'
                        )}
                        href={CERTIFICATION_ROUTE}
                    >
                        <span className="truncate">{t('link')}</span>
                    </Link>
                </AnimatedTextBox>
            </BorderCard>
        </ImageSection>
    );
};
