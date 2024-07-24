import React from "react";
import Image from "next/image";
import { Text } from "../ui";

type SideCartItemProps = {
  img_url: string;
  book_name: string;
  quantity: number;
};

const SideCartItem: React.FC<SideCartItemProps> = ({ img_url, book_name, quantity }) => {
  return (
    <div className="flex gap-2">
      <Image
        src={img_url}
        width={60}
        height={60}
        alt={`img-${book_name}-${quantity}`}
        className="shadow-xl"
      />

      <div className="flex flex-col gap-y-1">
        <Text type="h6" className="font-bold">
          {book_name}
        </Text>
        <Text type="p" cl>
          qty : {quantity}
        </Text>
      </div>
    </div>
  );
};

export default SideCartItem;
