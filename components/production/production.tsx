import { Icon, SectionCarousel, Title } from '@components/shared';

import a from '@assets/images/production/112.jpg';
import d from '@assets/images/production/173.jpg';
import f from '@assets/images/production/751.jpg';
import c from '@assets/images/production/1221.jpg';
import b from '@assets/images/production/12015.jpg';
import e from '@assets/images/production/17445.jpg';
import g from '@assets/images/production/19369.jpg';

const photos = [a, b, c, d, e, g, f];

export const Production = () => {
    return (
        <section className="py-12">
            <div className="container">
                <div className="grid grid-cols-2 place-content-center items-start gap-6">
                    <div className="mb-6 grid grid-cols-[theme(space.12),1fr] items-center gap-6">
                        <Icon className="size-12 fill-foreground" name="wheat" />
                        <Title>Виробництво</Title>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3 [&_p]:text-justify">
                            <Title as="h5" className="text-2xl">
                                Цех виробництва круп
                            </Title>

                            <ul className="list-disc">
                                <li>
                                    лінія переробки зерна гречки на крупу потужністю 200 тон за
                                    добу;
                                </li>
                                <li>
                                    лінія переробки зерна вівса на крупу потужністю 90 тон за добу;
                                </li>
                                <li>
                                    лінія переробки зерна кукурудзи на крупу потужністю 140 тон за
                                    добу;
                                </li>
                                <li>
                                    лінія переробки зерна пшениці, ячменю, жита, проса на крупу
                                    потужністю 75 тон за добу;
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 [&_p]:text-justify">
                            <Title as="h5" className="text-2xl">
                                Цех виробництва пластівців та борошна:
                            </Title>

                            <ul className="list-disc">
                                <li>
                                    лінія виробництва пластівців вівсяних, гречаних, кукурудзяних,
                                    пшеничних, ячмінних, житніх і пшоняних, а також їх суміші,
                                    потужністю 75 тон за добу;
                                </li>
                                <li>
                                    лінія виробництва борошна гречаного для продуктів дитячого
                                    харчування потужністю 25 тон за добу;
                                </li>
                                <li>
                                    лінія виробництва борошна кукурудзяного для продуктів дитячого
                                    харчування потужністю 25 тон за добу;
                                </li>
                                <li>
                                    лінія виробництва вівсяної крупки для продуктів дитячого
                                    харчування потужністю 25 тон за добу.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <SectionCarousel items={photos} />
            </div>
        </section>
    );
};
