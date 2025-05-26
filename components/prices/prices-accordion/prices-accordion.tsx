'use client';

import { useEffect, useState } from 'react';

import {
    DataFromSheetsType,
    PurchasePricesDatesType,
    PurchasePriceType,
} from 'lib/types/purchase-prices.types';

import { PriceItem } from './price-item';

import { prices } from '@data';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/accordion';

import { Loader, Section, Title } from '@components/shared';

import { ANCHORS } from '@constants';

export const PricesAccordion = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataFromSheetsType | null>(null);
    const { dates, purchasePrices } = prices as PurchasePricesDatesType;

    useEffect(() => {
        async function getSheets() {
            const response = await fetch('/api/google-sheets');
            if (!response.ok) {
                throw new Error('Failed to fetch Google Sheets data');
            }

            const data = (await response.json()) as DataFromSheetsType;
            return data;
        }

        setLoading(true);
        getSheets()
            .then(response => setData(response))
            .catch(e => console.error('Error:', e))
            .finally(() => setLoading(false));
    }, []);

    const getNumberWithSpace = (x: string) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    const productsToRender: PurchasePriceType[] = purchasePrices
        .map(product => {
            const matched = data?.prices.find(
                p => p.productName.toLowerCase().trim() === product.productName.toLowerCase().trim()
            );

            if (typeof matched?.price !== 'number' || matched.price === 0) return null;

            return {
                ...product,
                price: matched.price,
            };
        })
        .filter((p): p is PurchasePriceType => p !== null);

    return loading ? (
        <Loader className="fixed bottom-0 left-0 right-0 top-0" />
    ) : (
        productsToRender.length > 0 && (
            <Section className="!pb-4" id={ANCHORS.prices.prices} variant="secondary">
                <div className="container">
                    <div className="rounded-20 bg-primary px-4 py-4 text-background shadow-lg desktop:rounded-40 desktop:px-24 desktop:py-8">
                        <Title
                            className="border-b-2 border-background pb-4 font-title font-bold mobile:text-3xl tablet:text-3xl"
                            title="Закупівельні ціни"
                        />
                        {productsToRender.map(product => (
                            <Accordion
                                className="mobile:pr-0"
                                key={product.productName}
                                type="multiple"
                            >
                                <AccordionItem value={product.productName}>
                                    <AccordionTrigger className="justify-between border-b-[1px] border-background px-4 font-title text-xl font-bold mobile:text-lg">
                                        <div className="mr-6 flex w-full justify-between mobile:flex-col mobile:gap-2">
                                            <span>{product.productName}</span>
                                            <span>
                                                {getNumberWithSpace(product.price.toFixed(2))} грн/т
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="rounded-b-20 border border-t-0 border-background bg-background p-5 text-base mobile:p-3">
                                        <PriceItem item={product} />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                        {data?.dates && (
                            <div>
                                <p className="mb-4 mt-6 font-bold">{dates.title}</p>
                                <p className="mb-4">
                                    з 00:00{' '}
                                    <span>
                                        {data.dates.from.length > 5
                                            ? data.dates.from
                                            : '01.01.1901'}
                                    </span>{' '}
                                    по 00:00{' '}
                                    <span>
                                        {data.dates.to.length > 5 ? data.dates.to : '31.12.2100'}
                                    </span>
                                    .
                                </p>
                                <p className="mb-4">
                                    *Вимоги щодо якості культур див. у контекстному меню при
                                    натисненні на назву культури.
                                </p>
                                <p className="font-bold">Всі ціни вказано з ПДВ на умовах DAP.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        )
    );
};
