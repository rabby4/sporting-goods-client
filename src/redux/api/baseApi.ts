// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
	tagTypes: ["product"],
	endpoints: (builder) => ({
		getProduct: builder.query({
			query: () => {
				return {
					url: "/products",
					method: "GET",
				}
			},
			providesTags: ["product"],
		}),
		postProduct: builder.mutation({
			query: (data) => {
				console.log(data)
				return {
					url: "/products",
					method: "POST",
					body: data,
				}
			},
			invalidatesTags: ["product"],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi
