export interface PurchasePriceType {
    addInfo: string;
    price: number;
    productName: string;
    services: {
        cleaning: number;
        drying: number;
    };
    standards: {
        list: { desc: string; value: string }[];
        title: string;
    };
}

export interface CurrentDatesType {
    addInfo: string;
    desc: string;
    from: Date | string;
    title: string;
    to: Date | string;
}

export interface PurchasePricesDatesType {
    dates: CurrentDatesType;
    purchasePrices: PurchasePriceType[];
}
