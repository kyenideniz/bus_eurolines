import React from "react";

import { cn } from "@/lib/utils"
import { format } from "date-fns"

import { CalendarIcon } from "lucide-react";

import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function DatePick() {
    const [dateFrom, setDateFrom] = React.useState<Date>()
    const [dateReturn, setDateReturn] = React.useState<Date>()

    return(
        <Popover>
            <PopoverTrigger className="text-left text-lg text-blue-950" asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                    "w-full justify-start hover:bg-transparent",
                    !dateFrom && "text-left text-lg text-blue-950"
                    )}
                >
                    <CalendarIcon className="mr-1 h-5 w-5" />
                    {dateFrom ? format(dateFrom, "PPP") : <span>Depart Date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" side="bottom" align="start">
            <Calendar
                mode="single"
                selected={dateFrom}
                onSelect={setDateFrom}
                initialFocus
            />
            </PopoverContent>
        </Popover>
    )
}