<<<<<<< HEAD


=======
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba
const express = require("express");
const router = express.Router();
const createOrder = require('../controllers/PayPal/createOrder')
const captureOrder = require('../controllers/PayPal/captureOrder')
const cancelPayment = require('../controllers/PayPal/cancelOrder')
<<<<<<< HEAD
const getDataOrderById= require("../controllers/PayPal/getDataOrderById")
=======

>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba

router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);

router.get("/cancel-order", cancelPayment);
<<<<<<< HEAD
router.get("/getDataOrderById/:id", getDataOrderById);
=======
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba

module.exports = router;