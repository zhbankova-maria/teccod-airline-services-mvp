import { useLayoutEffect, useState } from 'react';
import { Service } from '@/types/service';

const LS_KEY = 'selectedServices';

export const useSelectedServices = (allServices: Service[]) => {
    const [selected, setSelected] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        const stored = localStorage.getItem(LS_KEY);
        if (stored) {
            try {
                const ids: string[] = JSON.parse(stored);
                const products = allServices.filter((s) => ids.includes(s.id));
                setSelected(products);
            } catch {
                setSelected([]);
            }
        }
        setIsLoading(false);
    }, [allServices]);

    useLayoutEffect(() => {
        const ids = selected.map((s) => s.id);
        localStorage.setItem(LS_KEY, JSON.stringify(ids));
    }, [selected]);

    const add = (service: Service) => {
        setSelected((prev) =>
            prev.find((s) => s.id === service.id) ? prev : [...prev, service]
        );
    };

    const remove = (service: Service) => {
        setSelected((prev) => prev.filter((s) => s.id !== service.id));
    };

    const clear = () => setSelected([]);

    const isSelected = (service: Service) =>
        selected.some((s) => s.id === service.id);

    return { selected, add, remove, clear, isSelected, isLoading };
};
