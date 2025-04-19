import { PurchasePriceType } from 'lib/types/purchase-prices.types';

interface Props {
    item: PurchasePriceType;
}

export const PriceItem = ({ item }: Props) => {
    const { addInfo, services, standards } = item;

    return (
        <div className="flex flex-col gap-5 text-primary mobile:gap-3 mobile:text-sm">
            <p className="font-bold">Послуги:</p>
            <div>
                <p>Вартість сушки - {services.drying.toFixed(1)} грн/т * %</p>
                <p>Вартість очистки - {services.cleaning.toFixed(1)} грн/т * %</p>
            </div>
            <p className="font-bold">{standards.title}</p>
            <table className="tablet:w-[70%] desktop:w-[70%]">
                <tbody>
                    {standards.list.map((s, i) => (
                        <tr className="border-primary [&:not(:last-child)]:border-b-[1px]" key={i}>
                            <td className="border-r-[1px] border-inherit p-3 mobile:p-2">
                                {s.desc}
                            </td>
                            <td className="p-3 mobile:p-2">{s.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>{addInfo}</p>
        </div>
    );
};
