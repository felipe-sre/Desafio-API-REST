const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    
    res.status(201).json({ message: 'Pedido criado com sucesso', order: savedOrder });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pedido', details: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    
    if (!order) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedido', details: error.message });
  }
};

exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pedidos', details: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Pedido não encontrado para atualização' });
    }

    res.status(200).json({ message: 'Pedido atualizado com sucesso', order: updatedOrder });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar pedido', details: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findOneAndDelete({ orderId: req.params.orderId });

    if (!deletedOrder) {
      return res.status(404).json({ error: 'Pedido não encontrado para exclusão' });
    }

    res.status(200).json({ message: 'Pedido deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pedido', details: error.message });
  }
};