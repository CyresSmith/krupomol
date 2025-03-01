import Image from 'next/image';
import Link from 'next/link';

import { Navigation } from './navigation';

import logo from '@assets/images/krupomol_logo.png';

import { cn } from '@utils';

interface Props {
    fixed?: boolean;
}

export const Header = ({ fixed = false }: Props) => {
    return (
        <header className={cn(fixed && 'fixed left-0 top-0 z-50 w-full py-5')}>
            <div className="container flex justify-between gap-5">
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
        </header>
    );
};
