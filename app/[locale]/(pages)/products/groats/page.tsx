import { getLocale } from 'next-intl/server';

import products from '@products/groats.json';

import { redirect } from '@i18n';

import { GROATS_ROUTE, PRODUCTS_ROUTE } from '@routes';

const GroatsPage = async () => {
    const locale = await getLocale();
    const items = products ? Object.keys(products) : [];

    return redirect({ href: `${PRODUCTS_ROUTE}${GROATS_ROUTE}/${items[0]}`, locale });
};

export default GroatsPage;
