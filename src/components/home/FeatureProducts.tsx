import { Star, StarIcon } from "lucide-react"
import { Button } from "../ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card"

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
	return (
		<div>
			<div className="container">
				<div className="w-2/4 mx-auto text-center space-y-3">
					<h1 className="text-4xl font-bold">Featured Products</h1>
					<p className="italic ">
						Visit our shop page and see our amazing products.
					</p>
				</div>
				<div className="grid grid-cols-4 mt-10">
					<Card className="action-hover">
						<CardHeader className="p-0 relative ">
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
							<CardTitle className=" font-bold">Gloves for golf</CardTitle>
							<CardDescription>
								This gloves use for play golf. This gloves use for play golf.
							</CardDescription>
							<div>
								<p className="text-green italic tracking-wider">
									{" "}
									<strong>Brand: </strong> Wilson
								</p>
								<p>
									{/* @ts-expect-error their is no type declaration file for react rating*/}

									{renderStars}
								</p>
								<div className="flex justify-between">
									<p className=" tracking-wider">
										<strong>Quantity: </strong> 100
									</p>
									<p className=" tracking-wider">
										<strong>Price: </strong> 100
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default FeatureProducts
