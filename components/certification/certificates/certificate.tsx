import { CertificateType } from 'lib/types/certificate.types';

import { Icon } from '@components/shared';

import { IconName } from '@types';

interface Props {
    item: CertificateType;
}

export const Certificate = ({ item }: Props) => {
    const { id, title } = item;

    return (
        <div className="flex flex-col items-center gap-5 desktop:flex-row desktop:gap-6">
            <Icon
                className="h-[64px] w-[64px] fill-primary desktop:h-[96px] desktop:w-[96px]"
                name={id as IconName}
            />

            <p className="text-center font-title text-xl font-bold text-primary desktop:text-left">
                {title}
            </p>
        </div>
    );
};
