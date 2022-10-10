import { Context, Callback } from 'aws-lambda';
import { ProductService } from '../services';

const productService = new ProductService();
export async function getProducts(event: any, context: Context, callback: Callback) {

  const data = await productService.getProducts();
  const response = {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
        [...data]
    ),
  };
  
  return response;
}