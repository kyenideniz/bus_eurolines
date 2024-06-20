import { format } from "date-fns";
import React from "react";

interface SummaryCardProps {
    destination: string | undefined;
    date: Date | string | number;
    travellers: Array<number>;
    selectedSeats: string[][];
    seatIndex: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
    destination, date, travellers, selectedSeats, seatIndex
}) => {
    const mapSelectedSeats = (arrayIndex: number, callback?: (seatId: string) => any) => {
        if (arrayIndex < 0 || arrayIndex >= selectedSeats.length) {
            console.error('Invalid array index');
            return [];
        }
        return selectedSeats[arrayIndex].map(callback || ((seatId) => seatId));
    };

    return (
        <div className="h-full w-full bg-gray-100 p-4 rounded-lg grid grid-rows-5 text-base font-thin text-blue-950">
            <div className="h-full w-full grid grid-cols-2">
                <div className="h-full w-full items-start justify-start flex">
                    From
                </div>
                <div className="h-full w-full items-start justify-start flex">
                    : {destination}
                </div>
            </div>
            <div className="h-full w-full">
                <div className="h-full w-full grid grid-cols-2">
                    <div className="h-full w-full items-start justify-start flex">
                        Departure Date
                    </div>
                    <div className="h-full w-full items-start justify-start flex">
                        : {format(date, "PPP")}
                    </div>
                </div>
            </div>
            <div className="h-full w-full">
                <div className="h-full w-full grid grid-cols-2">
                    <div className="h-full w-full items-start justify-start flex">
                        Departure Time
                    </div>
                    <div className="h-full w-full items-start justify-start flex">
                        : 10.30 A.M.
                    </div>
                </div>
            </div>
            <div className="h-full w-full">
                <div className="h-full w-full grid grid-cols-2">
                    <div className="h-full w-full items-start justify-start flex">
                        Passengers
                    </div>
                    <div className="h-full w-full items-start justify-start flex">
                    : {travellers
                        .map((count, index) => {
                            if (count === 0) return null; // Skip categories with zero count
                            const category = index === 0 ? 'Adult' : index === 1 ? 'Child' : 'Infant';
                            const plural = count > 1 ? (index === 1 ? 'Children' : `${category}s`) : category;
                            return `${count} ${plural}`;
                        })
                        .filter(Boolean) // Filter out null values
                        .join(", ")
                    }
                    </div>
                </div>
            </div>
            <div className="h-full w-full">
                <div className="h-full w-full grid grid-cols-2">
                    <div className="h-full w-full items-start justify-start flex">
                        Seats
                    </div>
                    <div className="h-full w-full items-start justify-start flex">
                        : {mapSelectedSeats(seatIndex).join(", ")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummaryCard;
