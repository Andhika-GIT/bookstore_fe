type BookOrderItem = {
  book_id: string;
  book_price: number;
  img_url: string;
  order_quantity: number;
};

export type GetOrderResponse = {
  order_id: string;
  total_price: number;
  status: string;
  items: BookOrderItem[];
};
