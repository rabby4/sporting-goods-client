import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import baseApi from "@/redux/api/baseApi"
import { Star } from "lucide-react"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { useParams } from "react-router-dom"

const SingleProduct = () => {
	const { id } = useParams()
	const { data: singleProduct, isLoading } =
		baseApi.useGetSingleProductQuery(id)
	if (isLoading) {
		return <p>Loading...</p>
	}
	const product = singleProduct?.data
	console.log(product)
	return (
		<div className="my-10">
			<div className="container">
				<div className="grid grid-cols-2 gap-10">
					<div>
						<img src={product?.image} alt="" />
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-2xl font-bold">{product?.name}</h2>
						<div className="flex justify-start">
							{/* {renderStars} */}
							<Star className="text-yellow-500" size={20} />
							<Star className="text-yellow-500" size={20} />
							<Star className="text-yellow-500" size={20} />
							<Star className="text-yellow-500" size={20} />
							<Star className="text-yellow-500" size={20} />
						</div>
						<h3 className="text-lg text-green font-bold">${product?.price}</h3>
						<p>{product?.description}</p>
						{product?.quantity > 0 ? (
							<>
								<div>
									<p className="text-green ">In Stock </p>
									<p className="font-medium">Only {product?.quantity} left</p>
								</div>
							</>
						) : (
							<p className="text-red-500 font-medium">Out of stock</p>
						)}
						<div>
							<Badge className="bg-green justify-center italic tracking-wider text-sm">
								<strong>Brand: </strong> <span>{product?.brand}</span>
							</Badge>
						</div>
						<div className="flex gap-5">
							<Input className="w-[100px]" type="number" />
							<Button className="bg-green px-10">Add to cart</Button>
						</div>
						<Separator />
						<p>
							<strong>Category: </strong> <span>{product?.category}</span>
						</p>
						<div className="flex gap-3 items-center">
							<strong>Share: </strong>
							<div className="flex w-full max-w-sm items-center space-x-2">
								<FaFacebook className="size-5 text-[#666666] hover:text-green cursor-pointer" />
								<FaInstagram className="size-5 text-[#666666] hover:text-green cursor-pointer" />
								<FaTwitter className="size-5 text-[#666666] hover:text-green cursor-pointer" />
								<FaYoutube className="size-5 text-[#666666] hover:text-green cursor-pointer" />
							</div>
						</div>
					</div>
				</div>
				<div>
					<Tabs
						defaultValue="description"
						className="flex flex-col items-center"
					>
						<TabsList className="w-full">
							<TabsTrigger
								value="description"
								className="h-full flex-1 text-lg"
							>
								Description
							</TabsTrigger>
							<TabsTrigger value="review" className="h-full flex-1 text-lg">
								Product Review
							</TabsTrigger>
							<TabsTrigger value="shipping" className="h-full flex-1 text-lg">
								Shipping and Delivery
							</TabsTrigger>
						</TabsList>
						<TabsContent value="description">
							{product?.description}
						</TabsContent>
						<TabsContent value="review">
							Review content would be here.
						</TabsContent>
						<TabsContent value="shipping">
							<div className="grid grid-cols-4 gap-5">
								<div className="col-span-1">
									<img
										src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/wood-ship-1.jpg"
										alt=""
									/>
								</div>
								<div className="col-span-1">
									<img
										src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/wood-ship-3.jpg"
										alt=""
									/>
								</div>
								<div className="col-span-2">
									<strong>1. Processing Time</strong>
									<p className="mb-3">
										All orders are processed within 1-2 business days. Orders
										are not shipped or delivered on weekends or holidays. If we
										are experiencing a high volume of orders, shipments may be
										delayed by a few days. Please allow additional days in
										transit for delivery. If there will be a significant delay
										in shipment of your order, we will contact you via email or
										telephone.
									</p>
									<strong>2. Shipping Rates & Delivery Estimates</strong>
									<p>
										Shipping charges for your order will be calculated and
										displayed at checkout. We offer the following shipping
										options: Standard Shipping: 5-7 business days Expedited
										Shipping: 2-3 business days Overnight Shipping: 1-2 business
										days Delivery delays can occasionally occur.
									</p>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	)
}

export default SingleProduct
