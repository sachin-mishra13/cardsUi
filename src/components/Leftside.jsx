import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function Leftside() {
  return (
    <div className='h-full w-full flex flex-col justify-between '>
<div className=' h-full w-full py-6 '>
    <h3 className='text-3xl text-gray-900 mb-8 font-bold'>Prospective <br />Customer <br /> segmentation</h3>
    <p className='text-base text-gray-700 '> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisicing elit. Nulla quam quaerat sequi non quos odit.</p>
</div>
        <ArrowUpRight size={42} className='text-black'/>
    </div>
  )
}

export default Leftside