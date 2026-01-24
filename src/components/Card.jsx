import { ArrowRight } from 'lucide-react'
import React from 'react'

function Card(props) {
  return (
    <div className=' h-full w-72  rounded-3xl relative overflow-hidden shrink-0'>
        <img src={props.img} className='absolute h-full w-full object-cover opacity-90' alt=''/>
<div className=' h-full absolute top-5 left-5 flex flex-col justify-between w-[80%] ' > 
<div className='h-12 w-12 bg-white rounded-full text-black px-4 py-2 flex items-center justify-center'>{props.id+1}</div>

<div className='pb-12 '>
    <p className='pb-4 text-black [text-shadow:2px_2px_5px_white] font-semibold '>{props.words}</p>

    <div className='flex items-center gap-5 mt-1'>
        <button className='py-1 px-6 rounded-full text-white' style={{backgroundColor:props.color}}>{props.button}</button>
        <ArrowRight style={{backgroundColor:props.color}} size={28} className='   h-8 w-8 p-2 rounded-full text-white'/>
    </div>
</div>
</div>

    </div>
  )
}

export default Card