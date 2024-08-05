'use client'

import React, {useEffect, useState } from 'react'

type AllocationType={
    CID:number,
    A_NAME:string,
    A_AMOUNT:number
}

function AllocationTable() {
    const [data,setData]=useState<Array<AllocationType>>([])
    const fetchData=async()=>{
      const dat=await fetch('/details/api/ALLOCATION')
      const js=await dat.json()
      setData(js)
    }
    useEffect(()=>{
      fetchData()
    },[])
    
  return (
    <div className='mx-4 my-4'>
        <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-center'>
            <thead className='bg-gray-900'>
                <tr>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">ALLOCATION NAME</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AMOUNT</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">CID</th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                {
                    data.map((a,index)=>(
                        <tr key={index} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{a.A_AMOUNT}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{a.A_NAME}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{a.CID}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AllocationTable