import { getProducts } from '../shared/product-data';

export default async function (context, req) {
  try {
    const products = getProducts();
    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};