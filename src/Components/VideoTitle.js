import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-4  md: px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-5xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-4 text-lg w-1/2'>{overview}</p>
    <div className='my-4 md:m-0'>
      <button className='bg-white text-black py-0 md:py-4 md: py-4 px-2 md:px-10 rounded-lg text-xl hover:bg-opacity-50'> ▶  Play</button>
      <button className='hidden md:inline-block mx-2 bg-gray-500 text-white  p-4 px-10 rounded-lg text-xl bg-opacity-50'>More Info</button>
    </div>

    </div>
  )
}

export default VideoTitle;


