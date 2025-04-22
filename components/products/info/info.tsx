import Image from 'next/image';

import { Link } from '@i18n';

import { ProductsItemInfoType } from '@types';

interface Props {
    item: ProductsItemInfoType;
}

export const Info = ({ item }: Props) => {
    const { download = false, icon, title, url } = item;

    const generateDownLoadLink = (fileId: string) => {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    };

    console.log(generateDownLoadLink(url));

    return (
        <li className="flex items-center gap-5 fill-accent desktop:gap-7">
            <div className="relative flex size-[40px] min-w-[40px] items-center justify-center desktop:size-[50px]">
                <Image
                    alt={title}
                    className="object-contain transition"
                    fill
                    sizes="100%"
                    src={`/images/${icon}.png`}
                />
            </div>
            <Link
                href={download ? generateDownLoadLink(url) : url}
                target={download ? '' : 'blank'}
            >
                {title}
            </Link>
        </li>
    );
};
