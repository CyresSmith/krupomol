import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { CertificateOpen } from './certificate-open';

import { CertificateType } from '@types';

import { cn } from '@utils';

export const CertificatesImages = async () => {
    const t = await getTranslations('certification.certificates');
    const list = t.raw('list') as CertificateType[];

    return (
        <div className="absolute right-0 top-[-25px] z-10 tablet:right-[-75px] tablet:top-[-60px] desktop:top-[-75px]">
            <ul className="relative flex h-[230px] w-[300px] rotate-[30deg] mobile:scale-[75%] tablet:scale-[75%]">
                {list.map(({ desc, id, title }, i) => (
                    <li
                        className={cn('absolute h-[230px] w-[150px]', {
                            'right-[33%]': i === 1,
                            'right-0 rotate-[20deg]': i === 2,
                            'rotate-[-20deg]': i === 0,
                        })}
                        key={id}
                    >
                        <CertificateOpen desc={desc} image={id} title={title}>
                            <Image
                                alt={title}
                                className="object-contain transition"
                                fill
                                priority
                                sizes="100%"
                                src={`/images/${id}.jpg`}
                            />
                        </CertificateOpen>
                    </li>
                ))}
            </ul>
        </div>
    );
};
