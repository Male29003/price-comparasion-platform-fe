export default function CategorySection() {
    const categories = [
        { name: "Hành động", image: "/assets/categories/action.jpg" },
        { name: "Phiêu lưu", image: "/assets/categories/adventure.jpg" },
        { name: "Nhập vai", image: "/assets/categories/rpg.jpg" },
        { name: "Thể thao", image: "/assets/categories/sports.jpg" },
    ];
    return (
        <section className="max-w-6xl mx-auto px-6 my-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Danh mục nổi bật 🎮</h2>
                <a href="/categories" className="text-yellow-500 hover:underline">Xem tất cả</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="object-cover w-full h-32"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                            <h3 className="text-white text-lg font-semibold">{cat.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}