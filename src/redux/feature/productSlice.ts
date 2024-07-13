/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit"

type TProduct = {
	_id: string
	name: string
	description: string
	category: string
	brand: string
	quantity: number
	price: number
	image: string
	orderedQty: number
}

type TInitialState = {
	data: TProduct[]
}

const initialState: TInitialState = {
	data: [],
}

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setCart: (state, actions) => {
			console.log(state.data)
			const data = actions.payload
			state.data = data
		},
		addProduct: (state, actions) => {
			const existingProduct = state.data.find(
				(product) => product._id === actions.payload._id
			)
			if (!existingProduct) {
				state.data?.push(actions.payload)
			}
		},
		removeCartData: (state, actions) => {
			state.data = state.data.filter(
				(product) => product._id !== actions.payload.id
			)
		},
	},
})

export const { setCart, addProduct, removeCartData } = productSlice.actions
export default productSlice.reducer
