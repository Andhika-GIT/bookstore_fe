import React from "react";
import Image from "next/image";
import { Text } from "../ui";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui";

type CartItemProps = {
  cart_items_id: number;
  img_url: string;
  book_name: string;
  quantity: number;
  book_quantity: number;
  price: number;
  onProgress: boolean;
  onUpdate: ({ type, cart_items_id }: { type: string; cart_items_id: number }) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  img_url,
  book_name,
  quantity,
  book_quantity,
  price,
  cart_items_id,
  onProgress,
  onUpdate,
}) => {
  const onIconClicked = (type: string) => {
    if (onProgress) {
      return;
    }

    onUpdate({ type, cart_items_id });
  };

  return (
    <div className="flex justify-between items-center border border-[#46383c] p-2">
      <div className="flex gap-2">
        <Image
          src={img_url}
          width={60}
          height={60}
          alt={`img-${book_name}-${quantity}`}
          className="shadow-xl"
        />

        <div className="flex flex-col justify-center gap-y-2">
          <Text type="h6" className="font-bold">
            {book_name}
          </Text>
          <div className="flex items-center gap-x-3">
            <Button disabled={onProgress} onClick={() => onIconClicked("decrease")} className="p-0 bg-transparent cursor-pointer disabled:opacity-50 hover:bg-transparent h-1">
              <FiMinusSquare size={22} style={{ color: "red" }} />
            </Button>
            <Text type="p">
              qty : {quantity} / {book_quantity}
            </Text>
            <Button disabled={quantity === book_quantity} onClick={() => onIconClicked("increase")} className="p-0 bg-transparent cursor-pointer disabled:opacity-50 hover:bg-transparent h-1">
              <FaRegSquarePlus
                size={20}
                style={{ color: "green" }}
              />
            </Button>
          </div>
          <Text type="p" className="font-bold">price : {quantity * price}</Text>
        </div>
      </div>
      <Button disabled={onProgress} onClick={() => onIconClicked("delete")} className="p-0 bg-transparent cursor-pointer disabled:opacity-50 hover:bg-transparent">
        <FaRegTrashAlt
          size={25}
          style={{ color: "red" }}
          className="cursor-pointer"
        />
      </Button>
     
    </div>
  );
};

export default CartItem;
