import { MoreInfo } from '@components/products/more-info/more-info';
import { ProductsList } from '@components/products/products-list/products-list';
import { WeOffer } from '@components/products/we-offer/we-offer';

export default function Products() {
    return (
        <>
            <ProductsList />
            <WeOffer />
            <MoreInfo />
        </>
    );
}
