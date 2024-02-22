"use client";
import { Button } from "@/components/ui/button";
import { productlistData } from "@/data/products";
import React, { useState } from "react";
import Link from "next/link";

const ProductList = () => {
    return (
        <>
            <div className="py-8 border-t border-b border-[rgba(0,0,0,.1)] flex items-center gap-4">
                <div className="w-full m-auto max-w-custom_1 gap-12 flex items-center">
                    <div className="flex items-center gap-4">
                        <h5 className="font-normal text-sm leading-[1.1]">
                            FILTER BY
                        </h5>
                        <h4 className="font-extrabold text-base leading-[1.1]">
                            All Products
                        </h4>
                    </div>


                    <div className="flex items-center gap-4">
                        <h5 className="font-normal text-sm leading-[1.1]">
                            SORT BY
                        </h5>
                        <h4 className="font-extrabold text-base leading-[1.1]">
                            Date: Old to New
                        </h4>
                    </div>
                </div>
            </div>
            <div className=" pb-24 w-full">
                <div className="w-full m-auto max-w-custom_1 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-between">
                    {
                        productlistData.map((x?: any, index?: any) => {
                            return <Link href={`/product/${x?.title}`} className="w-full md:flex hidden item-center justify-end">
                                <span className="flex items-center justify-center">
                                    <div className="py-8 w-[90%] mx-auto relative flex flex-col item-start gap-2 justify-center">
                                        <div className="w-full">
                                            <img src={x?.image} alt="" className="w-full" />
                                        </div>
                                        <div className="flex flex-1 px-2 font-font_sans items-start justify-center flex-col gap-2">
                                            <h4 className="font-bold hover:underline font-font_sans text-base leading-[1.1]">

                                               {x?.title}
                                            </h4>
                                            <h5 className="text-[#EA0A0A] font-bold text-base">
                                                ${x.price}
                                            </h5>
                                            {/* <div className="w-full flex items-center">
                                                <Button className="text-bold px-4 py-2 text-[12px] text-white">
                                                    Buy Now
                                                </Button>
                                            </div> */}
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        })
                    }
                </div>
            </div>
        </>


    );
};

export default ProductList