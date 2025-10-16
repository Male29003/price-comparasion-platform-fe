export default function Banner() {
    return (
        <div className="relative overflow-hidden h-64 bg-black flex items-center justify-center">
            {/* lớp gradient tối hai bên để tạo chiều sâu */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />

            {/* lớp banner chạy ngang */}
            <div
                className="flex animate-scroll3d"
                style={{
                    transform: "perspective(800px) rotateY(10deg)", // 👈 hiệu ứng cong nhẹ
                    transformOrigin: "center",
                }}
            >
                {/* Lặp 2 lần để chạy vô tận */}
                <img
                    src="/images/banner1.jpg"
                    alt="Game Banner"
                    className="h-64 object-cover select-none pointer-events-none"
                />
                <img
                    src="/images/banner1.jpg"
                    alt="Game Banner duplicate"
                    className="h-64 object-cover select-none pointer-events-none"
                />
            </div>
        </div>
    );
}
