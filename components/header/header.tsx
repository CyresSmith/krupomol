import Image from 'next/image';
import Link from 'next/link';

import { Navigation } from './navigation';

import logo from '@assets/images/krupomol_logo.png';

import { cn } from '@utils';

interface Props {
    rounded?: boolean;
}

export const Header = ({ rounded = false }: Props) => {
    return (
        <header className="w-full">
            <div className={cn('container bg-card py-6', rounded && 'rounded-b-[100px]')}>
                <div className="flex justify-between gap-5">
                    <Link className="relative h-20 w-[175px]" href={'/'}>
                        <Image
                            alt="Крупомол лого"
                            className="object-contain"
                            placeholder="empty"
                            priority
                            src={logo}
                        />
                    </Link>

                    <Navigation />
                </div>
            </div>
        </header>
    );
};
