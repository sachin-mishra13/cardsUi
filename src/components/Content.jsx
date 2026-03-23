import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

function Content(props) {
    
  return (
    <div className='sm:h-full lg:h-[80vh] w-full  px-16 py-6 sm:grid sm:grid-cols-1 lg:flex text-white lg:gap-10'>
        <div className=' sm:w-[100%] lg:w-1/5 lg:h-full'><Leftside/></div>
        <div className='sm:w-[100%] lg:w-4/5 lg:h-full'><Rightside user={props.user}/></div>



    </div>
  )
}

export default Content