'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getData } from '../../queries/getData'
import { HomePageProductQuery, HomepageCategoriesQuery, HomepageFilteredProductsQuery } from '../../queries/HomePageProductQuery'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { Loaders } from '../Loader/Loader'
import { Filter } from '../Filter/Filter'
import { Beers } from './Beers'

import filter from '../../assets/img/goods/filter.svg'
import img from '../../assets/img/goods/mova.webp'
// async function handleProductFiltering({queryKey}) {
//     const [_] = queryKey
//     if(_.length) {
//         return await getData(HomepageFilteredProductsQuery, 'beers', {brewerys: queryKey[0]})
//     }

//     return await getData(HomePageProductQuery, 'beers')
// }

const beers = [
    {
        beerAbv: "8",
        beerCurrency: "грн",
        beerImg: {id: '88e30860-6085-43df-a068-caa09b5e999a'},
        beerPrice: "124",
        beerTegs: ['Гіркий', 'Ігристе', 'Солодке'],
        beerVolume: "0,44",
        brewery: {brewery_nama:"Moersleutel"},
        description: "Розкрийте силу Citra. Цей подвійний IPA демонструє неймовірну універсальність хмелю Citra завдяки використанню п’яти різних продуктів хмелю. Швидка математика підкаже нам, що це пиво насправді має називатися Citra x35, але пивоварам це було заборонено.",
        hops: "DIPA with Citra",
        id: "4",
        nameBeer: "CITRA X7",
        origin: "Нідерланди",
        slug: "citra",
        type_of_beer: "IPA"
    }
]

export const BeerList = () => {
    const [selectedBrewerys, setSelectedBrewerys] = useState([])
    const brewerysSuccess = true
    // const {data: beers, isLoading, isSuccess: brewerysSuccess} = useQuery([selectedBrewerys], handleProductFiltering)
    // const {data: brewerys, isSuccess: brewerysSuccess } = useQuery(['categories'], async () => await getData(HomepageCategoriesQuery, 'brewery'))
    // const getSelectetBrewery = (brewery) => {
    //     if(selectedBrewerys.includes(brewery)){
    //             setSelectedBrewerys(selectedBrewerys.filter(item => item !== brewery))
    //         return
    //     }
    //     setSelectedBrewerys([...selectedBrewerys, brewery])
    // }

    // useEffect(() => {
    // }, [selectedBrewerys])
    return (
        <>
            {/* <div className='flex gap-3 py-8 items-center'>
                <Image 
                    src={filter}
                    width={20}
                    height={20}
                    alt='filter'
                />
                <Sheet key={'left'}>
                    <SheetTrigger className='flex bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 p-2 rounded-full'>
                        Пивоварні
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle>Пивоварні</SheetTitle>
                            <SheetDescription className='flex flex-col gap-1 pt-4'>
                                {brewerysSuccess && brewerys.map(brewerys => <Filter key={brewerys.id} value={selectedBrewerys} brewerys={brewerys} getSelectetBrewery={getSelectetBrewery} />)}
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div> */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 min-h-full'>
                {brewerysSuccess && beers?.map(product => (
                    <Beers
                        key={product.id}
                        img={img}
                        name={product.nameBeer}
                        price={product.beerPrice}
                        currency={product.beerCurrency}
                        brewery={product.brewery.brewery_id}
                        typeBeer={product.type_of_beer}
                        abv={product.beerAbv}
                        volume={product.beerVolume}
                        slug={product.slug}
                    />
                ))}
            </div>
{/* 
            {isLoading ?
                <div className='w-full flex justify-center items-center h-[616px]'>
                    <Loaders />
                </div>
            :

            } */}
        </>
    )
}
