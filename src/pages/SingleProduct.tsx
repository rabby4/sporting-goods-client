import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
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
			</div>
		</div>
	)
}

export default SingleProduct
