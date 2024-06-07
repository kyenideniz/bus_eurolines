"use client"

import { City } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductCard {
    data: City;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    return ( 
        <div onClick={handleClick} className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
            {/* Images and Actions */}
            <div className="relative bg-gray-100 aspect-square rounded-xl">
                
            </div>
            {/* Description */}
            <div>
                <p className="text-lg font-semibold">
                    {data?.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.value}
                </p>
            </div>
            {/* Image */}
            <div className="flex items-center justify-between">
                {data?.url}
            </div>
            {/* Offered */}
            <div className="flex items-center justify-between">
                {data?.isOffered}
            </div>
        </div>
    );
}

export default ProductCard;