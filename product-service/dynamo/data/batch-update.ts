import { ProductSeeder, StockSeeder } from './dynamo-helper';
import path from 'path';
import fs from 'fs';

export default class UpdateTable {
    private productSeeder: ProductSeeder;
    private stockSeeder: StockSeeder;
    constructor() {
        this.productSeeder = new ProductSeeder();
        this.stockSeeder = new StockSeeder();
    }

    async populateData(){
        const product_data_path = path.resolve(__dirname, 'product.json');
        const stock_data_path = path.resolve(__dirname, 'stock.json');

        const product_data = JSON.parse(fs.readFileSync(product_data_path, 'utf-8'));
        const stock_data = JSON.parse(fs.readFileSync(stock_data_path, 'utf-8'));

        return await Promise.all([this.productSeeder.dbSeeder.populateTable(product_data),
            this.stockSeeder.dbSeeder.populateTable(stock_data)]);
    }
}

const updateTable = new UpdateTable();

updateTable.populateData().then(() => {
    console.log('Going to populate data');
}).catch((err) => {
    console.log(err)
})