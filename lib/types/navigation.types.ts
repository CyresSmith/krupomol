import { IconName } from './icon-names';

import messages from '../../locales/uk.json';

export interface NavItemType {
    href?: string;
    icon?: IconName;
    title: string;
}

export type NavigationTitle = keyof typeof messages.header.navigation;

// export type NavigationTitle =
//     | 'certification'
//     | 'contacts'
//     | 'export'
//     | 'main'
//     | 'prices'
//     | 'product';

export type NavigationAnchorsType = Record<NavigationTitle, string[]>;
