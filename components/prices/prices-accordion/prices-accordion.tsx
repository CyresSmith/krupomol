import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@ui/accordion';

import { Section, Title } from '@components/shared';

import prices from "data/purchase-prices.json" assert {type: "json"};
import { PurchasePricesDatesType } from 'lib/types/purchase-prices.types';
import { PriceItem } from './price-item';

export const PricesAccordion = () => {
    const { dates, purchasePrices } = prices as PurchasePricesDatesType;

    const getNumberWithSpace = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <Section className="bg-secondary">
            <div className="container">
                <div className="rounded-20 bg-primary px-4 py-4 text-background shadow-lg desktop:rounded-40 desktop:px-24 desktop:py-8">
                    <Accordion type="multiple">
                        <AccordionItem value="Закупівельні ціни">
                            <AccordionTrigger className="font-title font-bold border-b-2 border-background">
                                <Title className='mobile:text-3xl tablet:text-3xl'>Закупівельні ціни</Title>
                            </AccordionTrigger>
                            <AccordionContent>
                                {purchasePrices.map(product => (
                                    <Accordion
                                        className="mobile:pr-0 pr-12"
                                        key={product.productName}
                                        type="multiple"
                                    >
                                        <AccordionItem value={product.productName}>
                                            <AccordionTrigger className="px-4 font-title mobile:text-lg text-xl font-bold justify-between border-b-[1px] border-background">
                                                <div className='w-full flex mobile:flex-col mobile:gap-2 justify-between mr-6'><span>{product.productName}</span><span>{getNumberWithSpace(product.price.toFixed(2))} грн/т</span></div>
                                            </AccordionTrigger>
                                            <AccordionContent className='rounded-b-20 border border-t-0 border-background bg-background mobile:p-3 p-5 text-base'>
                                                <PriceItem item={product} />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div>
                        <p className='font-bold mt-6 mb-4'>{dates.title}:</p>
                        <p className='mb-4'>з <span>{dates.from} 00:00 </span>по <span>{dates.to} 00:00</span>.</p>
                        <p className='mb-4'>*Вимоги щодо якості культур див. у контекстному меню при натисненні на назву культури.</p>
                        <p className='font-bold'>Всі ціни вказано з ПДВ на умовах DAP.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
