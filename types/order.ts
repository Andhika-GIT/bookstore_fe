import { Book } from "./book";

type BookOrderItem = {
  book_id: string;
  book_price: number;
  book_name: string;
  img_url: string;
  order_quantity: number;
};

export type GetOrderResponse = {
  order_id: string;
  total_price: number;
  status: "CANCELLED" | "PENDING" | "SUCCESS" | "SETTLED";
  payment_type: string;
  va_number?: string;
  bank?: string;
  items: BookOrderItem[];
};

export type UserHistoryItems = {
  order_id: string;
  order_status: "CANCELLED" | "PENDING" | "SUCCESS" | "SETTLED";
  total_items: number;
  first_item: Book;
};

export type GetUserOrderHistoryResponse = {
  total_page: number;
  next_page: number;
  items: UserHistoryItems[];
};
