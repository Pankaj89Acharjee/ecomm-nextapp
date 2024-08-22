'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoImg from '../../../public/LogoEcomm.png'
import { LayoutGridIcon, Search, ShoppingBagIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getProductCategories } from '../_utils/productAPICall'

const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const getValues = await getProductCategories()
        setCategories(getValues)
        //console.log("All Categories values are", getValues)
    }

    return (
        <div className='flex justify-between p-4 shadow-md'>
            <div className='flex gap-8 items-center'>
                <Image src={logoImg}
                    alt='logo'
                    width={100}
                    height={80}
                />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <h2 className='md:flex hidden gap-2 items-center border rounded-2xl p-2 px-10 bg-gray-200 cursor-pointer'>
                            <LayoutGridIcon className='h-5 w-5' />
                            Category
                        </h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Show Category</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {categories.map((data, index) => (
                            <DropdownMenuItem key={index}>{data}</DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Search bar */}
                <div className='md:flex items-center border rounded-2xl gap-3 p-2 px-5 hidden'>
                    <Search />
                    <input
                        type='text'
                        placeholder='Search items'
                        className='outline-none'
                    />
                </div>
            </div>

            <div className="flex gap-5 items-center">
                <h2 className='flex items-center gap-2 md:text-lg text-xs'>
                    <ShoppingBagIcon />
                    0
                </h2>
                <Button className="text-xs md:text-lg">Login</Button>
            </div>
        </div>
    )
}

export default Header
