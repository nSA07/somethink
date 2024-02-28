import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCard: (product) => {
                const session = get().cart;
                const serchOrder = session.findIndex((item) => product.product_id === item.product_id)
                serchOrder !== -1 ? session.splice(serchOrder, 1, product) : session.push(product)
                set({ cart: [...session] })
            },
            deleteToCard: (id) => {
                const session = get().cart;
                const serchOrder = session.filter((item) => id !== item.product_id)
                set({ cart: [...serchOrder] })
            },
            incrementProduct: (id) => set({
                cart: get().cart.map((item) => id === item.product_id ? { ...item, quantity: item.quantity+1} : item)
            }),
            decrementProduct: (id) => set({
                cart: get().cart.map((item) => id === item.product_id ? { ...item, quantity: item.quantity-1} : item)
            })
        }),
        {
            name: 'cart', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)