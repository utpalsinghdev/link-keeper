"use client"
import { DataTable } from '@/components/ui/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
type ILinks = {
    id: string
    title: number
    body: string
}

export const columns: ColumnDef<ILinks>[] = [

    {
        accessorKey: "title",
        header: "title",
        // cell: ({ row }) => (
        //     <div className="capitalize">{row.getValue("title")}</div>
        // ),
    },
    {
        accessorKey: "body",
        header: "body",

    },




]

function DataTableLink({ data }: { data: ILinks[] | undefined }) {

    return <DataTable
        data={data || []}
        columns={columns}
    />
}

export default DataTableLink