import ProductCard from "../ProductCard";

export default function HotDealsSection() {
    const hotDeals = [
        { title: "Cyberpunk 2077", price: 390000, image: "/assets/products/game1.jpg" },
        { title: "Elden Ring", price: 420000, image: "/assets/products/game2.jpg" },
        { title: "GTA V", price: 250000, image: "/assets/products/game3.jpg" },
        { title: "Red Dead Redemption 2", price: 460000, image: "/assets/products/game4.jpg" },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 my-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Ưu đãi Hot 🔥</h2>
                <a href="/deals" className="text-yellow-500 hover:underline">Xem tất cả</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {hotDeals.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
