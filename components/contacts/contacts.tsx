import { getTranslations } from 'next-intl/server';

import { Link } from '@i18n';

import { AnimatedCard, AnimatedSection, Icon } from '@components/shared';

import { addresses, ANCHORS, mails, messengers, phones } from '@constants';

export const ContactsSection = async () => {
    const c = await getTranslations('header');
    const addressesText = c.raw('address') as string[];

    return (
        <AnimatedSection className="bg-secondary" id={ANCHORS.contacts.ourContacts}>
            <AnimatedCard className="flex flex-col gap-4 bg-primary p-14 mobile:p-9">
                <div className="grid grid-cols-[max-content,1fr] items-start gap-5 fill-background text-background mobile:gap-4">
                    <Icon className="size-6 tablet:size-7 desktop:size-8" name={'map-pinned'} />

                    <ul className="flex flex-col gap-2 tablet:text-lg desktop:gap-3 desktop:text-2xl">
                        {addressesText.map((address, i) => {
                            const href = addresses[i]?.href ?? '';

                            return (
                                <li key={href}>
                                    <Link
                                        className="px-0 transition hover:opacity-80"
                                        href={href}
                                        rel="noopener noreferrer nofollow"
                                        target="_blank"
                                    >
                                        {address}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="grid grid-cols-[max-content,1fr] items-start gap-5 fill-background text-background mobile:gap-4">
                    <Icon className="size-6 tablet:size-7 desktop:size-8" name={'mailbox'} />

                    <ul className="flex flex-col gap-2 tablet:text-lg desktop:gap-3 desktop:text-2xl">
                        {mails.map(({ href, text }) => {
                            return (
                                <li key={href}>
                                    <Link
                                        className="break-all px-0 transition hover:opacity-80"
                                        href={href ?? ''}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="grid grid-cols-[max-content,1fr] items-start gap-5 fill-background text-background mobile:gap-4">
                    <Icon className="size-6 tablet:size-7 desktop:size-8" name={'phone-call'} />

                    <ul className="flex flex-col gap-2 tablet:text-lg desktop:gap-3 desktop:text-2xl">
                        {phones.map(({ href, text }) => {
                            return (
                                <li key={href}>
                                    <Link
                                        className="px-0 transition hover:opacity-80"
                                        href={href ?? ''}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="fill-background text-background">
                    <ul className="flex gap-6 mobile:justify-center">
                        {messengers.map(({ href, icon }) => {
                            return (
                                <li key={href}>
                                    <Link
                                        className="px-0 transition hover:opacity-80"
                                        href={href ?? ''}
                                        rel="noopener noreferrer nofollow"
                                        target="_blank"
                                    >
                                        {icon && <Icon className="size-10" name={icon} />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </AnimatedCard>
        </AnimatedSection>
    );
};
