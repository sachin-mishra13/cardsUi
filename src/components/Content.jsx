import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

function Content(props) {
    
  return (
    <div className='h-[80vh] w-full  px-16 py-6 flex text-white gap-10'>
        <div className=' w-1/5 h-full'><Leftside/></div>
        <div className='w-4/5 h-full'><Rightside user={props.user}/></div>



    </div>
  )
}

export default Content