import { Infos, Offer, ProductsHero, ProductsList } from '@components/products';

export default function Products() {
    return (
        <>
            <ProductsHero />
            <ProductsList />
            <Offer />
            <Infos />
        </>
    );
}
