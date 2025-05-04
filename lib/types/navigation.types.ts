import { IconName } from './icon-names';

import messages from '../../locales/uk.json';

export interface NavItemType {
    href: { hash?: string; pathname: string };
    icon?: IconName;
    links?: NavItemType[];
    title: string;
}

export type NavigationTitle = keyof typeof messages.header.navigation;

export type NavigationAnchorsType = Record<NavigationTitle, string[]>;
