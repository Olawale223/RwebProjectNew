import axios from 'axios';
import Order from '../models/Order.model.js';

export const payment = async (req, res) => {
  const { reference, customer, cart } = req.body;

  if (!reference) {
    return res.status(400).json({ status: 'error', message: 'Reference is required' });
  }
  if (!customer || !cart) {
    return res.status(400).json({ status: 'error', message: 'Customer and cart are required' });
  }

  const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_6cb6abfbeb9a1a5cb05e6b22744a6a4d1bd925d9';

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${paystackSecretKey}` },
      }
    );

    const result = response.data;

    if (result.status && result.data.status === 'success') {
      const order = await Order.create({
        customer,
        cart,
        payment: {
          reference: result.data.reference,
          amount: result.data.amount,
          currency: result.data.currency,
          channel: result.data.channel,
          paidAt: result.data.paid_at,
        },
        status: 'paid',
      });

      return res.json({ status: 'success', order });
    } else {
      return res.status(400).json({ status: 'error', message: result.message || 'Payment not successful' });
    }
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({
      status: 'error',
      message: err.response?.data?.message || err.message,
    });
  }
};
