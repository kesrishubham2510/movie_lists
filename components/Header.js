import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'

//  importing the icons from the Heroicons
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline/esm'

// border-2 border-cyan-300
function Header() {
  const image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWeFnvKa3k0Rt2NxnJlMw9lQ9ul1V6AFjfA&usqp=CAU';
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon Icon={HomeIcon} text="Home" />
        <HeaderIcon Icon={LightningBoltIcon} text="Trending" />
        <HeaderIcon Icon={BadgeCheckIcon} text="Verified" />
        <HeaderIcon Icon={CollectionIcon} text="Collections" />
        <HeaderIcon Icon={SearchIcon} text="Search" />
        <HeaderIcon Icon={UserIcon} text="User" />
      </div>

      <Image
        className="object-contain"
        src={image_url}
        alt="my-logo"
        width={100}
        height={100}
      />
    </header>
  )
}

export default Header
