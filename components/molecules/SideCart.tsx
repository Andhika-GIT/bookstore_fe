"use client";

import React, { useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui";

import { getCart } from "@/app/actions/cart";
import { useQuery } from "@tanstack/react-query";
import { ApiError, CartResponse } from "@/types";
import { useRouter } from "next/navigation";
import SideCartItem from "./SideCartItem";
import { SideCartSkeleton } from "../loader";

type SideCartProps = {
  isShowingCart: boolean;
  setIsShowingCart: (prev: boolean) => void;
};

const SideCart: React.FC<SideCartProps> = ({ isShowingCart, setIsShowingCart }) => {
  const { data, isLoading, isError, error } = useQuery<CartResponse, ApiError>({
    queryKey: ["cart-items"],
    queryFn: getCart,
    enabled: isShowingCart,
  });

  const router = useRouter();

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
      <SheetContent side="right" className="bg-[#FAF9F6]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Review your items</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="flex flex-col gap-y-5 py-6">
            {[...Array(3)].map((_, index) => (
              <SideCartSkeleton key={index} />
            ))}
          </div>
        ) : (
          data && (
            <div className="flex flex-col gap-y-5 py-6">
              {data.data.items.map((book, index) => (
                <SideCartItem
                  key={index}
                  img_url={book.img_url}
                  book_name={book.title}
                  quantity={book.quantity}
                />
              ))}
            </div>
          )
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
