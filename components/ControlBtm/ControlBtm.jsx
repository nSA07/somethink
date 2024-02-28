'use client'
import { useToast } from "@/components/ui/use-toast"
import { XCircle, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const ControlBtm = ({id, name, quantity, price}) => {
    const { deleteToCard, incrementProduct, decrementProduct } = useCartStore()
    const { toast } = useToast()
    return (
        <div className='flex flex-col sm:flex-row justify-between pt-9 gap-2 sm:gap-0'>
            <div className='flex gap-2 items-center justify-between '>
                <XCircle onClick={() => deleteToCard(id)} className='cursor-pointer' />
                <div className='flex items-center'>
                    <p className='font-normal italic text-lg'>{name} x {quantity}</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='font-normal text-2xl md:text-3xl w-[125px]'>{price}<span className='font-normal text-sm italic'>грн</span></div>
                <div className='flex justify-center items-center gap-2'>
                    <div className='h-[40px] rounded-full bg-slate-900 text-slate-50 hover:bg-slate-900/90 px-4 flex justify-center items-center'>
                        {(quantity <= 1) ? (<button onClick={() => deleteToCard(id)}><XCircle /></button>) : <button onClick={() => {decrementProduct(id)}}><Minus /></button>}
                        <span className='px-5'>{quantity}</span>
                        <button onClick={() => {incrementProduct(id)}}><Plus /></button>
                    </div>
                </div>
                <div className='font-normal text-2xl md:text-3xl w-[125px] text-right'>{price*quantity}<span className='font-normal text-sm italic'>грн</span></div>
            </div>
        </div>
    )
}
