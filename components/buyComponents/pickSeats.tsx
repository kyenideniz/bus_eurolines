"use client"

import { format } from "date-fns"

import React, { useState } from "react"

import { ArrowRight } from "lucide-react"
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import IconButton from "@/components/ui/icon-button"

const PickSeats = ({
    from, to, dateDepart, dateReturn, travellerNum, onSeatSelect
    }:{
    from:String, to:String, 
    dateDepart:Date | string | number, dateReturn:Date | string | number, 
    travellerNum:number
    onSeatSelect: (seatId: string) => void // Function to handle seat selection
}) => {

    const initialMatrix = [
        [{id: "J1", status: 1},{id: "I1", status: 0},{id: "H1", status: 0},{id: "G1", status: 0},{id: "F1", status: 0},{id: "E1", status: 0},{id: "D1", status: 0},{id: "C1", status: 0},{id: "B1", status: 0},{id: "A1", status: 0}],
        [{id: "J2", status: 1},{id: "I2", status: 0},{id: "H2", status: 0},{id: "G2", status: 0},{id: "F2", status: 0},{id: "E2", status: 0},{id: "D2", status: 0},{id: "C2", status: 0},{id: "B2", status: 0},{id: "A2", status: 0}],
        [{id: "J3", status: 0}],
        [{id: "J4", status: 0},{id: "I3", status: 0},{id: "H3", status: 0},{id: "G3", status: 0},{id: "F3", status: 0},{id: "E3", status: 0},{id: "D3", status: 0},{id: "C3", status: 0},{id: "B3", status: 0},{id: "A3", status: 0}],
        [{id: "J5", status: 0},{id: "I4", status: 0},{id: "H4", status: 0},{id: "G4", status: 0},{id: "F4", status: 0},{id: "E4", status: 0},{id: "D4", status: 0},{id: "C4", status: 0},{id: "B4", status: 0},{id: "A4", status: 0}],
    ];

    const [tempSelectedSeats, setTempSelectedSeats] = useState<string[]>([]);

    const handleClick = (rowIndex: number, colIndex: number) => {
        const seatId = matrix[rowIndex][colIndex].id;
        if (tempSelectedSeats.length < travellerNum && !tempSelectedSeats.includes(seatId)) {
            setTempSelectedSeats([...tempSelectedSeats, seatId]);
            onSeatSelect(seatId); // Call the function to handle seat selection
        } else if (tempSelectedSeats.includes(seatId)) {
            setTempSelectedSeats(tempSelectedSeats.filter((seat) => seat !== seatId));
        }
    };
    
    
    const [matrix, setMatrix] = useState(initialMatrix);
    
    return (
    <div className="w-full py-6 h-full relative bg-zinc-50 rounded-lg shadow-md ">
        <div className="w-full px-4 h-fit p-4">
            <div className="text-xl text-blue-950 font-semibold px-8 py-4 relative h-fit">
                <span className="px-4 inline-block">{from}</span>
                <ArrowRight className="inline-block text-amber-400" />
                <span className="px-4 inline-block">{to}</span>
            </div>
        <div className="w-full h-full p-4 px-12 text-base text-blue-950">
            <div className="grid-cols-4 grid py-4">
                <div className="col-start-1">Depart Date: {format(dateDepart, "PPP")}</div>
                <div className="col-start-2">Depart Time: {format(dateReturn, "PPP")}</div>
            </div>
            <div className="p-4  bg-slate-200 rounded-lg h-full w-full items-center justify-center flex">
                <div className="h-full w-full text-blue-950 items-center justify-center flex">
                    <div className="h-full w-full ">
                        {matrix.map((row, rowIndex) => (
                            <div key={rowIndex} className="grid grid-cols-10 w-full h-full">
                                {row.map((cell, colIndex) => (
                                <button key={cell.id}
                                    style={{ 
                                        color: cell.status === 0 
                                            ? tempSelectedSeats.includes(cell.id) 
                                                ? 'orange' // Temporarily selected color
                                                : 'black' 
                                            : 'blue' // Permanently selected color 
                                    }}
                                    onClick={() => handleClick(rowIndex, colIndex)}
                                    disabled={cell.status === 1}>
                                    <span
                                        key={cell.id}
                                        style={{ 
                                            color: cell.status === 0 
                                                ? tempSelectedSeats.includes(cell.id) 
                                                    ? 'orange' 
                                                    : 'black' 
                                                : 'blue' 
                                        }}
                                    >
                                        {cell.id}
                                        <IconButton
                                            key={cell.id}
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
                                    </span>
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
  )
}

export default PickSeats;
