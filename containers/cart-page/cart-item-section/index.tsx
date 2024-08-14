"use client";

import React, { useState, useEffect } from "react";
import { CartItem } from "@/components/molecules";
import { getCart } from "@/app/actions/cart";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiError, CartResponse, TransactionPayload } from "@/types";
import { Text, Button, useToast } from "@/components/ui";

import { decreaseQuantity, increaseQuantity, deleteCartItems } from "@/app/actions/cart";
import { getTransactionToken } from "@/app/actions/transaction";

const CartItemSection: React.FC = () => {
  const { toast } = useToast();

  const {
    data: cartItems,
    isLoading,
    isError,
    error,
  } = useQuery<CartResponse, ApiError>({
    queryKey: ["cart-items"],
    queryFn: getCart,
  });

  const queryClient = useQueryClient();

  // ---- cart items mutation ---- //
  const { mutate: manipulateCart, isPending } = useMutation({
    mutationFn: (data: { type: string; cart_items_id: number }) => {
      const { type, cart_items_id } = data;

      if (type === "increase") {
        return increaseQuantity(cart_items_id, 1);
      }
      if (type === "decrease") {
        return decreaseQuantity(cart_items_id);
      }

      if (type === "delete") {
        return deleteCartItems(cart_items_id);
      }

      return Promise.reject(new Error("Invalid session type or form data"));
    },
    onError: (error: ApiError) => {
      if (String(error?.errorData?.code).startsWith("4")) {
        toast({
          variant: "destructive",
          description: error?.errorData?.message,
          duration: 3000,
        });
      } else {
        toast({
          variant: "destructive",
          description: "there's something wrong, please try again later",
          duration: 3000,
        });
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    },
  });

  // ---- create transaction mutation ---- //
  const { mutate: sendTransactionPayload } = useMutation({
    mutationFn: (data: TransactionPayload) => {
      return getTransactionToken(data);
    },
    onError: (error: ApiError) => {
      console.log(error);
    },
    onSuccess: (response) => {
      window.snap.pay(response.data.transactionToken),
        {
          onSuccess: function (result) {
            console.log("success");
            console.log(result);
          },
          onPending: function (result) {
            console.log("pending");
            console.log(result);
          },
          onError: function (result) {
            console.log("error");
            console.log(result);
          },
          onClose: function () {
            console.log("customer closed the popup without finishing the payment");
          },
        };
    },
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <Text type="p" className="text-xs md:text-base">
            Total Items : {cartItems?.data?.total_items}
          </Text>
          <Text type="p" className="font-bold text-xs md:text-base">
            Total Price : {cartItems?.data?.total_price}
          </Text>
        </div>

        <Button
          variant="light_green"
          className="p-2 text-xs md:p-3 md:text-xl"
          onClick={() =>
            sendTransactionPayload({
              total_price: cartItems?.data?.total_price,
              items: cartItems?.data?.items,
            })
          }
        >
          Checkout
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {cartItems?.data?.items?.map((item, index) => (
          <CartItem
            key={index}
            img_url={item.img_url}
            book_name={item.title}
            quantity={item.quantity}
            book_quantity={item?.book_quantity}
            price={item?.price}
            onProgress={isPending}
            cart_items_id={item?.cart_items_id}
            onUpdate={(data) => manipulateCart(data)}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemSection;
