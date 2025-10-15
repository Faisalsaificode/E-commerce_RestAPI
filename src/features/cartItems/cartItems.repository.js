// src/features/cartItems/cartItems.repository.js
import { ApplicationError } from "../../error-handler/applicationError.js";
import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

export default class CartItemsRepository {
  constructor() {
    this.collection = "cartItems"; // <-- use a cart-specific collection
  }

  async add(productID, userID, quantity = 1) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);

      const newCartItem = {
        productID: new ObjectId(productID),
        userID: new ObjectId(userID),
        quantity: Number(quantity) || 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await collection.insertOne(newCartItem);
      return { ...newCartItem, _id: result.insertedId };
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
