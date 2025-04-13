import Image from 'next/image';

import { CertificateType } from 'lib/types/certificate.types';

import { cn } from '@utils';

interface Props {
    index: number;
    item: CertificateType;
}

export const Certificate = ({ index, item }: Props) => {
    const { id, title } = item;

    return (
        <div
            className={cn(
                'flex flex-col items-center gap-5 rounded-20 bg-accent px-4 py-6 desktop:w-[70%] desktop:flex-row desktop:gap-6 desktop:rounded-40 desktop:px-8 desktop:py-3',
                index === 0 && 'desktop:ml-[250px]',
                index === 1 && 'desktop:ml-[125px]'
            )}
        >
            <div className="relative flex size-[64px] min-w-[64px] items-center justify-center desktop:size-[96px]">
                <Image
                    alt={title}
                    className="object-contain transition"
                    fill
                    sizes="100%"
                    src={`/images/${id}.png`}
                />
            </div>
            <p className="text-center font-title text-xl font-bold text-primary desktop:text-left">
                {title}
            </p>
        </div>
    );
};
