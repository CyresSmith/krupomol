import { Hero } from '@components/products/hero';
import { Infos } from '@components/products/info/infos';
import { ProductsList } from '@components/products/list/products-list';
import { Offer } from '@components/products/offer/offer';
import { HeroSection } from '@components/shared';

export default function Products() {
    return (
        <>
            <HeroSection bgName="products-hero">
                <Hero />
            </HeroSection>
            <ProductsList />
            <Offer />
            <Infos />
        </>
    );
}
