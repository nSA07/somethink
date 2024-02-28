'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

import { useCartStore } from '../../store/useCartStore';

const beer =
    {
        beerAbv: "8",
        beerCurrency: "грн",
        beerImg: {id: '88e30860-6085-43df-a068-caa09b5e999a'},
        beerPrice: "124",
        beerTegs: ['Гіркий', 'Ігристе', 'Солодке'],
        beerVolume: "0,44",
        brewery: {brewery_name:"Moersleutel", slug: "category"},
        description: "Розкрийте силу Citra. Цей подвійний IPA демонструє неймовірну універсальність хмелю Citra завдяки використанню п’яти різних продуктів хмелю. Швидка математика підкаже нам, що це пиво насправді має називатися Citra x35, але пивоварам це було заборонено.",
        hops: "DIPA with Citra",
        id: "4",
        nameBeer: "CITRA X7",
        origin: "Нідерланди",
        slug: "citra",
        type_of_beer: "IPA"
    }

    import img from '../../assets/img/goods/mova.webp'

export const BeerPage = ({}) => {
    const { toast } = useToast()
    const [quantity, setQuantity] = useState(1)

    const { addToCard } = useCartStore()

    const tempOrder = {
        product_id: +beer.id,
        product_name: beer.nameBeer,
        price: +beer.beerPrice,
        quantity: +quantity,
    }

    const increment = (item) => {
        const newQuantity = item + 1;
        setQuantity(newQuantity);
    }

    const decrement = (item) => {
        if (item > 1) {
          const newQuantity = item - 1;
          setQuantity(newQuantity);
        }
    }

    return (
        <div className='container px-4 sm:px-12 md:px-10 xl:px-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-x-5 gap-y-8 pb-12'>
                <div className='flex justify-center items-center w-full'>
                    <img
                        className='max-w-[370px] max-h-[350px] sm:max-w-[510px] sm:max-h-[494px] object-contain hover:scale-95 ease-in-out duration-300'
                        width={510}
                        height={494}
                        src={img.src}
                        alt='beerImg'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                        <p className='font-normal text-lg'>{beer?.brewery.brewery_name}</p>
                        <div className='font-semibold text-3xl'>{beer.nameBeer} {beer.beerAbv}</div>
                        <p className='text-lg min-h-[140px]'>{beer.description}</p>
                        <div className='flex flex-col gap-6 relative pb-5'>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-xl flex gap-2'>
                                    <span className='font-semibold'>ABV %: </span>
                                    {beer.beerAbv}
                                </li>
                                <li className='text-xl flex gap-2'>
                                    <span className='font-semibold'>Type: </span>
                                    {beer.type_of_beer}
                                </li>
                                <li className='text-xl flex gap-2'>
                                    <span className='font-semibold'>Hops: </span>
                                    {beer.hops}
                                </li>
                                <li className='text-xl flex gap-2'>
                                    <span className='font-semibold'>Origin: </span>
                                    {beer.origin}
                                </li>
                            </ul>
                            {beer.beerTegs ?
                                <Accordion type="single" collapsible className='w-full absolute top-full left-0 bg-white border border-solid rounded-md'>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="font-semibold py-4 justify-between px-3 border-b">Смаки</AccordionTrigger>
                                        {beer.beerTegs.map(el =>
                                            <AccordionContent key={el[0]}>
                                                {el}
                                            </AccordionContent>
                                        )}
                                    </AccordionItem>
                                </Accordion> : null
                            }
                        </div>
                </div>
                <div className='flex justify-between flex-col pt-10'>
                    <div className='flex flex-col justify-center gap-7'>
                            <ul className='flex justify-between px-3 pb-7 border-b-2'>
                            <li>Ціна</li>
                            <li>Кількість</li>
                            <li>Підсумок</li>
                            </ul>
                            <div className='flex px-3'>
                                <div className='w-[112px] font-semibold text-[28px] not-italic flex items-center gap-1'>{beer.beerPrice}<span className='text-[14px]'>{beer.beerCurrency}</span></div>
                                <div className='flex flex-col flex-auto'>
                                    <div className='flex justify-center items-center gap-1 md:gap-3'>
                                        <Button className='rounded-full w-[22px] h-[22px]' onClick={() => decrement(quantity, beer.beerPrice)}>-</Button>
                                        <div className='w-[35px] h-[42px] flex justify-center items-center'>{quantity}</div>
                                        <Button className='rounded-full w-[22px] h-[22px]' onClick={() => increment(quantity, beer.beerPrice)}>+</Button>
                                    </div>
                                </div>
                                <div className='w-[112px] font-semibold text-[28px] not-italic flex items-center justify-end gap-1'>{quantity*beer.beerPrice}<span className='text-[14px]'>{beer.beerCurrency}</span></div>
                            </div>
                            <Button 
                                onClick={() => {
                                    addToCard(tempOrder)
                                    toast({
                                        title: "Корзину оновленно!"
                                    })
                                }}
                            >Оформити замовлення</Button>
                    </div>
                </div>
                <ul className='flex flex-col pt-10'>
                    <li className='flex flex-col gap-3'>
                        <span className='text-xl font-semibold text-end'>
                            Самовивезення
                        </span>
                        <p>
                            Мінімальна сума замовлення 50грн, сінімальний час складання 30 хв, можете без черги забрати з магазину в зручний для вас час
                        </p>
                    </li>
                    <li className='flex flex-col gap-3'>
                        <span className='text-xl font-semibold text-end'>
                            Доставка
                        </span>
                        <p>
                            Мінімальна сума замовлення 75 грн, вартість доставки 50 грн, час доставки 1 година
                        </p>
                    </li>
                    <li className='flex flex-col gap-3'>
                        <span className='text-xl font-semibold text-end'>
                            Оплата
                        </span>
                        <p>
                            Готівкою, банківською карткою, бонусами
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

