// import express
import express from 'express'
import * as ProductRouter from './src/features/product/product.routes';

// create server
const server = express();

// for all the request related to products, redirect to products routes.
//localhost:3200/api/produts
server.use("/api/products", ProductRouter)

// default request handler
server.get("/", (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
})

//specify port 
server.listen(3200,()=>{
    console.log("Server is running at 3200");
});

