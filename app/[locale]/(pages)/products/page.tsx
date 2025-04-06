import { ProductsList } from '@components/products/list/products-list';
import { Info } from '@components/products/more-info/info';
import { Offer } from '@components/products/we-offer/offer';

export default function Products() {
    return (
        <>
            <ProductsList />
            <Offer />
            <Info />
        </>
    );
}
