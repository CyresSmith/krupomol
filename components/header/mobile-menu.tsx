'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { Link } from '@i18n';

import { Button } from '@ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@ui/drawer';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

import { Icon } from '@components/shared';

import { titleFont } from '@fonts';

import { NavigationTitle } from '@types';

import { navigation } from '@constants';

import { cn } from '@utils';

export const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const t = useTranslations('header.navigation');
    const headerT = useTranslations('header');

    return (
        <Drawer direction="right" onOpenChange={setOpen} open={open}>
            <DrawerTrigger className="fill-background transition desktop:hidden">
                <Icon height={16} name="menu_icon" width={35} />
            </DrawerTrigger>

            <DrawerContent className="inset-0 m-0 gap-16 rounded-none border-none bg-accent after:opacity-0 tablet:left-auto tablet:right-0 tablet:top-0 tablet:max-w-[322px] desktop:hidden">
                <DrawerHeader className="flex items-center justify-start">
                    <DrawerClose className="flex size-10 items-center justify-center fill-primary">
                        <Icon name="x-mark" />
                    </DrawerClose>

                    <DrawerTitle className="sr-only">Mobile navigation</DrawerTitle>

                    <DrawerDescription className="sr-only">
                        Menu for mobile navigation
                    </DrawerDescription>
                </DrawerHeader>

                <Icon className="mx-auto h-14 w-[123px]" name="krupomol_logo" />

                <NavigationMenu
                    className="w-full max-w-full flex-none items-start desktop:w-auto desktop:max-w-max"
                    orientation="vertical"
                >
                    <NavigationMenuList className="flex w-full flex-col items-center desktop:flex-row">
                        {navigation.map(({ href, title }) => (
                            <NavigationMenuItem
                                className="m-0 flex h-full w-full items-center justify-center desktop:w-auto"
                                key={title}
                            >
                                <Link
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        'text-center text-primary',
                                        titleFont.className
                                    )}
                                    href={href ?? ''}
                                    onClick={() => setOpen(false)}
                                >
                                    {t(title as NavigationTitle)}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <DrawerFooter className="mt-[unset]">
                    <Button
                        className="w-full"
                        name={headerT('consultation')}
                        variant={'outline-primary'}
                    >
                        {headerT('consultation')}
                    </Button>
                    {/* <ThemeSwitch />
                    <LocaleSwitcher /> */}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
