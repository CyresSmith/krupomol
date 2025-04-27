import { About, Certification, Consultation, MainAdvantages, MainHero } from '@components/main';

export default function Home() {
    return (
        <>
            <MainHero />
            <About />
            <Certification />
            <MainAdvantages />
            <Consultation />
        </>
    );
}
