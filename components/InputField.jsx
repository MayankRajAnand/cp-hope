import React from 'react'
import { Input } from "../components/ui/input"
import { ComboBox } from './ComboBox'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
const InputField = ({ table, generateRandom }) => {
    const a=30;
    const b=40;
    return (
        <div className='flex-row justify-center mx-auto' >
            <div className="flex items-center justify-center py-4 gap-x-12 " >
                <div className="flex rounded-lg shadow-sm">
                    <Button className="h-9 rounded-md px-3 md:h-11 md:px-8" onClick={generateRandom}>Pick Random</Button>
                    <input type="text" className=" py-2 px-3 pe-11 block w-full  shadow-sm rounded-e-lg text-sm focus:z-10  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Filter Questions"
                        value={(table.getColumn("question")?.getFilterValue()) ?? ""}
                        onChange={(event) =>
                            table.getColumn("question")?.setFilterValue(event.target.value)
                        }
                    />
                </div>
                <ComboBox table={table} />
            </div>
            <div className=' mx-auto my-5 flex items-center justify-evenly' >
               <Button className="bg-blue-500 hover:bg-blue-500 focus:cursor-auto" >{table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} questions done</Button>
            </div>

        </div>
    )
}

export default InputField