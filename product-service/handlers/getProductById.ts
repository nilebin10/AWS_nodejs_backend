import { Context, Callback } from 'aws-lambda';
import { ProductService } from '../services';

const productService = new ProductService();
export async function getProductById(event: any, context: Context, callback: Callback) {

    const { productid } = event.pathParameters;
  const data = await productService.getProductById(productid);
  const response = {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
        ...data,
    }),
  };
  
  return response;
}