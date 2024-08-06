import React from "react";
import Image from "next/image";
import { Text } from "../ui";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";


type SideCartItemProps = {
  img_url: string;
  book_name: string;
  quantity: number;
  price: number;
};

const SideCartItem: React.FC<SideCartItemProps> = ({ img_url, book_name, quantity, price }) => {

  return (
    <div className="flex justify-between items-center">
    <div className="flex gap-2">
      <Image
        src={img_url}
        width={60}
        height={60}
        alt={`img-${book_name}-${quantity}`}
        className="shadow-xl"
      />

      <div className="flex flex-col justify-center gap-y-1">
        <Text type="h6" className="font-bold">
          {book_name}
        </Text>
        <div className="flex items-center gap-x-3">
         <FiMinusSquare size={22} className="cursor-pointer"/>
        <Text type="p">qty : {quantity}</Text>
        <FaRegSquarePlus size={20}  className="cursor-pointer" />
        </div>
       
        <Text type="p">price : {quantity * price}</Text>
      </div>
    </div>
    <FaRegTrashAlt size={25} style={{color: 'red'}}  className="cursor-pointer" />
    </div>
  );
};

export default SideCartItem;
