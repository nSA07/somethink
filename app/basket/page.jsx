'use client'
import Link from 'next/link.js'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ControlBtm } from '@/components/ControlBtm/ControlBtm'
import { Button } from '@/components/ui/button.jsx'

import { useStore } from '../../hooks/zustandHooks'
import { useCartStore } from '../../store/useCartStore';

export default function Basket() {
    const basket = useStore(useCartStore, (state) => state.cart)

    const disabled = basket?.length > 0 ? false : true
    const sum = basket?.reduce((acc, item) => acc + (+item.price*item.quantity), 0);

    return (
        <div className='xl:max-w-[1240px] lg:max-w-[1000px] mx-auto'>
            <div className='px-3 flex flex-col lg:flex-row justify-between gap-10 items-center lg:items-start'>
                <div className='w-full md:w-[717px] min-h-0 lg:min-h-[314px] overflow-auto'>
                    <div className='pl-12 flex justify-between mb-4'>
                        <span className='font-extrabold text-sm'>Товар</span>
                        <div className='md:flex gap-24 hidden'>
                            <span className='font-extrabold text-sm'>Ціна</span>
                            <span className='font-extrabold text-sm'>Кількість</span>
                            <span className='font-extrabold text-sm pr-4'>Підсумок</span>
                        </div>
                    </div>
                    <hr className='w-full border-black border-solid border' />
                    {(basket?.length > 0) ? basket?.map((item) => (
                        <ControlBtm
                            key={item.product_id}
                            id={item.product_id}
                            name={item.product_name}
                            quantity={item.quantity}
                            price={item.price}
                            basket={basket}
                        />
                    )) : <div className='pt-4'>Ви ще нічого не вибрали...</div>}
                </div>
                <div className='w-5/6 sm:w-[350px]'>
                    <Card className='px-12 pb-6 gap-8 border-y-2 rounded-none border-black'>
                        <CardHeader className='flex-col md:flex-row items-center'>
                            <CardDescription>Підсумок</CardDescription>
                            <CardTitle>{sum}грн</CardTitle>
                        </CardHeader>
                        <Button className='text-center' disabled={disabled}>
                            <Link href='/checkout'>перейти до оформлення</Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    )
}