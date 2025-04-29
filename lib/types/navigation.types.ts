import { IconName } from './icon-names';

export interface NavItemType {
    href?: string;
    icon?: IconName;
    title: string;
}

export type NavigationTitle =
    | 'certification'
    | 'contacts'
    | 'export'
    | 'main'
    | 'prices'
    | 'product';

export type NavigationAnchorsType = Record<NavigationTitle, string[]>;
