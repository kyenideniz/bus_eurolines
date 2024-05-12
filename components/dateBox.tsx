"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateSelectProps {
  placeholder: String;
}

const DateSelect:React.FC<DateSelectProps> = (props) => {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger className="text-left text-lg text-blue-950" asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start hover:bg-transparent",
            !date && "text-left text-lg text-blue-950"
          )}
        >
          <CalendarIcon className="mr-1 h-5 w-5" />
          {date ? format(date, "PPP") : <span>{props.placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" side="bottom" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DateSelect;