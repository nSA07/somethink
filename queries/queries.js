import axios from "axios";
const urlAPI = process.env.NEXT_PUBLIC_ITEMS

export const getData = async (url) => {
    try{
        const cart = await axios(`${urlAPI}/${url}`)
        return cart.data.data
    } catch (err) {
        console.error(err.toJSON())
    }
}