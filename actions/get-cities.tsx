import { City } from "@/types";
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cities`;

interface Query {
    id?: string;
    name?: string;
    value?: string;
    isOffered: boolean;
    url?: string;
    createdAt?: string;
    price?: number;
}

const getCities = async (query: Query): Promise<City[]> => {
    
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            id: query.id,
            name: query.name,
            value: query.value,
            isOffered: query.isOffered,
            url: query.url,
            date: query.createdAt,
            price: query.price,
        }
    });

    console.log('Fetching URL:', url);
    const res = await fetch(url);

    if (!res.ok) {
        const errorText = await res.text();
        console.log('Fetch error:', errorText);
        throw new Error(errorText);
    }

    const data = await res.json();

    const offeredCities = data.filter((city: City) => city.isOffered);

    console.log('Fetch successful:', data);
    return offeredCities;
}

export default getCities;

export const revalidate = 0;
