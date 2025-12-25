import Link from 'next/link';

export const Header = () => (
    <header className="bg-air-300">
        <div className="mx-auto flex items-center justify-between px-3 py-2 md:px-6 md:py-4 max-w-full md:max-w-3xl lg:max-w-300">
            <Link
                href="/"
                className="font-bold text-base md:text-lg lg:text-xl"
            >
                <i className="icon-airplane mr-2" />
                <span>AirServices</span>
            </Link>
        </div>
    </header>
);
