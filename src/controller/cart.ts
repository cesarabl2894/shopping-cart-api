import ResponseHandler from '@utils/response';
import {
  getCartById,
  getProductsByCart,
  getAllCarts,
} from '@server/services/cart';

const getCart = async (req, res) => {
  const { id } = req.params;
  const responseObj = new ResponseHandler();

  const [cart] = await getCartById(id);
  if (!cart) {
    responseObj.setMessage('Product Not Found');
    responseObj.setStatusCode(404);
    res.status(404).send(responseObj);
    return;
  }

  const { cart_id: cartId } = cart;
  const cartProducts = await getProductsByCart(cartId);
  cart['products'] = cartProducts;
  const subtotal = cartProducts.reduce(
    (productsPrices: any, lastProduct: any) => {
      return productsPrices + lastProduct.price;
    },
    0
  );

  const discounts = cartProducts.reduce(
    (productsPrices: any, lastProduct: any) => {
      return productsPrices + lastProduct.price * lastProduct.discount;
    },
    0
  );
  const total = subtotal - discounts;

  responseObj.setStatusCode(200);
  responseObj.setData({ ...cart, total, subtotal, discounts });

  res.send(responseObj);
};

const getCarts = async (_req, res) => {
  const responseObj = new ResponseHandler();
  const carts = await getAllCarts();

  responseObj.setStatusCode(200);
  responseObj.setData({ carts });
  res.send(responseObj);
};

export { getCart, getCarts };
