import Image from 'next/image';

export const CertificatesImages = () => {
    return (
        <div className="absolute right-0 top-[-25px] z-10 tablet:right-[-75px] tablet:top-[-60px] desktop:top-[-75px]">
            <ul className="relative flex h-[230px] w-[300px] rotate-[30deg] mobile:scale-[75%] tablet:scale-[75%]">
                <li className="absolute h-[230px] w-[150px] rotate-[-20deg]">
                    <Image
                        alt="Certificate"
                        className="object-contain transition"
                        fill
                        // sizes="100vw"
                        src={`/images/certificate-1.jpg`}
                    />
                </li>
                <li className="absolute right-[33%] h-[230px] w-[150px]">
                    <Image
                        alt="Certificate"
                        className="object-contain transition"
                        fill
                        // sizes="100vw"
                        src={`/images/certificate-2.jpg`}
                    />
                </li>
                <li className="absolute right-0 h-[230px] w-[150px] rotate-[20deg]">
                    <Image
                        alt="Certificate"
                        className="object-contain transition"
                        fill
                        // sizes="100vw"
                        src={`/images/certificate-3.jpg`}
                    />
                </li>
            </ul>
        </div>
    );
};
