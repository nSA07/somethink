"use client"
import { BeerPage } from '@/components/Beers/BearsPage'

import { getData } from '../../../../queries/getData'
import { SingleProductQuery } from '../../../../queries/HomePageProductQuery'
import { useQuery } from '@tanstack/react-query'

export default  function GoodsDatails({params: {slug}}) {
    // const {data: beers, isSuccess} = useQuery(['beers'], async () => await getData(SingleProductQuery, 'beers', {product_slug: slug}))
    return (
        <>
            <BeerPage key={slug} />
        </>
    )
}
