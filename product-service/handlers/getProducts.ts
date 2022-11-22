import { ProductService, createResponse, STATUS_CODE } from '../services';
import { winstonLogger } from '../services/logger';

const productService = new ProductService();
export async function getProducts() {

  try {
        winstonLogger.logRequest(`GET_PRODUCT_BY_ID:: Request for products`);
    const data = await productService.getProducts() || [];
    const response = createResponse(data, false, STATUS_CODE.SUCCESS);
    return response
  } catch(err: any) {
    const response = createResponse(err, true, err.errCode ?? STATUS_CODE.INTERNAL_ERROR);
    return response
  }
}