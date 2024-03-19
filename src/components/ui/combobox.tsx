import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

type Option = Array<string>;

export function Combobox({
  type,
  options,
  onOpenAction,
  handleSelect,
  defaultValue = "",
}: {
  handleSelect: (value: string) => void;
  type: string;
  options: Option;
  onOpenAction?: () => void;
  defaultValue: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  if (!options) return <></>;

  return (
    <Popover
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        onOpenAction && onOpenAction();
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="lg:w-[170px] w-full justify-between capitalize"
        >
          {defaultValue
            ? defaultValue
            : value
            ? options.find((item) => item === value)
            : `Select ${type}`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lg:w-[170px] w-[250px]   p-0">
        <Command>
          <CommandInput placeholder={`Search ${type}...`} className="h-9" />
          <CommandEmpty>No {type} found.</CommandEmpty>
          <CommandGroup>
            {options.map((item) => (
              <CommandItem
                className="capitalize"
                key={item}
                value={item}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  handleSelect(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {item}
                <CheckIcon
                  className={cn("ml-auto h-4 w-4", value === item ? "opacity-100" : "opacity-0")}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
