/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

import { Icon } from '@components/shared';

import logo from '@assets/images/krupomol_logo.png';

import { contacts, navigation, socials } from '@constants';

import { cn } from '@utils';

export const Footer = () => {
    return (
        <footer className="w-full rounded-t-[theme(space.28)] bg-card">
            <div className="container py-6">
                <div className="grid grid-cols-3 gap-6">
                    <Link className="relative h-20 w-[175px]" href={'/'}>
                        <Image
                            alt="Крупомол лого"
                            className="object-contain"
                            placeholder="empty"
                            priority
                            src={logo}
                        />
                    </Link>

                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start">
                            {navigation.map(({ href, icon, title }) => (
                                <NavigationMenuItem key={title}>
                                    <NavigationMenuLink
                                        className={cn(navigationMenuTriggerStyle())}
                                        href={href}
                                    >
                                        {icon && <Icon name={icon} />}
                                        {title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="">
                        <ul className="mb-3 flex gap-3 fill-foreground">
                            {socials.map(({ href, icon }) => (
                                <li key={href}>
                                    <Link
                                        className={cn(buttonVariants({ size: 'icon' }))}
                                        href={href}
                                    >
                                        {icon && <Icon name={icon} />}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <address className="not-italic">
                            <ul className="flex flex-col fill-foreground">
                                {contacts.map(({ href, icon, title }) => (
                                    <li key={href}>
                                        <Link
                                            className={cn(navigationMenuTriggerStyle(), 'px-0')}
                                            href={href}
                                        >
                                            {icon && <Icon name={icon} />}

                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </address>
                    </div>
                </div>

                <p className="mt-6 text-center text-foreground/50">
                    &copy; 2025 Крупомол | Усі права захищені.
                </p>
            </div>
        </footer>
    );
};
