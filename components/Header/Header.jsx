import Link from "next/link"
import Image from "next/image"

import { MiniCard } from "../MiniCard/MiniCard.jsx"
import { MenuSquare  } from 'lucide-react';
import logo from '../../assets/img/header/logo.svg'
import user from '../../assets/img/header/user.svg'

export const Header = () => {
  return (
    <div className="bg-white w-full top-0 sticky z-[5]">
      <header className="pt-[30px] pb-[15px] container outline-none">
        <nav className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Link href='/'>
              <Image 
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex">
            {/* <Link href='/login'>
              <Image 
                src={user}
                alt='User'
              />
            </Link> */}
            <MiniCard />
          </div>
        </nav>
      </header>
    </div>
  )
}
