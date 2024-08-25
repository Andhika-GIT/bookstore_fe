import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Text,
  Button,
} from "@/components/ui";
import { UserHistoryItems } from "@/types";
import OrderStatus from "./OrderStatus";
import Image from "next/image";
import Link from "next/link";

const OrderHistoryItem: React.FC<UserHistoryItems> = ({
  order_id,
  order_status,
  total_items,
  first_item,
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col md:flex-row md:justify-between items-baseline md:items-center">
        <CardTitle>
          <OrderStatus order_status={order_status} />
        </CardTitle>
        <CardDescription className="lowercase">order id : {order_id}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-x-4 items-center">
        <Image
          src={first_item.img_url}
          width={30}
          height={30}
          alt={`img-${order_id}-${first_item.img_url}`}
          className="shadow-xl"
        />
        <Text type="span" className="">
          {first_item.title} {total_items > 1 && `+ ${total_items - 1} more items..`}
        </Text>
      </CardContent>
      <CardFooter>
        <Link href={`/orders/${order_id}`}>
          <Button variant="grey" className="py-1 px-4 font-bold">
            View Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OrderHistoryItem;
