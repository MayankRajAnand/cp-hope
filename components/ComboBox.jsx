"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Command,CommandEmpty, CommandGroup,CommandInput,CommandItem,} from "../components/ui/command"
import { Popover, PopoverContent,PopoverTrigger,} from "../components/ui/popover"

const statuses = [
    {
        value: "easy",
        label: "Easy",
    },
    {
        value: "medium",
        label: "Medium",
    },
    {
        value: "hard",
        label: "Hard",
    }

]

export function ComboBox({ table }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[150px] justify-between border-2 border-black py-2 px-3"
                >
                    {value
                        ? statuses.find((status) => status.value === value)?.label
                        : "Filter  "}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandGroup>
                        {statuses.map((status) => (
                            <CommandItem
                                key={status.value}
                                value={status.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    {currentValue!==value ? table.getColumn("difficuilty")?.setFilterValue(currentValue) : table.getColumn("difficuilty")?.setFilterValue(undefined) }
                                    setOpen(false)
                                }}
                            >
                                {/*  value={(table.getColumn("question")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("question")?.setFilterValue(event.target.value) */}
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === status.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {status.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
