"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useFilters } from "@/contexts/filterContext";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();
  const { filters, setFilters } = useFilters();

  const handleSelect = (value: Date | undefined) => {
    setFilters({ ...filters, startDate: value ? format(value, "yyyy-MM-dd") : "" });
    setDate(value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={(s) => handleSelect(s)} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
