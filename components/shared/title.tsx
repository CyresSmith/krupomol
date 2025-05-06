import { titleFont } from '@fonts';

import { cn } from '@utils';

interface Props {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    id?: string;
    title: string;
}

export const Title = ({ as: As = 'h3', className, id, title }: Props) => {
    const splittedTitle = title.split(' ');
    const getIsLong = (word: string) => word.length > 15;

    return (
        <As
            className={cn('text-5xl font-bold drop-shadow-lg', titleFont.className, className)}
            id={id}
        >
            {splittedTitle.length ? (
                splittedTitle.map((word, i) => {
                    const isLong = getIsLong(word);
                    const isLast = i === splittedTitle.length - 1;
                    return (
                        <span className={cn(isLong && 'hyphens-auto')} key={i}>
                            {word}
                            {!isLast && ' '}
                        </span>
                    );
                })
            ) : (
                <span className={cn(getIsLong(title) && 'hyphens-auto')}>{title}</span>
            )}
        </As>
    );
};
