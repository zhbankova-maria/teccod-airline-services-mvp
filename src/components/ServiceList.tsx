import { Service } from '@/types/service';
import ServiceCard from './ServiceCard';

type ServiceListProps = {
    services: Service[];
    onAdd: (service: Service) => void;
    onDelete: (service: Service) => void;
    isSelected: (service: Service) => boolean;
};

export default function ServiceList({
    services,
    onAdd,
    onDelete,
    isSelected,
}: ServiceListProps) {
    return (
        <section className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onAdd={onAdd}
                    onDelete={onDelete}
                    isSelected={isSelected(service)}
                />
            ))}
        </section>
    );
}
