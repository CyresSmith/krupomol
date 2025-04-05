import { routing } from '@i18n';

export type LocaleType = (typeof routing.locales)[number];

export type RoutingType = typeof routing;

export type SharedMetadataType = typeof import('@shared-metadata').sharedMetadata;

export interface WithLocale {
    locale: LocaleType;
}

export interface WithParams<T> {
    params: Promise<T>;
}
