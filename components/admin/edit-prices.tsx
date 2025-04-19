'use client'

import { Section } from '@components/shared';
import prices from 'data/purchase-prices.json' assert {type: "json"};
import { PurchasePricesDatesType, PurchasePriceType } from 'lib/types/purchase-prices.types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@ui/index';
import { Input } from '@ui/input';


type EditType = Pick<PurchasePriceType, 'price' | 'productName'>;

export const EditPrices = () => {
    const { purchasePrices } = prices as PurchasePricesDatesType;
    const [data, setData] = useState<EditType[]>(purchasePrices.map(({ price, productName }) => ({ price, productName })));

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        const newProducts = purchasePrices.map(product => {
            return {...product, price: data.find(p => p.productName === product.productName)?.price}
        })
        
        await fetch('/api/save-json', {
        body: JSON.stringify({ ...prices, purchasePrices: newProducts }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
});
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        setData(prev => {
            return prev.map(item => {
                if (item.productName === e.target.name) {
                    return {...item, price: +e.target.value}
                } else {
                    return item
                }
            })
        })
    }

    /* eslint-disable @typescript-eslint/no-misused-promises */

    return (
        <Section>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <ul>
                        {data.map((item, i) => <li key={i}>
                            <label>{item.productName}</label>
                            <Input name={item.productName} onChange={handleChange} type='number' value={item.price} />
                        </li>)}
                    </ul>
                    <Button
                        className="mx-auto mt-6 w-1/2 mobile:w-full"
                        // disabled={!isValid}
                        size={'default'}
                        type="submit"
                        variant={'outline'}
                    >
                        Зберегти
                    </Button>
                </form>
            </div>
        </Section>
    );
};
