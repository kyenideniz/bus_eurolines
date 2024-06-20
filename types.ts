export interface Route {
    id: string;
    day: Date;
    startCityId: string;
    endCityId: string;
    price: number;
    totalSeats: number;
    emptySeats: number;
    occupiedSeats: number;
    createdAt: Date;
    stops: Stop[];
}


export interface City {
    docId: string;
    id: string;
    name: string;
    value: string;
    url: string;
    isOffered: boolean;
    createdAt: string;
    price?: number;
}

export interface Stop {
    id: string;
    cityId: string;
}
  