import Image from 'next/image';

export const EmptyBg = () => {
    return (
        <section className="relative h-[596px]">
            <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src={`/images/prices-bags.jpg`}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        </section>
    );
};
