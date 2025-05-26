import { getLocale } from 'next-intl/server';
import Image from 'next/image';

import { Title } from '@components/shared';

import { ExportProductType } from '@types';

interface Props {
    product: ExportProductType;
}

export const ExportProductCard = async ({ product }: Props) => {
    const locale = await getLocale();
    const { addInfo, id, title } = product;

    return (
        <li className="w-full rounded-20 p-4">
            <div className="relative h-[360px] w-full overflow-hidden rounded-20 mobile:h-[240px]">
                <Image
                    alt={product.title[locale]}
                    className="object-cover transition group-hover:scale-110"
                    fill
                    sizes="(max-width: 1279px) 235px, (min-width: 1280px) 300px, (max-width: 767px) 280px,"
                    src={`/images/export/${id}.png`}
                />
            </div>
            <Title as="h5" className="my-2 text-center" title={title[locale]} />
            <ul className="flex flex-col gap-2">
                {addInfo[locale].map((info, i) => (
                    <li className="flex justify-start text-left text-text-color" key={i}>
                        <span>{info}</span>
                    </li>
                ))}
            </ul>
        </li>
    );
};
