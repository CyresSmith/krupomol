import { routing } from '@i18n';

export type LocaleType = (typeof routing.locales)[number];

export type RoutingType = typeof routing;

export interface WithLocale {
    locale: LocaleType;
}

export interface WithParams<T> {
    params: Promise<T>;
}

export type InputType = 'email' | 'select' | 'tel' | 'text' | 'textarea';
// | 'color'
// | 'date'
// | 'datetime-local'
// | 'month'
// | 'number'
// | 'password'
// | 'search'
// | 'time'
// | 'url'
// | 'week';

export interface InputProps {
    name: string;
    required?: boolean;
    type: InputType;
}

export interface CardLinkItem {
    href: string;
    image: string;
    title: string;
}
