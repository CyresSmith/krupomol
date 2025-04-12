import { getTranslations } from 'next-intl/server';

import { Link } from '@i18n';

import { Card, CardHeader } from '@ui/card';

import { HeroSection, Icon, Title } from '@components/shared';

import { contacts } from '@constants';

export const ContactsHero = async () => {
    const t = await getTranslations('contacts.hero');
    const c = await getTranslations('header');

    return (
        <HeroSection image="contacts-hero">
            <Card className="bg-secondary p-14 mobile:p-9">
                <CardHeader className="p-0">
                    <Title
                        as="h2"
                        className="text-3xl font-bold text-primary after:my-6 after:block after:w-full after:border-b after:border-primary after:content-[''] tablet:text-4xl desktop:text-5xl"
                    >
                        {t('title')}
                    </Title>
                </CardHeader>

                <ul className="flex flex-col gap-4 tablet:text-lg desktop:text-2xl">
                    {Object.values(contacts).map(({ href, icon, text }) => {
                        const isAddress = href === contacts.address.href;

                        return (
                            <li key={href}>
                                <Link
                                    className="grid grid-cols-[max-content,1fr] items-start gap-5 fill-primary px-0 text-primary transition hover:opacity-80 mobile:gap-4"
                                    href={href ?? ''}
                                    rel={isAddress ? 'noopener noreferrer nofollow' : undefined}
                                    target={isAddress ? '_blank' : undefined}
                                >
                                    {icon && (
                                        <Icon
                                            className="size-6 tablet:size-7 desktop:size-8"
                                            name={icon}
                                        />
                                    )}

                                    {text ?? c('address')}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Card>
        </HeroSection>
    );
};
