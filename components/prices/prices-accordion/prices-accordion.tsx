import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@ui/accordion';

const prices = [
    { price: 10000, productName: 'Гечка' },
    { price: 10000, productName: 'Гечка' },
    { price: 10000, productName: 'Гечка' },
];

export const PricesAccordion = () => {
    return (
        <Accordion collapsible type="single">
            <AccordionItem value="Закупівельні ціни">
                <AccordionContent>
                    <ul>
                        {prices.map((price, i) => (
                            <li key={i}>{price.productName}</li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
