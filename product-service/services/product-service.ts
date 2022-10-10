import products from "./productList.json";

export class IProductService {
    getProducts: () => Promise<any[]>;
    getProductById: (id: string) => Promise<any>
}

export class ProductService implements IProductService {

    getProducts() {
        return Promise.resolve(products);
    }

    getProductById(id: string) {
        const product = products.find((item) => item?.id === id);
        return Promise.resolve(product);
    }
}