import Image from 'next/image';

import { CertificateType } from 'lib/types/certificate.types';

interface Props {
    item: CertificateType;
}

export const Certificate = ({ item }: Props) => {
    const { icon, title } = item;

    return (
        <li className="flex flex-col items-center gap-5 rounded-20 bg-accent px-4 py-6 desktop:w-[70%] desktop:flex-row desktop:gap-6 desktop:rounded-40 desktop:px-8 desktop:py-3">
            <div className="relative flex size-[64px] min-w-[64px] items-center justify-center desktop:size-[96px]">
                <Image
                    alt={icon}
                    className="object-contain transition"
                    fill
                    // sizes="100vw"
                    src={`/images/${icon}.png`}
                />
            </div>
            <p className="text-center font-title text-xl font-bold text-primary desktop:text-left">
                {title}
            </p>
        </li>
    );
};
