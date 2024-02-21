"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3CenterLeft, HiBars2 } from "react-icons/hi2";
import React from "react";
type HeaderProps = {
    sidebar?: boolean,
    setSidebar: (val: boolean) => void;
}
const Hero: React.FC<HeaderProps> = ({ sidebar, setSidebar }) => {
    return (
        <>
            <div className="py-16">
                <div className="w-full grid grid-cols-custom_3 gap-x-32 justify-between">
                    <div className="flex w-full lg:w-[90%] md:pl-16 lg:px-12 mx-auto items-start flex-col gap-y-8 gap-x-4">
                        {/* <Logo /> */}
                        <h1 className="md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-shop_bold">
                            Growing
                            <span className="font-shop_italic leading-[1] text-green_1 block">
                                delicious
                            </span>

                        </h1>
                        <h4 className="text-lg font-shop_light w-full">
                            You never knew rice could taste like this. Our farmers grow for flavor — with practices that respect people, wildlife and the planet, because that’s just the right thing to do.
                        </h4>
                        <div className="w-full flex items-start">
                            <Button className="text-xl text-white font-bold ">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:flex hidden item-center justify-end">
                        <div className="py-8 w-full relative flex item-center justify-center">
                            <video
                                src="https://assets-global.website-files.com/6169cfc20b135ad0372542c8/6169cfc20b135ac24b254329_True%20Origins%20Hero%20Video%20-%20web%20-%20smaller-transcode.mp4"
                                loop
                                muted
                                autoPlay
                                className="w-full"
                            ></video>
                        </div>
                    </div>

                </div>
            </div>
            <div className="py-20 bg-[#F2EEEB]">
                <h2 className="text-[7rem] font-shop_bold">
                    Sustainable.  Sustainable.
                </h2>
            </div>
        </>


    );
};

export default Hero