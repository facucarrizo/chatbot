class SheetsService {
    private sheets: any; // Google Sheets API client

    constructor(auth: any) {
        this.sheets = require('@googleapis/sheets').sheets({ version: 'v4', auth });
    }

    async getFAQs(industry: string): Promise<any[]> {
        const range = `${industry}!A:B`; // Assuming FAQs are in columns A and B
        const response = await this.sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: range,
        });

        const rows = response.data.values;
        if (rows.length) {
            return rows.map(row => ({
                question: row[0],
                answer: row[1],
            }));
        } else {
            throw new Error('No data found.');
        }
    }
}

export default SheetsService;