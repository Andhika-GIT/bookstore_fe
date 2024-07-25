export type CartItem = {
  book_id: number;
  title: string;
  img_url: string;
  quantity: number;
};

export type CartResponse = {
  code: number;
  message: string;
  data: {
    cart_id: number;
    items: CartItem[];
  };
};

export type CreateCartRequest = {
  book_id: number;
  quantity: number;
};
