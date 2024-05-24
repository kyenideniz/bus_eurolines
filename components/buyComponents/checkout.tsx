import SummaryCard from "@/components/buyComponents/summary";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CheckOut = (
    {
    from, to, dateDepart, dateReturn, selectedSeats, travellers
    }:{
    from: string, 
    to: string,
    dateDepart:Date | string | number, dateReturn:Date | string | number, 
    travellers: Array<number>,
    selectedSeats: string[][];
    }
) => {
    
    return(
        <div className="grid grid-cols-9 h-full w-full py-4">
            <div className="col-span-4 ">
                <div className="items-start justify-start flex text-2xl py-4 text-blue-950 font-extrabold">Check-Out Summary</div>
                <div className="grid grid-rows-3 h-full w-full">
                    <div className="h-full w-full py-4">
                        <SummaryCard destination={from} date={dateDepart} travellers={travellers} selectedSeats={selectedSeats} seatIndex={0} />
                    </div>
                    <div className="h-full w-full py-4">
                        <SummaryCard destination={to} date={dateReturn} travellers={travellers} selectedSeats={selectedSeats} seatIndex={1} />
                    </div>
                    <div className="grid grid-rows-5 h-full w-full py-4 text-blue-950 p-4 text-xl"> 
                        <div className="grid grid-cols-2 w-full font-extralight">
                            <div>8 Passangers</div>
                            
                            <div>:&nbsp; 44 EUR ( 8 x 5,5 )</div>
                        </div>
                        <div className="grid grid-cols-2 w-full">
                            <div>Student Discount</div>
                            <div>: -11 EUR ( -2 x 5,5 )</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 w-full text-xl font-bold">
                            <div>Sub Total</div>
                            <div>: 22,75 EUR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 justify-center items-center flex">
                <Separator orientation="vertical" className="items-center justify-center flex" />
            </div>
            <div className="col-span-4">Payment Info</div>
        </div>
    )
}

export default CheckOut;