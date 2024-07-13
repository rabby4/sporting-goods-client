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
import { removeCartData } from "@/redux/feature/productSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { NavLink } from "react-router-dom"

const Cart = () => {
	const dispatch = useAppDispatch()
	const cartData = useAppSelector((state) => state.product.data)

	const subTotal = cartData.reduce(
		(subTotal, product2) => subTotal + product2.price,
		0
	)
	console.log(subTotal)
	const totalVat = (subTotal * 15) / 100
	const total = subTotal + totalVat

	const handleRemoveProduct = (id: string) => {
		dispatch(removeCartData({ id }))
	}

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
							{cartData.map((product) => (
								<TableRow key={product._id}>
									<TableCell>
										<img
											src={product?.image as string}
											alt=""
											className="size-20"
										/>
									</TableCell>
									<TableCell className="font-medium">{product?.name}</TableCell>
									<TableCell>
										<Input
											className="w-[100px]"
											type="number"
											defaultValue={product?.orderedQty as number}
										/>
									</TableCell>
									<TableCell className="text-right">
										${product?.price}
									</TableCell>
									<TableCell>
										<Button
											onClick={() => handleRemoveProduct(product._id as string)}
											className="bg-red-600"
										>
											X
										</Button>
									</TableCell>
								</TableRow>
							))}
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
