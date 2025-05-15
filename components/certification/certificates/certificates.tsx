'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import { useTranslations } from 'next-intl';

import { Certificate } from './certificate';

import { CertificateOpen } from '../guarantees/certificate-open';

import { Section, Title } from '@components/shared';

import { CertificateType } from '@types';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

export const Certificates = () => {
    const t = useTranslations('certification.certificates');
    const list = t.raw('list') as CertificateType[];

    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        offset: ['start end', 'end start'],
        target: container,
    });

    const x1 = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '30%']);
    const x2 = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '-20%']);
    const x3 = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '-40%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [1, 1, 0, 0]);

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
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
        <Section
            className="overflow-hidden"
            id={ANCHORS.certification.certificates}
            variant="secondary"
        >
            <div className="container" ref={container}>
                <Title
                    as="h5"
                    className="mb-10 text-center text-4xl text-primary desktop:text-5xl"
                    title={t('title')}
                />

                <motion.ul
                    animate="show"
                    className="flex w-full flex-col gap-6"
                    initial="hidden"
                    variants={containerVariants}
                >
                    {list.map((item, i) => (
                        <motion.li
                            className="block w-full"
                            key={i}
                            style={{ opacity, x: i === 0 ? x1 : i === 1 ? x2 : x3 }}
                            variants={itemVariants}
                        >
                            <CertificateOpen
                                {...item}
                                className={cn(
                                    'rounded-20 bg-accent px-4 py-6 shadow-lg desktop:w-[70%] desktop:rounded-40 desktop:px-8 desktop:py-3',
                                    i === 0 && 'desktop:ml-[250px]',
                                    i === 1 && 'desktop:ml-[125px]'
                                )}
                                image={item.id}
                            >
                                <Certificate item={item} />
                            </CertificateOpen>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </Section>
    );
};
