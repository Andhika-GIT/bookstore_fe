import React from 'react'
import { Text } from '@/components/ui'
import { getOrder } from '@/app/actions/order'

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    const order = await getOrder(id)

    console.log(order)
  return (
    <div className="container mx-auto p-4 h-full">
    <Text type="p" className="mb-4 text-xl md:text-5xl font-bold">
      Order Detail
    </Text>
  </div>
  )
}

export default page