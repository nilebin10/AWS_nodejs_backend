import { ProductSchema, StockSchema } from './model';
import { Dynamo } from './base-dynamo';

export class ProductSeeder {
    public dbSeeder: Dynamo<ProductSchema>; 
    private params: Record<string, any> = {
        TableName: 'product_table',
        config: {
            p_key: 'id',
            s_key: 'title'
        }
    }

    constructor() {
        this.dbSeeder = new Dynamo<ProductSchema>(this.params);
    }
}

export class StockSeeder {
    public dbSeeder: Dynamo<StockSchema>; 
    private params: Record<string, any> = {
        TableName: 'stock_table',
        config:{
            p_key: 'product_id',
            s_key: 'count'
        }
    }

    constructor() {
        this.dbSeeder = new Dynamo<StockSchema>(this.params);
    }
}