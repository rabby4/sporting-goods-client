// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
	tagTypes: ["product"],
	endpoints: (builder) => ({
		getProduct: builder.query({
			query: (options) => {
				console.log(options)
				if (!options) {
					return {
						url: "/products",
						method: "GET",
					}
				} else {
					return {
						url: `/products?searchTerms=${options}`,
						method: "GET",
					}
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
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi
