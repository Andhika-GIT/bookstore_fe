"use client";

import React, { useState, useEffect } from "react";
import { CartItem } from "@/components/molecules";
import { getCart } from "@/app/actions/cart";
import { useQuery } from "@tanstack/react-query";
import { ApiError, CartResponse, CartItem as CartItemType } from "@/types";
import { Text, Button } from "@/components/ui";

const CartItemSection: React.FC = () => {
  const {
    data: cartItems,
    isLoading,
    isError,
    error,
  } = useQuery<CartResponse, ApiError>({
    queryKey: ["cart-items"],
    queryFn: getCart,
  });

  const handleAdd = (item: CartItemType) => {};

  const handleRemove = (item: CartItemType) => {};

  const handleDelete = (id: string | number) => {};

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <div className="flex flex-col gap-4">
      {cartItems?.data?.items?.map((item) => (
        <CartItem
          key={item.book_id}
          img_url={item.img_url}
          book_name={item.title}
          quantity={item.quantity}
          onAdd={() => handleAdd(item)}
          onRemove={() => handleRemove(item)}
          onDelete={() => handleDelete(item.book_id)}
        />
      ))}
    </div>
  );
};

export default CartItemSection;
