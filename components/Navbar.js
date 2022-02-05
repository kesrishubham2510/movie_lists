//  continue from : 1:07:34
import React from 'react';
import {useRouter} from 'next/router';
import genres from '../utils/requests';

function Navbar() {

	const router = useRouter();

	// function navigationHandler(genreKey){
      
	
	//   //  using a url-queryParam to navigate, it would be easier to extract it 
  //   //  passing the key so that the url to ping the data can be easily extracted form the objects
  //   console.log(genreKey);
	// 	router.push(`/?genre=${genreKey}`);
		
	// }


  return (
    <nav>
      {/* To prevent text from wrapping whitespace-nowrap */}
      {/* overflow-x-scroll :-  To make the overflow scrollable */}
      {/* scrollbar-hide:- to hide the scrollbar, a plugin scrollbar-hide was installed */}
      <div
        className="flex 
	  justify-evenly 
	  space-x-10 
	  overflow-x-scroll 
	  whitespace-nowrap 
	  px-10
	  scrollbar-hide
	  sm:space-x-10
	  sm:px-20
	  "
      >
        {/* destructing the genre object */}
        {Object.entries(genres).map(([key, { title, url }]) => (
          <h2
            // last:pr-4 gives the last element a padding

            className="transform cursor-pointer transition duration-75 last:pr-20 hover:scale-125
			hover:text-cyan-200 active:text-pink-500"
            key={key}
			onClick={()=>router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
	  
    </nav>
  )
}

export default Navbar
