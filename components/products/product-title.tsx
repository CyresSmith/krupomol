import { Title } from '@components/shared';

interface Props {
    title: string;
}

const ProductTitle = ({ title }: Props) => {
    return (
        <Title
            as="h2"
            className="max-w-full text-left text-2xl font-bold uppercase mobile:text-center tablet:text-3xl desktop:text-4xl"
            title={title}
        />
    );
};

export default ProductTitle;
