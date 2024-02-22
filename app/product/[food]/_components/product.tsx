"use client";
import { Button } from "@/components/ui/button";
import { productlistData } from "@/data/products";
import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import ProductDescription from "./productDescription";
import ProductReviews from "./productReviews";

type ProductDetailsType = {
    food: string
}

const Product: React.FC<ProductDetailsType> = ({ food }) => {
    const product = productlistData.find((x?: any, index?: any) => x?.title === decodeURIComponent(food))
    // console.log(product, productlistData, decodeURIComponent(food))
    return (
        <>
            <div className="py-12 border-t border-b border-[rgba(0,0,0,.1)] flex flex-col items-start gap-12">
                <div className="w-[90%] m-auto max-w-custom_1 grid md:grid-cols-custom_4 grid-cols-1 gap-12 items-start">
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-[50%] mx-auto">
                            <img src={product?.image} alt="" className="w-full" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col pt-20 gap-8">
                        <div className="flex w-full flex-col gap-4">
                            <h3 className="text-2xl font-bold font-font_sans">
                                {product?.title}
                                <span className="block text-dark_grey text-base font-medium font-font_karla">
                                    {product?.subtitle}
                                </span>
                            </h3>
                            <span className="block text-dark_grey text-lg font-normal font-font_karla">
                                Be the first to leave a review
                            </span>
                            <h3 className="text-3xl font-bold font-font_sans">
                                $ {product?.price}
                            </h3>

                        </div>
                        <Button className="text-sm font-normal">
                            ADD TO CART
                        </Button>

                        <h4 className="font-font_karla font-normal text-lg">
                            Integer tristique dictum sapien et lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed imperdiet magna, at rhoncus arcu.
                        </h4>

                        <div className="flex flex-col gap-8 mt-12">
                            <h3 className="text-sm flex items-center justify-between gap-2 font-bold font-font_sans">
                                Shipping Delivery
                                <Plus />
                            </h3>

                            <h3 className="text-sm flex items-center justify-between gap-2 font-bold font-font_sans">
                                Return & Exchanges
                                <Plus />

                            </h3>
                        </div>
                    </div>
                </div>
                <ProductDescription food={food} />
                <ProductReviews
                    food={food}
                />
            </div>
        </>


    );
};

export default Product