import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import IconButton from "@/components/ui/icon-button";

interface PickSeatsProps {
    from: string | undefined;
    to: string | undefined;
    dateDepart: Date | string | number;
    dateReturn: Date | string | number;
    travellerNum: number;
    onSeatSelect: (seatId: string) => void;
    onSeatDeselect: (seatId: string) => void;
    defaultSelectedSeats: string[];
    index: number;
}

const PickSeats: React.FC<PickSeatsProps> = ({
    from, to, 
    dateDepart, dateReturn, 
    travellerNum, 
    onSeatSelect, onSeatDeselect, 
    defaultSelectedSeats = [],
    index
}) => {

    const initialMatrix = [
        [{id: "J1", status: 1},{id: "I1", status: 0},{id: "H1", status: 0},{id: "G1", status: 0},{id: "F1", status: 0},{id: "E1", status: 0},{id: "D1", status: 0},{id: "C1", status: 0},{id: "B1", status: 0},{id: "A1", status: 0}],
        [{id: "J2", status: 1},{id: "I2", status: 0},{id: "H2", status: 0},{id: "G2", status: 0},{id: "F2", status: 0},{id: "E2", status: 0},{id: "D2", status: 0},{id: "C2", status: 0},{id: "B2", status: 0},{id: "A2", status: 0}],
        [{id: "J3", status: 0}],
        [{id: "J4", status: 0},{id: "I3", status: 0},{id: "H3", status: 0},{id: "G3", status: 0},{id: "F3", status: 0},{id: "E3", status: 0},{id: "D3", status: 0},{id: "C3", status: 0},{id: "B3", status: 0},{id: "A3", status: 0}],
        [{id: "J5", status: 0},{id: "I4", status: 0},{id: "H4", status: 0},{id: "G4", status: 0},{id: "F4", status: 0},{id: "E4", status: 0},{id: "D4", status: 0},{id: "C4", status: 0},{id: "B4", status: 0},{id: "A4", status: 0}],
    ];

    const [tempSelectedSeats, setTempSelectedSeats] = useState<string[]>(defaultSelectedSeats);
    const [matrix, setMatrix] = useState(initialMatrix);

    useEffect(() => {
        setTempSelectedSeats(defaultSelectedSeats);
    }, [defaultSelectedSeats]);

    const handleClick = (rowIndex: number, colIndex: number) => {
        const seatId = matrix[rowIndex][colIndex].id;
        if (tempSelectedSeats.length < travellerNum && !tempSelectedSeats.includes(seatId)) {
            setTempSelectedSeats([...tempSelectedSeats, seatId]);
            onSeatSelect(seatId); // Call the function to handle seat selection
        } else if (tempSelectedSeats.includes(seatId)) {
            setTempSelectedSeats(tempSelectedSeats.filter((seat) => seat !== seatId));
            onSeatDeselect(seatId); // Call the function to handle seat deselection
        }
    };

    return (
        <div className="w-full py-6 h-full relative bg-zinc-50 rounded-lg shadow-md">
            <div className="w-full px-4 h-fit p-4">
                <div className="text-xl text-blue-950 font-semibold px-8 py-4 relative h-fit grid grid-cols-2 w-full">
                    <div className="flex items-start justify-start">
                        <span className="px-4 inline-block">{from}</span>
                        <ArrowRight className="inline-block text-amber-400" />
                        <span className="px-4 inline-block">{to}</span>
                    </div>
                    <div className="items-end justify-end grid grid-rows-4 px-4 text-sm font-[100] w-full">
                    <div className="grid grid-cols-4 items-center justify-center w-full">
                            <div className="flex items-end justify-end col-span-3">Taken</div>
                            <div className="w-full flex items-end justify-end">
                                <div className="border border-gray-200 h-3 w-3 bg-blue-500 pl-2"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center justify-center w-full">
                            <div className="flex items-end justify-end col-span-3">Empty</div>
                            <div className="w-full flex items-end justify-end">
                                <div className="border border-gray-200 h-3 w-3 bg-black pl-2"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center justify-center w-full">
                            <div className="flex items-end justify-end col-span-3">Selected</div>
                            <div className="w-full flex items-end justify-end">
                                <div className="border border-gray-200 h-3 w-3 bg-amber-400 pl-2"></div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="w-full h-full px-12 text-base text-blue-950">
                    <div className="grid-cols-4 grid">
                        <div className="col-start-1 pb-4">Depart Date: {format(dateDepart, "PPP")}</div>
                        <div className="col-start-2 pb-4">Depart Time: 10.30 A.M </div>
                    </div>
                    <div className="p-4 bg-slate-200 rounded-lg h-full w-full items-center justify-center flex">
                        <div className="h-full w-full text-blue-950 items-center justify-center flex">
                            <div className="h-full w-full">
                                {matrix.map((row, rowIndex) => (
                                    <div key={`row-${index}-${rowIndex}`} className="grid grid-cols-10 w-full h-full">
                                        {row.map((cell, colIndex) => (
                                            <button
                                                key={`button-${index}-${rowIndex}-${colIndex}`} // Unique key for the button
                                                style={{
                                                    color: cell.status === 0
                                                        ? tempSelectedSeats.includes(cell.id)
                                                            ? 'orange' // Temporarily selected color
                                                            : 'black'
                                                        : 'blue' // Permanently selected color
                                                }}
                                                onClick={() => handleClick(rowIndex, colIndex)}
                                                disabled={cell.status === 1}
                                            >
                                                <span
                                                    style={{
                                                        color: cell.status === 0
                                                            ? tempSelectedSeats.includes(cell.id)
                                                                ? 'orange'
                                                                : 'black'
                                                            : 'blue'
                                                    }}
                                                >
                                                    {cell.id}
                                                </span>
                                                <IconButton
                                                    key={`icon-${index}-${rowIndex}-${colIndex}`} // Unique key for the IconButton
                                                    className="inline-block h-full aspect-square"
                                                    icon={<MdOutlineAirlineSeatReclineExtra
                                                        style={{
                                                            color: cell.status === 0
                                                                ? tempSelectedSeats.includes(cell.id)
                                                                    ? 'orange'
                                                                    : 'black'
                                                                : 'blue'
                                                        }}
                                                        className="inline-block text-amber-400 h-8" />}
                                                    onClick={() => handleClick(rowIndex, colIndex)}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default PickSeats;
