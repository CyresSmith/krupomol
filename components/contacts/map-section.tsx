import { getTranslations } from 'next-intl/server';

import { Section, Title } from '@components/shared';

import { ANCHORS } from '@constants';

export const MapSection = async () => {
    const t = await getTranslations('contacts.map');

    return (
        <Section id={ANCHORS.contacts.map} noPadding variant="secondary">
            <div className="container mb-14">
                <Title
                    as="h2"
                    className="mb-3 text-center text-3xl font-bold tablet:text-4xl desktop:text-5xl"
                >
                    {t('title')}
                </Title>
            </div>

            <iframe
                allowFullScreen={false}
                className="h-[755px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24144.595097094054!2d31.140950334696146!3d50.49904346363589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d51ddec9afe91f%3A0x1afad71ef5c65af4!2z0LLRg9C7LiDQltC-0LLRgtC90LXQstCwLCAzOSwg0KDRg9GB0LDQvdGW0LIsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDA3NDUz!5e0!3m2!1suk!2sua!4v1744049782651!5m2!1suk!2sua"
                style={{ border: 0 }}
            />
        </Section>
    );
};
