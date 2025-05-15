'use client';

import { motion } from 'motion/react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { CertificateOpen } from './certificate-open';

import { CertificateType } from '@types';

import { cn } from '@utils';

export const CertificatesImages = () => {
    const t = useTranslations('certification.certificates');
    const list = t.raw('list') as CertificateType[];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0, y: '100%' },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                scale: { bounce: 0.2, type: 'spring' },
            },
            y: 0,
        },
    };

    return (
        <div className="absolute right-0 top-[-25px] z-10 tablet:right-[-75px] tablet:top-[-60px] desktop:top-[-75px]">
            <motion.ul
                className="relative flex h-[230px] w-[300px] rotate-[30deg] mobile:scale-[75%] tablet:scale-[75%]"
                initial="hidden"
                variants={containerVariants}
                viewport={{ amount: 'all', once: true }}
                whileInView="show"
            >
                {list.map(({ desc, id, title }, i) => {
                    return (
                        <motion.li
                            className={cn('absolute h-[230px] w-[150px]', {
                                'right-[33%]': i === 1,
                                'right-0 rotate-[50deg]': i === 2,
                                'rotate-[-50deg]': i === 0,
                            })}
                            key={id}
                            variants={itemVariants}
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
                        </motion.li>
                    );
                })}
            </motion.ul>
        </div>
    );
};
