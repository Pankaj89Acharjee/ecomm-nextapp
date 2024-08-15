import React from 'react'
import Image from 'next/image'
import logoImg from '../../../public/LogoEcomm.png'
import { LayoutGridIcon, Search, ShoppingBagIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
    return (
        <div className='flex justify-between p-4 shadow-md'>

            <div className='flex gap-8 items-center'>
                <Image src={logoImg}
                    alt='logo'
                    width={100}
                    height={80}
                />

                <h2 className='md:flex hidden gap-2 items-center border rounded-2xl p-2 px-10 bg-gray-200'>
                    <LayoutGridIcon className='h-5 w-5' />
                    Category
                </h2>

                {/* Search bar */}
                <div className='md:flex items-center border rounded-2xl gap-3 p-2 px-5 hidden'>
                    <Search />
                    <input
                        type='text'
                        placeholder='Seach items'
                        className='outline-none'
                    />
                </div>
            </div>

            <div className="flex gap-5 items-center">
                <h2 className='flex items-center gap-2 md:text-lg text-xs'>
                    <ShoppingBagIcon/>
                    0
                </h2>
                <Button className="text-xs md:text-lg">Login</Button>
            </div>
        </div>

    )
}

export default Header