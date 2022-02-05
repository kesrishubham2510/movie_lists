//  continue from : 
import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline';

function Thumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className='p-2 group cursor-pointer transition duration-200 sm:hover:scale-105 hover:z-50'>
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.backdrop_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        height={30}
        width={40}
      />
      {/* the below div displays the text */}
      <div className="p-2 group">
        <p className="max-w-md truncate">{result.overview}</p>
		<h2 
		className = 'mt-1 mb-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
		<p className='flex items-center  space-between opacity-0 group-hover:opacity-100'>
			{result.media_type && `${result.media_type}`}{' '}
			{result.release_date || result.first_air_date}{' '}dot{' '}
			<ThumbUpIcon className='h-4 mx-2'/> 
			{result.vote_count}
		</p>
      </div>
    </div>
  )
}

export default Thumbnail
