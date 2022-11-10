const express = require("express");
const router = express.Router();
const userApi = require("../controllers/user_controller");
const orderApi = require("../controllers/order_controller");
const auth = require("../config/auth");
console.log("router loaded");

// router.get("/", userApi.index);
router.post("/add-user", userApi.addUser);
router.post("/login-user", userApi.login);
router.post("/add-order", auth, orderApi.addOrder);
router.get("/get-order", auth, orderApi.getOrders);

module.exports = router;
