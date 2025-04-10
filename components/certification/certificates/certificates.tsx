import { getTranslations } from 'next-intl/server';

import { CertificateType } from 'lib/types/certificate.types';

import { Certificate } from './certificate';

import { Section } from '@components/shared';
import { Title } from '@components/shared';

export const Certificates = async () => {
    const t = await getTranslations('certification.certificates');
    const list = t.raw('list') as CertificateType[];

    return (
        <Section variant="secondary">
            <div className="container">
                <Title as="h5" className="mb-10 text-center text-4xl text-primary desktop:text-5xl">
                    {t('title')}
                </Title>
                <ul className="flex flex-col gap-6">
                    {list.map((item, i) => (
                        <Certificate index={i} item={item} key={i} />
                    ))}
                </ul>
            </div>
        </Section>
    );
};
