import { About } from '@components/about';
import { Hero } from '@components/hero';
import { Production } from '@components/production';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Production />
        </>
    );
}
