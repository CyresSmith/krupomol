import { Fragment } from 'react';

import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { Link } from '@i18n';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@ui/breadcrumb';

interface Props {
    category?: string;
    product?: string;
    type?: string;
}

export const ProductBreadcrumb = async ({ category, product, type }: Props) => {
    const locale = await getLocale();
    const breadcrumb = ProductsService.getBreadcrumb({
        category,
        locale,
        product,
        type,
    });

    return (
        <div className="container flex items-center justify-center pb-8 pt-4 desktop:pb-12">
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumb.map(({ href, title }, i) => {
                        return (
                            <Fragment key={title + href}>
                                <BreadcrumbItem>
                                    {href ? (
                                        <BreadcrumbLink asChild>
                                            <Link href={href} locale={locale}>
                                                {title}
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage>{title}</BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {i + 1 < breadcrumb.length && <BreadcrumbSeparator />}
                            </Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};
