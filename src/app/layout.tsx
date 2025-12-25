import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export const metadata: Metadata = {
    title: 'TECCOD',
    description: 'MVP for selecting additional airline services',
    icons: {
        icon: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/icons/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/icons/favicon-16x16.png',
            },
        ],
        apple: '/icons/apple-touch-icon.png',
        other: [{ rel: 'manifest', url: '/icons/site.webmanifest' }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className="min-h-screen flex flex-col overflow-x-hidden">
                <Header />

                <main className="flex-1 w-full flex justify-center ">
                    <div className="bg-air-400 w-full px-4 py-4 md:px-6 md:py-6 md:max-w-3xl lg:max-w-300 md:mx-6 lg:mx-8">
                        {children}
                    </div>
                </main>

                <Footer />
            </body>
        </html>
    );
}
