import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Banner />
            <main className="flex-grow px-6 py-6 bg-gray-50">
                {children}
            </main>
            <Footer />
        </div>
    );
}
