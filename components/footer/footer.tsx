import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { Button } from '@ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

import { Icon } from '@components/shared';

import { NavigationTitle } from '@types';

import { contacts, navigation, socials } from '@constants';

import { cn } from '@utils';

export const Footer = async () => {
    const t = await getTranslations('header');
    const navigationT = await getTranslations('header.navigation');

    return (
        <footer className="w-full bg-card">
            <div className="container border-b border-primary pb-5 pt-24">
                <div className="flex items-start gap-36">
                    <Link className="ml-5" href={'/'}>
                        <Icon
                            className="h-[88px] w-[189px] mobile:h-11 mobile:w-[97px]"
                            name="krupomol_logo"
                        />
                    </Link>

                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start gap-4">
                            {navigation.map(({ href, title }) => (
                                <NavigationMenuItem key={title}>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            'py-0 text-primary hover:text-primary hover:opacity-80'
                                        )}
                                        href={href}
                                    >
                                        {navigationT(title as NavigationTitle)}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex min-h-[189px] w-[324px] flex-col justify-between">
                        <address className="mb-4 not-italic text-primary">
                            <ul className="flex flex-col gap-4 fill-foreground text-sm">
                                {Object.values(contacts).map(({ href, icon, text }) => (
                                    <li key={href}>
                                        <Link
                                            className="grid grid-cols-[theme(space.5),1fr] gap-3 self-start px-0"
                                            href={href ?? ''}
                                        >
                                            {icon && <Icon className="size-5" name={icon} />}

                                            {text ?? t('address')}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </address>

                        <Button className="mt-auto mobile:hidden" variant={'outline-primary'}>
                            {t('consultation')}
                        </Button>
                    </div>

                    <div>
                        <ul className="flex gap-2">
                            {socials.map(({ href, icon }) => (
                                <li key={href}>
                                    <Link
                                        className="flex size-8 items-center justify-center overflow-hidden rounded-[8px] bg-primary fill-primary-foreground transition hover:opacity-80"
                                        href={href ?? '/'}
                                    >
                                        {icon && <Icon className="size-6" name={icon} />}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link className="mt-5 text-xs text-primary" href={'/'}>
                            Політика конфидеційності
                        </Link>
                    </div>
                </div>

                <p className="mt-12 w-full border-primary text-center text-foreground/50 before:mb-3 before:block before:border-b before:border-primary before:content-['']">
                    &copy; 2025 Крупомол | Усі права захищені.
                </p>
            </div>
        </footer>
    );
};
