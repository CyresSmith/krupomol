import { google } from 'googleapis';
import { DatesType, PricesType } from 'lib/types/purchase-prices.types';

export async function GET() {
    const sheetId = process.env['PRICE_SHEETS_ID'];
    const client_email = process.env['PRICE_SHEETS_EMAIL'];
    const private_key = process.env['PRICE_SHEETS_KEY'];

    if (!sheetId || !client_email || !private_key) {
        return new Response(
            JSON.stringify({ error: true, message: 'Check google-sheets api credentials!' }),
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

        const res = await googleSheetsApi.spreadsheets.values.get({
            range: 'PurchasePrices!A1:D100',
            spreadsheetId: sheetId,
        });

        const values = res.data.values ?? [];

        const headerRow = values[2] ?? [];
        const from = (headerRow[2] as string) ?? null;
        const to = (headerRow[3] as string) ?? null;

        const dates: DatesType = {
            from,
            to,
        };

        const dataRows = values.slice(2);
        const prices: PricesType[] = dataRows.map(row => ({
            price: row[1] !== undefined ? Number(row[1]) : 0,
            productName: String(row[0] ?? ''),
        }));

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
