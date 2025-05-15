import { getLocale, getTranslations } from 'next-intl/server';

import { GuaranteeType } from 'lib/types/guarantee.types';

import { CertificatesImages } from './certificates-images';
import { Guarantee } from './guarantee';

import { AnimatedCard, AnimatedTextBox, Section, Title } from '@components/shared';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

export const Guarantees = async () => {
    const t = await getTranslations('certification.guarantees');
    const locale = await getLocale();
    const list = t.raw('list') as GuaranteeType[];

    return (
        <Section
            className="mt-[-64px] desktop:mt-[-96px]"
            id={ANCHORS.certification.guarantees}
            variant="secondary"
        >
            <div className="container relative">
                <AnimatedCard className="rounded-20 bg-primary px-3 py-12 mobile:pt-[200px] tablet:pt-[100px] desktop:rounded-40 desktop:px-10 desktop:py-10">
                    <AnimatedTextBox from="top">
                        <Title
                            as="h3"
                            className={cn(
                                'mb-10 text-center text-4xl text-white desktop:text-5xl',
                                {
                                    'desktop:text-[40px]': locale !== 'uk',
                                }
                            )}
                            title={t('title')}
                        />
                    </AnimatedTextBox>

                    <ul className="grid grid-cols-1 gap-5 bg-primary desktop:grid-cols-2 desktop:gap-8">
                        {list.map((item, i) => (
                            <Guarantee item={item} key={i} />
                        ))}
                    </ul>
                </AnimatedCard>
                <CertificatesImages />
            </div>
        </Section>
    );
};
