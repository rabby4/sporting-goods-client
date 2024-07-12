/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import baseApi from "@/redux/api/baseApi"
import { Star, StarIcon } from "lucide-react"

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

const AllProducts = () => {
	const { data: products } = baseApi.useGetProductQuery(undefined)
	console.log(products?.data)
	return (
		<div className="mb-20">
			<div className="bg-about-us h-64 flex justify-center items-center">
				<h1 className="text-5xl font-oswald text-white">Shop Page</h1>
			</div>
			<div className="container">
				<div className="grid grid-cols-4 gap-5 mt-10">
					<div className="col-span-1">
						<div className="flex flex-col gap-3 w-full items-center space-x-2 mt-2">
							<Input type="text" placeholder="Search here..." />
							<Button type="submit" className="bg-green  w-full !ml-0">
								Search
							</Button>
						</div>
					</div>
					<div className="col-span-3">
						<div className="grid grid-cols-3 gap-5">
							{products?.data?.map((product: any) => (
								<Card className="action-hover overflow-hidden">
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
												Details View
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
													<strong>$ </strong> <span>{product.price}</span>
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllProducts
