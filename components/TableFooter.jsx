import React from 'react'
import { Button } from '../components/ui/button'
const TableFooter = ({table}) => {
    return (
        <div className="flex items-center justify-end space-x-2 py-4">
           

            <div className="space-x-2">
                <Button
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>


        </div>
    )
}

export default TableFooter