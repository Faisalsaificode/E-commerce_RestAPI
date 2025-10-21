import {ObjectId} from 'mongodb';
import { getDB } from "../../config/mongodb.js";

export default class OrderRepository{
    constructor(){
        this.collection = "orders";
    }

    async placeOrder(userId){

        // 1. Get cartitems and calculate total amount.

        await this.getTotalAmount();

        // 2. Create an order record.

        // 3. Reduce the stock.

        // 4. Clear the cart items.
    }

    async getTotalAmount(userId){
        const gdb = getDB();

        const items = await db.collection('cartItems').aggregate([
            // 1. get cart items for the user
            {
                $match:{userId: new ObjectId(userId)}
            },
            // 2. get the product from products collection
            {
                $lookup:{
                    from:"products",
                    localField:"productID",
                    foreignField:"_id",
                    as:"productinfo"
                }
            },
            // 3.  unwind the productInfo
            {
                $unwind:"$productInfo"
            },

            //4. calculate totalAmount fro each cartitems
            {
                $addField:{
                    "totalamount":{
                        $multiply:["$productInfo.price", "$quantity"]
                    }
                }
            }
        ]).toArray();
        console.log(items);
    }
}