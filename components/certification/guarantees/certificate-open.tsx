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

interface Props extends PropsWithChildren {
    desc: string;
    image: string;
    title: string;
}

export const CertificateOpen = ({ children, desc, image, title }: Props) => {
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
            <DialogTrigger className="relative h-full w-full transition hover:scale-[1.05]">
                {children}
            </DialogTrigger>

            <DialogContent className="border-none bg-transparent">
                <DialogHeader className="sr-only">
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{desc}</DialogDescription>
                </DialogHeader>

                <div className="relative h-[80vh]">
                    <Image
                        alt="Certificate"
                        className="object-contain transition"
                        fill
                        sizes="100%"
                        src={`/images/${image}.jpg`}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
