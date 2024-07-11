import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

const Cart = () => {
	return (
		<div>
			<div className="bg-about-us h-64 flex justify-center items-center">
				<h1 className="text-5xl font-oswald text-white">My Cart</h1>
			</div>
			<div className="container my-20 grid grid-cols-3">
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
								<TableCell>Golf hand gloves</TableCell>
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
				</div>
				<div>cart total</div>
			</div>
		</div>
	)
}

export default Cart
