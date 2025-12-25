import { Service } from '@/types/service';
import Button from './ui/Button';

const serviceIconClasses: Record<string, string> = {
    baggage: 'icon-baggage',
    meal: 'icon-meal',
    seat: 'icon-seat',
    wifi: 'icon-wifi',
    priority: 'icon-priority',
    default: 'icon-photo',
};

type ServiceCardProps = {
    service: Service;
    onAdd: (service: Service) => void;
    onDelete: (service: Service) => void;
    isSelected: boolean;
};

export default function ServiceCard({
    service,
    onAdd,
    onDelete,
    isSelected,
}: ServiceCardProps) {
    const iconClass = serviceIconClasses[service.id] ?? 'icon-default';

    return (
        <article className="card bg-white flex items-center gap-4 p-3 md:gap-6 md:p-4 lg:gap-8 lg:p-5">
            <div className="h-12 aspect-square rounded-full bg-air-300 flex items-center justify-center text-air-400 text-2xl md:h-14 md:text-3xl lg:h-16 lg:text-4xl">
                <i className={`${iconClass}`} />
            </div>

            <div className="w-full flex justify-between items-center gap-2 md:gap-3">
                <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-sm md:text-base">
                        {service.title}
                    </h3>
                    <p className="text-secondary text-xs md:text-sm">
                        {service.price.toLocaleString()} ₽
                    </p>
                </div>

                <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                    {isSelected && (
                        <button
                            onClick={() => onDelete(service)}
                            className="cursor-pointer hover:animate-shake text-air-200"
                        >
                            <i className="icon-delete" />
                        </button>
                    )}
                    <Button
                        disabled={isSelected}
                        onClick={() => onAdd(service)}
                    >
                        {isSelected ? 'Добавлено' : 'Добавить'}
                    </Button>
                </div>
            </div>
        </article>
    );
}
