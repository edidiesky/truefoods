"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="py-16">
                <div className=" w-full gap-x-32 justify-between">
                    <div className="flex w-full lg:w-[90%] md:pl-16 lg:px-12 mx-auto items-center flex-col gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="md:text-[3.5rem] lg:text-[4rem] leading-[0.9] text-start md:text-center font-shop_bold">
                            Products
                        </h1>
                    </div>

                </div>
            </div>
        </>


    );
};

export default Hero