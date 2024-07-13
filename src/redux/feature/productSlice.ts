/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit"

type TProduct = {
	_id: string | null
	name: string | null
	description: string | null
	category: string | null
	brand: string | null
	quantity: number | null
	price: number | null
	image: string | null
	orderedQty: number | null
}

type TInitialState = {
	data: null | TProduct
}

const initialState: TInitialState = {
	data: null,
}

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setCart: (state, actions) => {
			const data = actions.payload
			state.data = data
		},
	},
})

export const { setCart } = productSlice.actions
export default productSlice.reducer
