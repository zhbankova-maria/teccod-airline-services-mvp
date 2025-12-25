import { useRouter } from 'next/navigation';
import { Service } from '@/types/service';
import Button from './ui/Button';

type SummaryCardProps = {
    selected: Service[];
    deleteAll: () => void;
};

export default function SummaryCard({ selected, deleteAll }: SummaryCardProps) {
    const router = useRouter();

    const total = selected.reduce((sum, s) => sum + s.price, 0);

    return (
        <aside className="card bg-air-300 p-3 md:p-4 lg:p-5 space-y-3 md:space-y-4">
            <h2 className="font-semibold text-base md:text-lg lg:text-lg">
                Итого
            </h2>

            {selected.length === 0 ? (
                <p className="text-sm md:text-base text-air-100">
                    Услуги не выбраны
                </p>
            ) : (
                <ul className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                    {selected.map((s) => (
                        <li
                            key={s.id}
                            className="flex justify-between text-sm md:text-base lg:text-base"
                        >
                            <span>{s.title}</span>
                            <span>{s.price.toLocaleString()} ₽</span>
                        </li>
                    ))}
                </ul>
            )}

            <div className="border-t border-primary pt-2 md:pt-3 lg:pt-4 flex justify-between font-medium text-sm md:text-base lg:text-base">
                <span>Сумма</span>
                <span>{total.toLocaleString()} ₽</span>
            </div>

            <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                <Button
                    disabled={selected.length === 0}
                    onClick={() => {
                        router.push('/success');
                        deleteAll();
                    }}
                    variant="secondary"
                    className="w-full"
                >
                    Оформить заказ
                </Button>

                {!!selected.length && (
                    <button
                        className="w-full text-secondary text-sm md:text-base lg:text-base hover:underline cursor-pointer"
                        onClick={deleteAll}
                    >
                        Удалить всё
                    </button>
                )}
            </div>
        </aside>
    );
}
