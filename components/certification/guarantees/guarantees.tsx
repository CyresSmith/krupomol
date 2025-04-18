import { getTranslations } from 'next-intl/server';

import { GuaranteeType } from 'lib/types/guarantee.types';

import { CertificatesImages } from './certificates-images';
import { Guarantee } from './guarantee';

import { Section, Title } from '@components/shared';

export const Guarantees = async () => {
    const t = await getTranslations('certification.guarantees');
    const list = t.raw('list') as GuaranteeType[];

    return (
        <Section className="mt-[-64px] desktop:mt-[-96px]" variant="secondary">
            <div className="container relative">
                <div className="rounded-20 bg-primary px-3 py-12 mobile:pt-[200px] tablet:pt-[100px] desktop:rounded-40 desktop:px-10 desktop:py-10">
                    <Title
                        as="h3"
                        className="mb-10 text-center text-4xl text-white desktop:text-5xl"
                    >
                        {t('title')}
                    </Title>

                    <ul className="grid grid-cols-1 gap-5 bg-primary desktop:grid-cols-2 desktop:gap-8">
                        {list.map((item, i) => (
                            <Guarantee item={item} key={i} />
                        ))}
                    </ul>
                </div>
                <CertificatesImages />
            </div>
        </Section>
    );
};
