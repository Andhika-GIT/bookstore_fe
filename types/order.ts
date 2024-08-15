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
  status: "CANCELLED" | "PENDING" | "SUCCESS" | "SETTLEMENT";
  payment_type: string;
  va_number?: string;
  items: BookOrderItem[];
};

export type GetUserOrderHistoryResponse = {
  order_id: string;
  order_status: string;
  total_items: number;
};
