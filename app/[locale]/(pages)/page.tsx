// import { getTranslations } from 'next-intl/server';
import { About, Certification, Consultation, MainAdvantages, MainHero } from '@components/main';

export default async function Home() {
    // const t = await getTranslations('header.navigation.anchors.main');

    // console.log(Object.keys(t.raw('main' as keyof typeof t.raw)));

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
