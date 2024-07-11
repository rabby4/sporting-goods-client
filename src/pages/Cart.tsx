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
import { NavLink } from "react-router-dom"

const Cart = () => {
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
										src="https://ornaldo.themeftc.com/wp-content/uploads/2021/03/19-2-548x548.jpg"
										alt=""
										className="size-20"
									/>
								</TableCell>
								<TableCell className="font-medium">Golf hand gloves</TableCell>
								<TableCell>
									<Input className="w-[100px]" type="number" />
								</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
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
							<strong>Subtotal: </strong> <span>$999</span>
						</p>
						<p className="tracking-wider flex justify-between">
							<strong>VAT 15%: </strong> <span>$15</span>
						</p>
						<Separator />
						<p className="tracking-wider flex justify-between">
							<strong>Total: </strong> <span>$1000</span>
						</p>
						<NavLink to={"/checkout"}>
							<Button className="bg-green">PROCEED TO CHECKOUT</Button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
