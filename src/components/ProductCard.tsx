import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
    return (
        <div className="group bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition relative">
            <Image
                src={image}
                alt={title}
                width={400}
                height={250}
                className="object-cover w-full h-40"
            />
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">{title}</h3>
                <p className="text-yellow-600 font-bold mt-1">₫{price.toLocaleString()}</p>
            </div>

            {/* Nút Add to Cart nổi khi hover */}
            <button className="absolute inset-x-0 bottom-0 bg-yellow-400 text-black font-medium text-sm py-2 opacity-0 group-hover:opacity-100 transition">
                <ShoppingCart className="inline mr-1" size={16} /> Thêm vào giỏ
            </button>
        </div>
    );
}
