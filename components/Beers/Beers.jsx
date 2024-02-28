
import Image from 'next/image'
import Link from "next/link"

import { Button } from "../ui/button"

import buy from '../../assets/img/goods/buygoods.svg'
const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

export const Beers = ({img, name, currency, price, brewery, typeBeer, abv, volume, slug}) => {
    return (
    <>
        <Link href={`/goods/${brewery?.slug}/${slug}`} className='flex gap-4 flex-col max-w-full items-center cursor-pointer'>
            <div className='flex justify-center items-center w-full min-h-96'>
                <Image
                    className='max-h-[320px] object-contain hover:scale-95 ease-in-out duration-300'
                    width={img.width}
                    height={img.height}
                    src={img.src}
                    alt='beerImg'
                />
            </div>
            <div className='flex flex-col justify-between w-full'>
                <div className='flex justify-between gap-1'>
                    <div className='w-full'>
                        {/* {<div className='text-sm font-medium italic'>{brewery.brewery_name}</div>} */}
                        <div className='text-base font-medium italic uppercase'>{name}</div>
                        <div className='font-semibold text-[28px] not-italic flex gap-3'>{price}<span className='text-[14px] -rotate-90'>{currency}</span></div>
                    </div>
                    <Button>
                        <Image
                            src={buy}
                            alt='buyImg'
                        />
                    </Button>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    <div className='px-[10px] border-solid border-2 border-black rounded'>{typeBeer}</div>
                    <div className='px-[10px] border-solid border-2 border-black rounded'>{abv}</div>
                    <div className='px-[10px] border-solid border-2 border-black rounded'>{volume}</div>
                </div>
            </div>
        </Link>
    </>
    )
}
