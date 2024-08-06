export type CartItem = {
  cart_items_id: number;
  book_id: number;
  title: string;
  img_url: string;
  quantity: number;
  book_quantity: number;
  price: number;
};

export type CartResponse = {
  code: number;
  message: string;
  data: {
    cart_id: number;
    total_price: number;
    total_items: number;
    items: CartItem[];
  } | null;
};

export type CreateCartRequest = {
  book_id: number;
  quantity: number;
};
