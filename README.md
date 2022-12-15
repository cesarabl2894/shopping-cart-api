## Simple Shopping Cart

We have at the moment two main endpoints, which don't require any authentication
All success response will get a 200 answer with a data object containing the info corresponding to the data retrieved.

If is an Update or delete operation, it can return responseMessage that can be displayed on the frontend.

# The `/cart` will fetch all the basic data of the cart, without bringing the cart summary and products.

## All Carts Metadata Response

```json
{
  "statusCode": 200,
  "responseMessage": "",
  "data": {
    "carts": [
      {
        "cart_id": 1,
        "created_at": "2022-12-14T06:00:00.000Z",
        "is_abandoned": 0
      }
    ]
  }
}
```

# In order to get a cart information with all the products inside, you must add the the :id param on the request `/cart/:id`

## Cart with Products Response

```json
{
  "statusCode": 200,
  "responseMessage": "",
  "data": {
    "cart_id": 1,
    "created_at": "2022-12-14T06:00:00.000Z",
    "is_abandoned": 0,
    "products": [
      {
        "cart_id": 1,
        "product_id": 2,
        "description": "Macbook Pro Laptop",
        "price": 1200,
        "name": "MacBook Pro",
        "category_name": "Electronics",
        "is_abandoned": 0,
        "img_url": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
        "discount": 0.1,
        "created_at": "2022-12-14T06:00:00.000Z"
      }
    ],
    "total": 1530,
    "subtotal": 1700,
    "discounts": 170
  }
}
```
