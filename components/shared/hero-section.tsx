import Image from 'next/image';

interface Props {
    bgName: string;
    children: React.ReactNode;
}

export const HeroSection = ({ bgName, children }: Props) => {
    return (
        <section className="relative flex h-[760px] items-center">
            <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src={`/images/${bgName}.jpg`}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

            {children}
        </section>
    );
};
