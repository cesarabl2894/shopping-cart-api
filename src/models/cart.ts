import Database from '@server/config/database/db';
import { ICartProps } from '@server/interfaces/cart';

export const getAllCartsData = async () => {
  const db = new Database();

  const results: Promise<ICartProps[]> = await db.execute(
    `
      SELECT * FROM cart;
    `,
    []
  );

  return results;
};

export const getProductsDataByCart = async (cartId: number) => {
  const db = new Database();
  const results: Promise<ICartProps[]> = await db.execute(
    `
      SELECT cart.cart_id, product.product_id, 
      product.description, product.price, product.name, 
      categories.category_name, cart.is_abandoned,
      product.img_url,cart_details.discount,
      cart.created_at
      FROM cart
      INNER JOIN cart_details ON cart.cart_id = cart_details.cart_id
      INNER JOIN product ON cart_details.product_id = product.product_id
      INNER JOIN categories ON product.category_id = categories.category_id
      WHERE cart.cart_id = ?;
    `,
    [cartId]
  );

  return results;
};

export const getCartDataById = async (cartId): Promise<ICartProps[]> => {
  const db = new Database();
  const results: Promise<ICartProps[]> = await db.execute(
    `
      SELECT * FROM cart WHERE cart_id = ?;
    `,
    [cartId]
  );

  return results;
};
