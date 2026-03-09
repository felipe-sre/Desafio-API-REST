const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/auth');

router.get('/order/list', orderController.listOrders); 
router.get('/order/:orderId', orderController.getOrderById); 

router.post('/order', authMiddleware, orderController.createOrder); 
router.put('/order/:orderId', authMiddleware, orderController.updateOrder); 
router.delete('/order/:orderId', authMiddleware, orderController.deleteOrder);

module.exports = router;