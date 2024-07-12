/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star, StarIcon } from "lucide-react"
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

const renderStars = (rating: number) => {
	const stars = []
	for (let i = 1; i <= 10; i++) {
		stars.push(
			i <= rating ? (
				<Star key={i} className="text-yellow-500" />
			) : (
				<StarIcon key={i} className="text-gray-500" />
			)
		)
	}
	return stars
}

const FeatureProducts = () => {
	const { data: products } = baseApi.useGetProductQuery(undefined)
	return (
		<div>
			<div className="container">
				<div className="w-2/4 mx-auto text-center space-y-3">
					<h1 className="text-4xl font-bold">Featured Products</h1>
					<p className="italic ">
						Visit our shop page and see our amazing products.
					</p>
				</div>
				<div className="grid grid-cols-4 gap-5">
					{products?.data?.map((product: any) => (
						<Card className="action-hover overflow-hidden" key={product._id}>
							<CardHeader className="p-0 relative ">
								<Badge className="bg-green justify-center italic tracking-wider -rotate-45 rotate-badge">
									<strong>Brand: </strong> <span>{product.brand}</span>
								</Badge>
								<img
									src="https://ornaldo.themeftc.com/wp-content/uploads/2021/03/19-2-548x548.jpg"
									alt=""
								/>
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
								<CardDescription>{product.description}</CardDescription>
								<div className="flex flex-col justify-center gap-3">
									<div>
										<div className="flex w-full justify-center">
											{/* {renderStars} */}
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
