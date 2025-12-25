export default function Loading() {
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <svg
                className="animate-spin w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
                viewBox="0 0 50 50"
            >
                <defs>
                    <linearGradient
                        id="spinnerGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#91b4cf" stopOpacity="1" />
                        <stop
                            offset="100%"
                            stopColor="#91b4cf"
                            stopOpacity="0"
                        />
                    </linearGradient>
                </defs>
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="url(#spinnerGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
