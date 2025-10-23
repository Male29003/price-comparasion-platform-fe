import Link from "next/link";
import { ShoppingCart, Search } from 'lucide-react';
import Image from "next/image";
import { useUserStore } from "@/stores/auth/userStore";

export default function Header() {
    const { isLoggedIn, login, logout } = useUserStore();

    return (
        <header className="bg-gray-900 flex items-center justify-center text-white py-3 shadow-md">
            <div className="mx-15 flex justify-between items-cente">
                <Link href="/" className="text-2xl font-bold text-yellow-400 whitespace-nowrap">G2A Clone</Link>
            </div>

            <div className="relative flex items-center w-full max-w-md">
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-full pl-3 pr-10 py-2 rounded-md bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
                <Search
                    size={18}
                    className="absolute right-3 text-gray-400 cursor-pointer hover:text-yellow-400 transition"
                />
            </div>

            <div className="flex items-center mx-5 gap-6">
                <Link href="" className="relative hover:text-yellow-400 transition">
                    <ShoppingCart size={24} />
                    <span className="amount-products-in-cart absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                    </span>
                </Link>

                {isLoggedIn ? (
                    <>
                        <Image
                            src="/images/user-logo.jpg"
                            alt="Avatar"
                            width={32}
                            height={32}
                            className="rounded-full border border-gray-700 cursor-pointer hover:border-yellow-400 transition"
                        />
                        <button onClick={logout} className="bg-yellow-400 text-black font-bold text-xs px-2 py-1 rounded-md hover:bg-yellow-300 transition">
                            Đăng xuất
                        </button>
                    </>
                ) : (
                    <div className="flex items-center gap-1">
                        <button onClick={login} className="bg-yellow-400 text-black font-bold text-xs px-2 py-2 rounded-md hover:bg-yellow-300 transition">
                            Đăng nhập
                        </button>
                        <button
                            onClick={logout}
                            className="hover:text-yellow-300 hover:text-yellow-300 px-2 py-2 rounded-md hover:outline-none hover:ring-2 transition text-xs"
                        >
                            Đăng ký
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}