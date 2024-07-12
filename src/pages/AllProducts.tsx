import baseApi from "@/redux/api/baseApi"

const AllProducts = () => {
	const { data: products } = baseApi.useGetProductQuery(undefined)
	console.log(products?.data)
	return (
		<div>
			<h1>This is all products page</h1>
		</div>
	)
}

export default AllProducts
