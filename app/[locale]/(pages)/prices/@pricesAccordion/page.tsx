import { prices } from '@data';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/accordion';

import { PriceItem } from '@components/prices';
import { Title } from '@components/shared';

import { DataFromSheetsType, PurchasePricesDatesType, PurchasePriceType } from '@types';

const Page = async () => {
    let data: DataFromSheetsType | undefined = undefined;

    const response = await fetch(`${process.env['NEXT_PUBLIC_APP_HOST']}/api/google-sheets`);

    if (response.ok) {
        data = (await response.json()) as DataFromSheetsType;
    }

    const { dates, purchasePrices } = prices as PurchasePricesDatesType;

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

    return productsToRender.length > 0 ? (
        <div className="rounded-20 bg-primary px-4 py-4 text-background shadow-lg desktop:rounded-40 desktop:px-24 desktop:py-8">
            <Title
                className="border-b-2 border-background pb-4 font-title font-bold mobile:text-3xl tablet:text-3xl"
                title="Закупівельні ціни"
            />
            {productsToRender.map(product => (
                <Accordion className="mobile:pr-0" key={product.productName} type="multiple">
                    <AccordionItem value={product.productName}>
                        <AccordionTrigger className="justify-between border-b-[1px] border-background px-4 font-title text-xl font-bold mobile:text-lg">
                            <div className="mr-6 flex w-full justify-between mobile:flex-col mobile:gap-2">
                                <span>{product.productName}</span>
                                <span>{getNumberWithSpace(product.price.toFixed(2))} грн/т</span>
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
                        <span>{data.dates.from.length > 5 ? data.dates.from : '01.01.1901'}</span>{' '}
                        по 00:00{' '}
                        <span>{data.dates.to.length > 5 ? data.dates.to : '31.12.2100'}</span>.
                    </p>
                    <p className="mb-4">
                        *Вимоги щодо якості культур див. у контекстному меню при натисненні на назву
                        культури.
                    </p>
                    <p className="font-bold">Всі ціни вказано з ПДВ на умовах DAP.</p>
                </div>
            )}
        </div>
    ) : null;
};

export default Page;
