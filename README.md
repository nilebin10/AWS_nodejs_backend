# AWS_nodejs_backend
Backend for E-commerce shopping site


API Gateway Endpoints:
  - GET - https://dccrkklw2l.execute-api.us-east-1.amazonaws.com/dev/products
  - GET - https://dccrkklw2l.execute-api.us-east-1.amazonaws.com/dev/products/{productid}
  
functions:
  - > getProducts: *product-service-dev-getProducts*
  - > getProductById: *product-service-dev-getProductById*
