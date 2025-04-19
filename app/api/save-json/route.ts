import { NextRequest, NextResponse } from 'next/server';

import fs from 'fs';
import { PurchasePricesDatesType } from 'lib/types/purchase-prices.types';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as PurchasePricesDatesType;

        const filePath = path.join(process.cwd(), 'data', 'purchase-prices.json');

        fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');

        return NextResponse.json({ message: 'Зміни збережено' }, { status: 200 });
    } catch (error) {
        console.error('Помилка при збереженні файлу:', error);
        return NextResponse.json({ message: 'Помилка при збереженні' }, { status: 500 });
    }
}
