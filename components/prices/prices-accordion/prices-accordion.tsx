import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@ui/accordion';

import { Section, Title } from '@components/shared';

import prices from "./../purchase-prices.json" assert {type: "json"};
import { PurchasePricesDatesType } from 'lib/types/pusrchase-prices.types';
import { PriceItem } from './price-item';

export const PricesAccordion = () => {
    const { purchasePrices } = prices as PurchasePricesDatesType;

    const getNumberWithSpace = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <Section className="bg-secondary">
            <div className="container">
                <div className="rounded-20 bg-accent px-4 py-4 text-primary shadow-lg desktop:rounded-40 desktop:px-24 desktop:py-8">
                    <Accordion type="multiple">
                        <AccordionItem value="Закупівельні ціни">
                            <AccordionTrigger className="font-title font-bold border-b-2 border-primary">
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
                                            <AccordionTrigger className="px-4 font-title mobile:text-lg text-xl font-bold justify-between border-b-[1px] border-primary">
                                                <div className='w-full flex mobile:flex-col mobile:gap-2 justify-between mr-6'><span>{product.productName}</span><span>{getNumberWithSpace(product.price.toFixed(2))} грн/т</span></div>
                                            </AccordionTrigger>
                                            <AccordionContent className='rounded-b-20 border border-t-0 border-primary bg-secondary mobile:p-3 p-5 text-base'>
                                                <PriceItem item={product} />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </Section>
    );
};
