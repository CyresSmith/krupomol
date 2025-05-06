import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { ContactsHero, ContactsSection, FormSection, MapSection } from '@components/contacts';

import { CONTACTS_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('contacts.metadata');

    return getMetadata({
        description: t('desc'),
        keywords: t.raw('keywords') as string[],
        locale,
        path: CONTACTS_ROUTE,
        title: t('title'),
    });
}

export default function Contacts() {
    return (
        <>
            <ContactsHero />
            <ContactsSection />
            <FormSection />
            <MapSection />
        </>
    );
}
