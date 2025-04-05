import { IconName } from './icon-names';

export interface NavItemType {
    href?: string;
    icon?: IconName;
    title: string;
}

export type NavigationTitle = 'certification' | 'contacts' | 'main' | 'prices' | 'product';
