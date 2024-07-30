import React from "react";
import Image from "next/image";
import { Text, Button } from "@/components/ui";

type CartItemProps = {
  img_url: string;
  book_name: string;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
};

const CartItem: React.FC<CartItemProps> = ({
  img_url,
  book_name,
  quantity,
  onAdd,
  onRemove,
  onDelete,
}) => {
  return (
    <div className="flex gap-4 items-center border border-black p-2">
      <Image src={img_url} width={80} height={80} alt={`img-${book_name}`} className="shadow-xl" />

      <div className="flex flex-col justify-center gap-y-2 flex-1">
        <Text type="h5" className="font-bold">
          {book_name}
        </Text>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onRemove}>
            -
          </Button>
          <Text type="p">{quantity}</Text>
          <Button variant="outline" onClick={onAdd}>
            +
          </Button>
        </div>
      </div>

      <Button variant="destructive" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default CartItem;
