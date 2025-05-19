'use client';

import { PropsWithChildren, useContext, useEffect, useState } from 'react';

import Image from 'next/image';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@ui/dialog';

import { LenisContext } from '@components/shared';

import { cn } from '@utils';

interface Props extends PropsWithChildren {
    className?: string;
    desc: string;
    image: string;
    title: string;
}

export const CertificateOpen = ({ children, className, desc, image, title }: Props) => {
    const lenis = useContext(LenisContext);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            lenis?.stop();
        } else {
            lenis?.start();
        }

        return () => {
            lenis?.start();
        };
    }, [lenis, open]);

    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger
                className={cn('relative h-full w-full transition hover:scale-[1.05]', className)}
            >
                {children}
            </DialogTrigger>

            <DialogContent className="border-none bg-transparent" id="modal">
                <DialogHeader className="sr-only">
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{desc}</DialogDescription>
                </DialogHeader>

                <div className="relative h-[80vh]">
                    <Image
                        alt="Certificate"
                        className="object-contain transition"
                        fill
                        sizes="(max-width: 1279px) 80vw, (min-width: 1280px) 50vw"
                        src={`/images/${image}.jpg`}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
