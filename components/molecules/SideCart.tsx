"use client";

import React, { useEffect } from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";

import { getCart } from "@/app/actions/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiError, CartResponse } from "@/types";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import { SideCartSkeleton } from "../loader";
import Link from "next/link";
import { decreaseQuantity, increaseQuantity ,deleteCartItems } from "@/app/actions/cart";
import { useToast } from "@/components/ui";

type SideCartProps = {
  isShowingCart: boolean;
  setIsShowingCart: (prev: boolean) => void;
};

const SideCart: React.FC<SideCartProps> = ({ isShowingCart, setIsShowingCart }) => {
  const {toast} = useToast()
  const {
    data: cartItems,
    isLoading,
    isError,
    error,
  } = useQuery<CartResponse, ApiError>({
    queryKey: ["cart-items"],
    queryFn: getCart,
    enabled: isShowingCart,
  });

  const router = useRouter();
  const queryClient = useQueryClient()

  const {mutate, isPending} = useMutation({
    mutationFn: (data: {type: string, cart_items_id: number}) => {
      const {type, cart_items_id} = data

      if(type === "increase"){
        return increaseQuantity(cart_items_id, 1)
      }
      if(type === "decrease"){
        return decreaseQuantity(cart_items_id)
      } 
      
      if(type === "delete") {
        return deleteCartItems(cart_items_id)
      }

        return Promise.reject(new Error("Invalid session type or form data"));
      
    }, onError: (error: ApiError) => {
      if (String(error?.errorData?.code).startsWith('4')) {
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
    }, onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    }
  })

  useEffect(() => {
    if (isError) {
      const apiError = error as ApiError;

      if (apiError.errorData.code === 401) {
        setIsShowingCart(false);
        router.replace("/auth"); // Arahkan ke halaman login jika terjadi kesalahan 401
      }
    }
  }, [isError, error, router, setIsShowingCart]);

  return (
    <Sheet open={isShowingCart} onOpenChange={setIsShowingCart}>
      <SheetContent side="right" className="bg-[#FAF9F6] px-4 md:max-w-lg overflow-scroll">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Review your items</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-between gap-8 w-full">
          {isLoading ? (
            <div className="flex flex-col gap-y-5 py-6">
              {[...Array(3)].map((_, index) => (
                <SideCartSkeleton key={index} />
              ))}
            </div>
          ) : (
            cartItems && (
              <div className="flex flex-col gap-y-5 py-6">
                {cartItems?.data?.items?.map((book, index) => (
                  <CartItem
                    key={index}
                    img_url={book.img_url}
                    book_name={book.title}
                    quantity={book.quantity}
                    book_quantity={book?.book_quantity}
                    price={book?.price}
                    onProgress={isPending}
                    cart_items_id={book?.cart_items_id}
                    onUpdate={(data) => mutate(data)}

                  />
                ))}
              </div>
            )
          )}
          <Link href={isError || isLoading || (cartItems?.data?.items?.length || 0) < 1 ? '#' : '/carts'}>
            <Button variant="light_green" className="w-full" disabled={isError || isLoading || (cartItems?.data?.items?.length || 0) < 1 }>
              View Cart
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
