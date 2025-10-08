import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">
            <Link href="/" className="text-xl font-bold text-yellow-400">G2A Clone</Link>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="px-3 py-1 rounded-md text-black w-60"
                />
                <button className="bg-yellow-400 text-black px-4 py-1 rounded-md font-medium hover:bg-yellow-300">
                    Đăng nhập
                </button>
            </div>
        </header>
    );
}