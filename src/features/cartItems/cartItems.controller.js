// src/features/cartItems/cartItems.controller.js
import CartItemModel from "./cartItems.model.js"; // if you're still using it for get/delete
import CartItemsRepository from "./cartItems.repository.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export class CartItemsController {
  constructor() {
    this.cartItemsRepository = new CartItemsRepository();
  }

  async add(req, res, next) {
    try {
      // Prefer body for POST
      const { productID, quantity } = req.body || {};
      const userID = req.user?.id || req.userID;

      if (!userID) throw new ApplicationError("Unauthorized", 401);
      if (!productID) throw new ApplicationError("productID is required", 400);

      const item = await this.cartItemsRepository.add(productID, userID, quantity);
      return res.status(201).json({ success: true, data: item });
    } catch (err) {
      // Let global error middleware format this if you have it
      const status = err?.statusCode || 500;
      return res.status(status).json({ success: false, message: err.message || "Something went wrong" });
    }
  }

  get(req, res) {
    const userID = req.user?.id || req.userID;
    const items = CartItemModel.get(userID);
    return res.status(200).send(items);
  }

  delete(req, res) {
    const userID = req.user?.id || req.userID;
    const cartItemID = req.params.id;
    const error = CartItemModel.delete(cartItemID, userID);
    if (error) return res.status(404).send(error);
    return res.status(200).send("Cart item is removed");
  }
}
