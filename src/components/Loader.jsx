import { Html } from '@react-three/drei'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className='absolute top-0 left-0 w-full h-full flex-justified-center items-center'>
        <div className='w-[10vw] h-[10vw]' >
          Loading...
        </div>
      </div>
    </Html>
  )
}

export default Loader