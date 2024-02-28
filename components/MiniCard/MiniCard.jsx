'use client'
import Link from "next/link"
import Image from "next/image"
import icons from '../../assets/img/header/basket.svg'

import { useStore } from '../../hooks/zustandHooks'
import { useCartStore } from '../../store/useCartStore';

export const MiniCard = () => {
    const cart = useStore(useCartStore, (state) => state.cart)
    return (
        <Link className="flex items-center gap-1" href='/basket'>
            {<span className="text-xl">{cart?.length}</span>}
            <Image
                src={icons}
                alt="basket"
            />
        </Link>
    )
}
