# AWS_nodejs_backend
Backend for E-commerce shopping site


API Gateway Endpoints:
  - GET - https://acllyrsnj5.execute-api.us-east-1.amazonaws.com/dev/products
  - GET - https://acllyrsnj5.execute-api.us-east-1.amazonaws.com/dev/products/{productid}
  
functions:
  - > getProducts: *product-service-dev-getProducts*
  - > getProductById: *product-service-dev-getProductById*


  GET - https://wbf7p3l5qj.execute-api.us-east-1.amazonaws.com/dev/products
  GET - https://wbf7p3l5qj.execute-api.us-east-1.amazonaws.com/dev/products/{productid}
  POST - https://wbf7p3l5qj.execute-api.us-east-1.amazonaws.com/dev/product
functions:
  getProducts: product-service-dev-getProducts (170 kB)
  getProductById: product-service-dev-getProductById (170 kB)
  createProduct: product-service-dev-createProduct (170 k