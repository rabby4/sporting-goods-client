// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://sporting-goods-server-ten.vercel.app/api",
	}),
	tagTypes: ["product"],
	endpoints: (builder) => ({
		getProduct: builder.query({
			query: (query) => {
				const { searchTerm, sort } = query || {}
				let url = "/products"

				if (searchTerm) {
					url += `?searchTerm=${query.searchTerm}`
				}

				if (sort) {
					const sortValue = sort === "descending" ? "-price" : "price"
					url += searchTerm ? `&sort=${sortValue}` : `?sort=${sortValue}`
				}

				return {
					url,
					method: "GET",
				}
			},
			providesTags: ["product"],
		}),
		getSingleProduct: builder.query({
			query: (id) => {
				return {
					url: `/products/${id}`,
					method: "GET",
				}
			},
			providesTags: ["product"],
		}),
		postProduct: builder.mutation({
			query: (data) => {
				return {
					url: "/products",
					method: "POST",
					body: data,
				}
			},
			invalidatesTags: ["product"],
		}),
		updateProduct: builder.mutation({
			query: (options) => {
				return {
					url: `/products/${options.id}`,
					method: "PUT",
					body: options.data,
				}
			},
			invalidatesTags: ["product"],
		}),
		deleteProduct: builder.mutation({
			query: (id) => {
				return {
					url: `/products/${id}`,
					method: "DELETE",
				}
			},
			invalidatesTags: ["product"],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi
