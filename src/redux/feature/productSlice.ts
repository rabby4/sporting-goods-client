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
		setCart: (state, action) => {
			console.log(state?.data)
			const data = action.payload
			state.data = data
		},
		addProduct: (state, action) => {
			try {
				const existingProduct = state?.data?.find(
					(product) => product._id === action.payload._id
				)
				if (!existingProduct) {
					state?.data?.push(action.payload)
				}
			} catch (error) {
				console.log(error)
			}
		},
		removeCartData: (state, action) => {
			state.data = state?.data?.filter(
				(product) => product._id !== action.payload.id
			)
		},
		removeAllCartData: (state) => {
			state.data = []
		},
	},
})

export const { setCart, addProduct, removeCartData, removeAllCartData } =
	productSlice.actions
export default productSlice.reducer
