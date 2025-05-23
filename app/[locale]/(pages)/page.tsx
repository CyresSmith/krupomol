import {
    About,
    Certification,
    Consultation,
    MainAdvantages,
    MainHero,
    OurProducts,
} from '@components/main';

export default function Home() {
    return (
        <>
            <MainHero />
            <About />
            <OurProducts />
            <Certification />
            <MainAdvantages />
            <Consultation />
        </>
    );
}
