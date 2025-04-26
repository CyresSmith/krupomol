import { google } from 'googleapis';

interface Product {
    price: number | undefined;
    productName: string;
}

interface Dates {
    from: string;
    to: string;
}

export async function GET() {
    const sheetId = process.env['PRICE_SHEETS_ID'];
    const client_email = process.env['PRICE_SHEETS_EMAIL'];
    const private_key = process.env['PRICE_SHEETS_KEY'];

    if (!sheetId || !client_email || !private_key) {
        return new Response(
            JSON.stringify({ error: true, message: 'Check googlesheets api credentials!' }),
            {
                status: 400,
            }
        );
    }

    try {
        const client = new google.auth.JWT(client_email, undefined, private_key, [
            'https://www.googleapis.com/auth/spreadsheets.readonly',
        ]);

        await client.authorize();
        const googleSheetsApi = google.sheets({ auth: client, version: 'v4' });

        const pricesRes = await googleSheetsApi.spreadsheets.values.get({
            range: 'Ціни',
            spreadsheetId: sheetId,
        });

        const rawPrices = pricesRes.data.values ?? [];
        const prices: Product[] = rawPrices.map(row => ({
            price: Number(row[1]) || undefined,
            productName: String(row[0] ?? ''),
        }));

        const datesRes = await googleSheetsApi.spreadsheets.values.get({
            range: 'Дати',
            spreadsheetId: sheetId,
        });

        const rawDates = datesRes.data.values ?? [];

        const dates: Dates = rawDates.reduce((acc, row) => {
            const key = String(row[0]);
            const value = String(row[1]);

            if (key === 'from' || key === 'to') {
                acc[key] = value;
            }

            return acc;
        }, {} as Dates);

        return new Response(JSON.stringify({ dates, prices }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
        });
    } catch (e: unknown) {
        const error = e instanceof Error ? e : new Error('Unknown error');
        console.error('Error reading Google Sheets:', error);
        return new Response(JSON.stringify({ error: true, message: error.message }), {
            status: 500,
        });
    }
}
