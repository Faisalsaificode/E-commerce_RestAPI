// 1. Import Express
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItems.routes.js';
import apiDocs from './swagger.json' with { type: 'json' };

// 2. Create Server
const server = express();

server.use(express.json());


server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));

// for all requests related to product, redirect to product routes.
server.use('/api/products', jwtAuth, productRouter);
server.use('/api/cartItems', jwtAuth, cartRouter);
server.use('/api/users', userRouter);

// 3. Default request handler
server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});

// 4. Middleware to handle 404 requests

server.use((req, res) => {
  res
    .status(404)
    .send(
      `API not found. Please check our documentation for more information at 
      <a href="http://localhost:3200/api-docs" target="_blank">http://localhost:3200/api-docs</a>`
    );
});


// 5. Specify port.
server.listen(3200, () => {
  console.log('Server is running at 3200');
});
