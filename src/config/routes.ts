import express from 'express';
import { getCart, getCarts } from '@server/controller/cart';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send({
    message: 'Success',
    statusCode: 200,
  });
});

router.get('/cart', getCarts);

router.get('/cart/:id', getCart);

export default router;
