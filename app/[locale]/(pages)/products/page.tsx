import { Hero } from '@components/products/hero';
import { ProductsList } from '@components/products/list/products-list';
import { Info } from '@components/products/more-info/info';
import { Offer } from '@components/products/we-offer/offer';
import { HeroSection } from '@components/shared';

export default function Products() {
    return (
        <>
            <HeroSection bgName="products-hero">
                <Hero />
            </HeroSection>
            <ProductsList />
            <Offer />
            <Info />
        </>
    );
}
