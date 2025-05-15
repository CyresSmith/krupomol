import { Home } from 'lucide-react';
import { Fragment } from 'react';

import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { Link } from '@i18n';

import {
    Breadcrumb,
    BreadcrumbItem,
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
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <Link href={'/'}>
                                <Home />
                            </Link>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {breadcrumb.map(({ href, title }, i) => {
                        return (
                            <Fragment key={title + href}>
                                <BreadcrumbItem>
                                    {href ? (
                                        <Link
                                            className="transition hover:fill-primary hover:text-primary"
                                            href={href}
                                        >
                                            {title}
                                        </Link>
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
