import { getLocale } from 'next-intl/server';

// import products from '@products/groats.json';

import { WithParams } from '@types';

export default async function ProductPage({
    params,
}: WithParams<{ groat: string; product: string }>) {
    const locale = await getLocale();
    const { groat, product } = await params;

    // const item = products[groat][product];

    // console.log('🚀 ~ item:', item);

    return (
        <div className="flex">
            {/* <div className="relative aspect-square w-2/6">
                <Image
                    alt={item.title[locale]}
                    fill
                    sizes="100%"
                    src={getProductImage(item.image)}
                    style={{ objectFit: 'contain' }}
                />
            </div>

            <div>
                <Title as="h1">{item.title[locale]}</Title>
            </div> */}
        </div>
    );
}
