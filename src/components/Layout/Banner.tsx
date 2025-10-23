"use client";
import { useMemo } from "react";
import banners from "@/constants/banners.json";

export default function Banner() {
    const currentBanner = useMemo(() => {
        const hour = new Date().getHours();
        const index = hour % banners.length;
        return banners[index];
    }, []);
    return (
        <div className="relative w-screen h-64 overflow-hidden z-0">
            <img
                src={currentBanner}
                alt="Game Banner"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />

            <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                    Khám phá kho game siêu khủng 🔥
                </h2>
            </div>
        </div>
    );
}
