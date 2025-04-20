'use client'

import { Section } from '@components/shared';
import products from 'data/purchase-prices.json' assert {type: "json"};
import { PricesValidityType, PurchasePricesDatesType, PurchasePriceType } from 'lib/types/purchase-prices.types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@ui/index';
import { Input } from '@ui/input';


type EditType = Pick<PurchasePriceType, 'price' | 'productName'>;

export const EditPrices = () => {
    const { dates, purchasePrices } = products as PurchasePricesDatesType;
    const [prices, setPrices] = useState<EditType[]>(purchasePrices.map(({ price, productName }) => ({ price, productName })));
    const [newDates, setNewDates] = useState<PricesValidityType>(dates);

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        const newProducts = purchasePrices.map(product => {
            return {...product, price: prices.find(p => p.productName === product.productName)?.price}
        })
        
        await fetch('/api/save-json', {
        body: JSON.stringify({ dates: newDates, purchasePrices: newProducts }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
});
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>, dates?: boolean) => {
        e.preventDefault();
        const { name, value } = e.target;
        
        if (dates) {
            setNewDates(prev => { return {...prev, [name]: value}
            })
        } else {
            setPrices(prev => {
            return prev.map(item => {
                if (item.productName === name) {
                    return {...item, price: +value}
                } else {
                    return item
                }
            })
        })
        }
    }

    /* eslint-disable @typescript-eslint/no-misused-promises */

    return (
        <Section>
            <div className="container">
                <p className='mobile:text-2xl text-5xl font-bold mobile:mb-5 mb-8 text-center font-title'>Редагування закупівель:</p>
                <form className='tablet:max-w-[500px] desktop:max-w-[500px] mx-auto' onSubmit={onSubmit}>
                    <ul className='flex flex-col gap-4'>
                        {prices.map((item, i) =>
                        <li className='flex mobile:block items-center justify-between' key={i}>
                            <label className='mobile:inline-block mobile:mb-2 font-bold' htmlFor={item.productName}>{item.productName}</label>
                            <Input className='mobile:w-full w-[200px]' id={item.productName} name={item.productName} onChange={handleChange} type='number' value={item.price} />
                        </li>)}
                    </ul>
                    <div className='flex mobile:flex-col pt-4 mt-5 border-t-[1px] border-primary mobile:gap-3'>
                        <Input className='w-full' name='title' onChange={(e) => handleChange(e, true)} type='text' value={newDates.title} />
                        <label className='flex items-center ml-2 mobile:ml-0 mobile:justify-between'>з
                            <Input className='w-[130px] ml-2' name='from' onChange={(e) => handleChange(e, true)} type='text' value={newDates.from} />
                        </label>
                        <label className='flex items-center ml-2 mobile:ml-0 mobile:justify-between'>по
                            <Input className='w-[130px] ml-2' name='to' onChange={(e) => handleChange(e, true)} type='text' value={newDates.to} />
                        </label>
                    </div>
                    <Button
                        className="block mobile:mt-5 mt-8 w-[200px] mobile:w-full mx-auto"
                        // disabled={!isValid}
                        size={'default'}
                        type="submit"
                        variant={'primary'}
                    >
                        Зберегти
                    </Button>
                </form>
            </div>
        </Section>
    );
};
