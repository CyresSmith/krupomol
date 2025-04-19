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

export interface PricesValidityType {
    from: string;
    title: string;
    to: string;
}

export interface PurchasePricesDatesType {
    dates: PricesValidityType;
    purchasePrices: PurchasePriceType[];
}
