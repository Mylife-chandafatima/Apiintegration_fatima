import React from 'react'
import GiftCardComponent from '../components/GiftCardComponent'
const Gift = () => {
  return (
    <div className=' flex  flex-col  gap-3 justify-center items-center p-10 border-4 m-10 border-red-600 bg-yellow-200 '>
        <h2 className='text-5xl font-bold text-neutral-950'>Gift Card</h2>
        <GiftCardComponent/>
    </div>
  )
}

export default Gift