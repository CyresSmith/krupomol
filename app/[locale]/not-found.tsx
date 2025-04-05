import Link from 'next/link';

import { buttonVariants } from '@ui/button';

import { HOME_ROUTE } from '@routes';

import { cn } from '@utils';

const NotFound = () => {
    return (
        <div className="flex h-screen w-screen flex-col content-center justify-center text-center">
            <h2 className="text-xxl text-destructive">Not found</h2>

            <p className="mt-6 text-xl">Requested recourse not found</p>

            <Link className={cn('mx-auto mt-6', buttonVariants())} href={HOME_ROUTE}>
                Return to home page
            </Link>
        </div>
    );
};

export default NotFound;
