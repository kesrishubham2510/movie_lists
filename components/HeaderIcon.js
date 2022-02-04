import React from 'react';

function HeaderIcon({Icon, text}) {
  return <div className='flex flex-col items-center cursor-pointer
   group w-16 sm:w-20  hover:text-white '>
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest '>{text}</p>
    </div>;
}

export default HeaderIcon;
