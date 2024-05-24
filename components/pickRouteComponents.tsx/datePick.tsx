import React from "react";

import { cn } from "@/lib/utils"
import { format } from "date-fns"

import { CalendarIcon } from "lucide-react";

import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function DatePick( { value, onDateChange, placeholderText }:{value: any; onDateChange: any; placeholderText: String;} ) {

    const handleDateChange = (date: Date | undefined) => {
        onDateChange(date);
        console.log(date)
    };

    return(
        <Popover>
            <PopoverTrigger className="text-left text-lg text-blue-950" asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                    "w-full justify-start hover:bg-transparent",
                    !value && "text-left text-lg text-blue-950"
                    )}
                   
                >
                    <CalendarIcon className="mr-1 h-5 w-5" />
                    {value ? format(value, "PPP") : <span>{placeholderText}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" side="bottom" align="start">
            <Calendar
                mode="single"
                selected={value}
                onSelect={handleDateChange}
                initialFocus
                showOutsideDays={false}
                disabled={{before: new Date()}}
            />
            </PopoverContent>
        </Popover>
    )
}