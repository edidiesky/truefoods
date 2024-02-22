"use client";
import Smallarrow from "@/assets/svg/smallarrow";
import { Button } from "@/components/ui/button";
import { productlistData } from "@/data/products";
import React, { useState } from "react";
type HeaderProps = {
    sidebar?: boolean,
    setSidebar: (val: boolean) => void;
}
const ProductList: React.FC<HeaderProps> = ({ sidebar, setSidebar }) => {
    const [activetab, setActiveTab] = useState({
        index: 0,
        active: false
    })
    // console.log(productlistData[activetab?.index].image)
    return (
        <>
            <div className="pb-56 w-full bg-[#FCFBF9]">
                <div className="w-full grid grid-cols-custom_2 justify-between">
                    <div className="w-full bg-[#FCFBF9]">
                        <div className="flex  w-full lg:w-[380px] px-12 py-12 mx-auto items-start justify-end flex-col gap-y-4 gap-x-4">
                            {
                                productlistData?.map((x?: any, index?: any) => {
                                    return <h2 key={index} onMouseOver={() => setActiveTab({
                                        index: index,
                                        active: true
                                    })}
                                        className={`text-4xl ${activetab?.index === index ? 'text-text_dark_1' : "text-dark_grey"} cursor-pointer font-shop_bold`}>
                                        <span className="block text-sm">California</span>
                                        <span className="flex items-center gap-1">
                                            {x?.subtitle}
                                            <span className={`${activetab?.index === index ? 'opacity-1' : "opacity-0"}`}>
                                                <Smallarrow />
                                            </span>
                                        </span>
                                    </h2>
                                })
                            }
                        </div>
                    </div>
                    <div className="w-full bg-[#F2EEEB] md:flex hidden item-center justify-end">
                        <span className="flex items-center justify-center">
                            <div className="py-8 w-[80%] mx-auto relative flex item-center justify-center">
                                <div className="flex-1">
                                    <img src={productlistData[activetab?.index]?.image} alt="" className="w-full" />
                                </div>
                                <div className="flex flex-1 items-start justify-center flex-col gap-8">
                                    <h4 className="font-shop_bold text-lg">

                                        Flavorful, creamy texture and hearty
                                    </h4>
                                    <h4 className="font-shop_light text-lg">
                                        {productlistData[activetab?.index].description}
                                    </h4>
                                    <h5 className="text-dark_grey text-base">
                                        Starting at ${productlistData[activetab?.index].price}
                                    </h5>

                                    <div className="w-full flex items-center">
                                        <Button className="text-bold px-4 text-base text-white">
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
            </div>
        </>


    );
};

export default ProductList