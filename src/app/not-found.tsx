export default function NotFound() {
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="card bg-white p-4 md:p-6 lg:p-8 text-center max-w-xs md:max-w-sm lg:max-w-md">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6">
                    404
                </h1>
                <p className="text-secondary text-sm md:text-base lg:text-base mb-4 md:mb-6 lg:mb-6">
                    Страница не найдена
                </p>
                <a href="/" className="btn btn-primary w-full md:w-auto">
                    Вернуться на главную
                </a>
            </div>
        </div>
    );
}
