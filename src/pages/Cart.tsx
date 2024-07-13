import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { useAppSelector } from "@/redux/hook"
import { NavLink } from "react-router-dom"

const Cart = () => {
	const cartData = useAppSelector((state) => state.product.data)
	console.log(cartData)
	const subTotal = cartData!.price! * cartData!.orderedQty!
	const totalVat = (subTotal * 15) / 100
	const total = subTotal + totalVat

	return (
		<div>
			<div className="bg-about-us h-64 flex justify-center items-center">
				<h1 className="text-5xl font-oswald text-white">My Cart</h1>
			</div>
			<div className="container my-20 grid grid-cols-3 gap-6">
				<div className="col-span-2">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Image</TableHead>
								<TableHead>Product</TableHead>
								<TableHead>Quantity</TableHead>
								<TableHead className="text-right">Sub Total</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<img
										src={cartData?.image as string}
										alt=""
										className="size-20"
									/>
								</TableCell>
								<TableCell className="font-medium">{cartData?.name}</TableCell>
								<TableCell>
									<Input
										className="w-[100px]"
										type="number"
										defaultValue={cartData?.orderedQty as number}
									/>
								</TableCell>
								<TableCell className="text-right">${cartData?.price}</TableCell>
								<TableCell>
									<Button className="bg-red-600">X</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
					<div className="flex w-full max-w-sm items-center space-x-2 mt-5">
						<Input type="text" placeholder="Enter Coupon Code" />
						<Button type="submit" className="bg-green">
							Apply Coupon
						</Button>
					</div>
				</div>
				<div>
					<div className="space-y-8 flex flex-col p-10 border-2">
						<h2 className="text-2xl font-oswald tracking-wider">Cart Total</h2>
						<Separator />
						<p className="tracking-wider flex justify-between">
							<strong>Subtotal: </strong> <span>${subTotal}</span>
						</p>
						<p className="tracking-wider flex justify-between">
							<strong>VAT 15%: </strong> <span>${totalVat}</span>
						</p>
						<Separator />
						<p className="tracking-wider flex justify-between">
							<strong>Total: </strong> <span>${total}</span>
						</p>
						<NavLink to={"/checkout"} className="w-full">
							<Button className="bg-green w-full">PROCEED TO CHECKOUT</Button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
