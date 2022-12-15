import {
  getCartDataById,
  getProductsDataByCart,
  getAllCartsData,
} from '@server/models/cart';
import { ICartProps } from '@server/interfaces/cart';

export const getCartById = async (id: number) => {
  const cart: ICartProps[] = await getCartDataById(id);

  return cart;
};

export const getAllCarts = async () => {
  const carts: ICartProps[] = await getAllCartsData();

  return carts;
};

export const getProductsByCart = async (id: number) => {
  const cartProducts = getProductsDataByCart(id);

  return cartProducts;
};
