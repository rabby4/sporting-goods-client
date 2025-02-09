/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from "lucide-react"
import { Button } from "../ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card"
import { Badge } from "../ui/badge"
import { NavLink } from "react-router-dom"
import baseApi from "@/redux/api/baseApi"

const FeatureProducts = () => {
	const { data: products, isLoading } = baseApi.useGetProductQuery("all")

	if (isLoading) {
		return <p>Loading...</p>
	}
	const allProduct = [...products?.data]
	const sortProductsByDate = allProduct?.sort(
		(a: any, b: any) =>
			new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	)

	return (
		<div>
			<div className="container">
				<div className="md:w-2/4 mx-auto text-center space-y-3">
					<h1 className="text-4xl font-bold">Featured Products</h1>
					<p className="italic ">
						Visit our shop page and see our amazing products.
					</p>
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10 lg:px-0 px-10">
					{sortProductsByDate?.map((product: any) => (
						<Card className="action-hover overflow-hidden" key={product._id}>
							<CardHeader className="p-0 relative ">
								<Badge className="bg-green justify-center italic tracking-wider -rotate-45 rotate-badge">
									<strong>Brand: </strong> <span>{product.brand}</span>
								</Badge>
								<img src={product.image} alt="" />
								<div className="action-buttons flex justify-between px-5 z-0 absolute bottom-0 ">
									<Button className="flex-1 rounded-none gap-3 w-full">
										Add To Cart
									</Button>
									<Button className="flex-1 rounded-none gap-3">
										<NavLink to={`/product-details/${product._id}`}>
											Details View
										</NavLink>
									</Button>
								</div>
							</CardHeader>
							<CardContent className="space-y-2 mt-2 z-10 relative bg-white">
								<p className=" text-gray-400 italic tracking-wider">Golf</p>
								<CardTitle className="text-lg font-bold">
									{product.name}
								</CardTitle>
								<CardDescription>
									{product.description.length > 60
										? product.description.slice(0, 60)
										: product.description}
								</CardDescription>
								<div className="flex flex-col justify-center gap-3">
									<div>
										<div className="flex w-full justify-center">
											<Star className="text-yellow-500" />
											<Star className="text-yellow-500" />
											<Star className="text-yellow-500" />
											<Star className="text-yellow-500" />
											<Star className="text-yellow-500" />
										</div>
									</div>
									<div className="flex justify-between">
										<p className=" tracking-wider">
											<strong>Quantity: </strong>
											<span>{product.quantity}</span>
										</p>
										<p className="text-green tracking-wider">
											<strong>$</strong> <span>{product.price}</span>
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default FeatureProducts
