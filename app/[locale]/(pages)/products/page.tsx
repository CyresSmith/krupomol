import { MoreInfo } from '@components/products/more-info';
import { ProductsCarousel } from '@components/products/products-carousel';
import { WeOffer } from '@components/products/we-offer';

export default function Products() {
    return (
        <>
            <ProductsCarousel />
            <WeOffer />
            <MoreInfo />
        </>
    );
}
