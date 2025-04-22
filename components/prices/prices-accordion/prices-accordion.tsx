'use client'

import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@ui/accordion';

import { Loader, Section, Title } from '@components/shared';

import prices from "data/purchase-prices.json" assert {type: "json"};
import { PricesValidityType, PurchasePricesDatesType, PurchasePriceType } from 'lib/types/purchase-prices.types';
import { PriceItem } from './price-item';
import { useEffect, useState } from 'react';

interface DataType {
    dates: Pick<PricesValidityType, 'from' | 'to'>
    prices: Pick<PurchasePriceType, 'price' | 'productName'>[];
}

export const PricesAccordion = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType | null>(null);
    const { dates, purchasePrices } = prices as PurchasePricesDatesType;

    useEffect(() => {
        async function getSheets() {
            const response = await fetch('/api/google-sheets');
            if (!response.ok) {
                throw new Error('Failed to fetch Google Sheets data');
            }

            const data = await response.json() as DataType;
            return data;
        }

        setLoading(true);
        getSheets().then(response => setData(response)).catch(e => console.error('Error:', e)).finally(() => setLoading(false));
    }, [])

    const getNumberWithSpace = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const productsToRender: PurchasePriceType[] = purchasePrices.map((product) => {
        const matched = data?.prices.find((p) => p.productName.toLowerCase().trim() === product.productName.toLowerCase().trim());

        if (typeof matched?.price !== 'number') return null;

        return {
            ...product,
            price: matched.price,
            };
    }).filter((p): p is PurchasePriceType => p !== null);

    return loading ? <Loader className='fixed top-0 right-0 left-0 bottom-0' /> : productsToRender.length > 0 && (<Section className='!pb-0' variant='secondary'>
            <div className="container">
                <div className="rounded-20 bg-primary px-4 py-4 text-background shadow-lg desktop:rounded-40 desktop:px-24 desktop:py-8">
                    <Accordion type="multiple">
                        <AccordionItem value="Закупівельні ціни">
                            <AccordionTrigger className="font-title font-bold border-b-2 border-background">
                                <Title className='mobile:text-3xl tablet:text-3xl'>Закупівельні ціни</Title>
                            </AccordionTrigger>
                            <AccordionContent>
                                {productsToRender.map(product => (
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
                {data?.dates && (
                    <div>
                        <p className='font-bold mt-6 mb-4'>{dates.title}:</p>
                        <p className='mb-4'>з <span>{data.dates.from} 00:00 </span>по <span>{data.dates.to} 00:00</span>.</p>
                        <p className='mb-4'>*Вимоги щодо якості культур див. у контекстному меню при натисненні на назву культури.</p>
                        <p className='font-bold'>Всі ціни вказано з ПДВ на умовах DAP.</p>
                    </div>
                    )}
                </div>
            </div>
        </Section>)
};
