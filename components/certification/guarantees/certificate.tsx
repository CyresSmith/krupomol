'use client';

import { useContext, useEffect, useState } from 'react';

import Image from 'next/image';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog';

import { LenisContext } from '@components/shared';

interface Props {
    image: string;
}

export const Certificate = ({ image }: Props) => {
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
            <DialogTrigger>
                <Image
                    alt="Certificate"
                    className="object-contain transition"
                    fill
                    src={`/images/${image}.jpg`}
                />
            </DialogTrigger>

            <DialogContent className="border-none bg-transparent">
                <DialogHeader className="sr-only">
                    <DialogTitle>Certificate</DialogTitle>
                </DialogHeader>

                <div className="h-[80vh]">
                    <Image
                        alt="Certificate"
                        className="object-contain transition"
                        fill
                        src={`/images/${image}.jpg`}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
