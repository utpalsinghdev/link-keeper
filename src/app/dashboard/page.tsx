import React from 'react'
import { apiCall } from '../action'
import DataTableLink from '@/components/atoms/links/DataTable'


async function Link() {

    const res = await apiCall({
        url: 'api/links',
        method: 'GET',
        body: null
    })



    return <DataTableLink data={res.data} />
}

export default Link