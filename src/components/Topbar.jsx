import React from 'react'

function Topbar() {
  return (
    <div className='w-full px-16 py-6 bg-white flex items-center justify-between'>
        <button className='uppercase text-white bg-gray-900 py-1 px-3 rounded-full'>Target Audience</button>
        <button className='uppercase text-black bg-gray-50 py-1 px-3 rounded-full hover:text-gray-50 hover:bg-gray-600'> digital banking platform</button>
    </div>
  )
}

export default Topbar