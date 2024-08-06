"use client";

import React from "react";
import { Button } from "@/components/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCart } from "@/app/actions/cart";
import { ApiError, CreateCartRequest } from "@/types";
import { useToast } from "@/components/ui";

type AddToCartButtonProps = {
  book_id: number;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ book_id }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateCartRequest) => addCart(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
      toast({
        variant: "success",
        description: "successfully add item to cart",
        duration: 2000,
      });
    },
    onError: (error: ApiError) => {
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
    },
  });

  return (
    <Button
      disabled={isPending}
      onClick={() =>
        mutate({
          book_id: book_id,
          quantity: 1,
        })
      }
      variant="light_green"
    >
      Add to chart
    </Button>
  );
};

export default AddToCartButton;
