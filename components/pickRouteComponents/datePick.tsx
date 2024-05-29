import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
<<<<<<< HEAD
import { Calendar } from "../ui/calendar";

export default function DatePick({ value, onDateChange, placeholderText }:{value: DateRange | undefined; onDateChange: (range: DateRange | undefined) => void; placeholderText: string;}) {
=======
import { Calendar } from "@/components/ui/calendar";

export default function DatePick({ value, onDateChange, placeholderText }:{value: DateRange | any; onDateChange: (range: DateRange | any) => void; placeholderText: string;}) {
>>>>>>> refs/remotes/origin/main
    const initialRange: DateRange = {
        from: new Date(),
        to: addDays(new Date(), 4)
    };

<<<<<<< HEAD
    const [range, setRange] = useState<DateRange | any>(initialRange);

    const handleDateChange = (selectedRange: DateRange | undefined) => {
=======
    const [range, setRange] = useState<DateRange | any>(initialRange);

    const handleDateChange = (selectedRange: DateRange | any) => {
>>>>>>> refs/remotes/origin/main
        setRange(selectedRange);
        onDateChange(selectedRange);
        console.log(selectedRange);
    };

    return (
        <Popover>
            <PopoverTrigger className="text-left text-lg text-blue-950" asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                    "w-full justify-start hover:bg-transparent",
                    !range && "text-left text-lg text-blue-950"
                    )}
                >
                    <CalendarIcon className="mr-1 h-5 w-5" />
                    {range ? `${format(range.from, "PPP")} - ${range.to ? format(range.to, "PPP") : "..."}` : <span>{placeholderText}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" side="bottom" align="start">
                <Calendar
                    mode="range"
                    selected={range}
<<<<<<< HEAD
                    onSelect={handleDateChange as (range: DateRange | any) => void}
=======
                    onSelect={handleDateChange as (range: DateRange |any) => void}
>>>>>>> refs/remotes/origin/main
                    range={range}
                    setRange={setRange}
                    showOutsideDays={false}
                    disabled={{ before: new Date() }}
                    numberOfMonths={2}
                    fixedWeeks
                />
            </PopoverContent>
        </Popover>
    );
}
