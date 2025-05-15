import { getTranslations } from 'next-intl/server';

import { Link } from '@i18n';

import { AnimatedCard, AnimatedSection, Icon } from '@components/shared';

import { ANCHORS, contacts } from '@constants';

export const ContactsSection = async () => {
    const c = await getTranslations('header');

    return (
        <AnimatedSection className="bg-secondary" id={ANCHORS.contacts.ourContacts}>
            <AnimatedCard className="bg-primary p-14 mobile:p-9">
                <ul className="flex flex-col gap-4 tablet:text-lg desktop:gap-6 desktop:text-2xl">
                    {Object.values(contacts).map(({ href, icon, text }) => {
                        const isAddress = href === contacts.address.href;

                        return (
                            <li key={href}>
                                <Link
                                    className="grid grid-cols-[max-content,1fr] items-start gap-5 fill-background px-0 text-background transition hover:opacity-80 mobile:gap-4"
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
            </AnimatedCard>
        </AnimatedSection>
    );
};
