import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";

export default function DatePick({ value, onDateChange, placeholderText }:{value: DateRange | undefined; onDateChange: (range: DateRange | undefined) => void; placeholderText: string;}) {
    const initialRange: DateRange = {
        from: new Date(),
        to: addDays(new Date(), 4)
    };

    const [range, setRange] = useState<DateRange | undefined>(initialRange);

    const handleDateChange = (selectedRange: DateRange | undefined) => {
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
                    onSelect={handleDateChange as (range: DateRange | undefined) => void}
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
