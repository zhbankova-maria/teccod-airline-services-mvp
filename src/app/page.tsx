'use client';

import ServiceList from '@/components/ServiceList';
import SummaryCard from '@/components/SummaryCard';
import { useSelectedServices } from '@/hooks/useSelectedServices';
import { SERVICES } from '@/mock-data/services';
import Loading from './loading';

export default function Page() {
    const { selected, add, remove, clear, isSelected, isLoading } =
        useSelectedServices(SERVICES);

    return isLoading ? (
        <Loading />
    ) : (
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[2fr_1fr]">
            <div>
                <h1 className="text-xl font-semibold mb-4">
                    Дополнительные услуги
                </h1>

                <ServiceList
                    services={SERVICES}
                    onAdd={add}
                    onDelete={remove}
                    isSelected={isSelected}
                />
            </div>
            <SummaryCard selected={selected} deleteAll={clear} />
        </div>
    );
}
