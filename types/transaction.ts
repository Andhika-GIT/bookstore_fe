import { CartItem } from "./cart";

export type TransactionPayload = {
  total_price: number | undefined;
  items: CartItem[] | undefined;
};
