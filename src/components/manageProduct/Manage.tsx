import { SquarePen, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table"

const Manage = () => {
	return (
		<div>
			<main className="flex flex-1 min-h-screen flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div
					className="flex flex-1  justify-center rounded-lg border border-dashed shadow-sm"
					x-chunk="dashboard-02-chunk-1"
				>
					{/* <div className="flex flex-col items-center gap-1 text-center">
						<h3 className="text-2xl font-bold tracking-tight">
							Manage your product
						</h3>
						<p className="text-sm text-muted-foreground">
							You can start selling as soon as you add a product.
						</p>
						<Button className="mt-4">Add Product</Button>
					</div> */}
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Image</TableHead>
								<TableHead>Product</TableHead>
								<TableHead>Price</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow className=" ">
								<TableCell>
									<img
										src="https://ornaldo.themeftc.com/wp-content/uploads/2021/03/19-2-548x548.jpg"
										alt=""
										className="size-20"
									/>
								</TableCell>
								<TableCell className="font-medium">Golf hand gloves</TableCell>
								<TableCell>$250.00</TableCell>
								<TableCell className="flex gap-2">
									<Button className="bg-green flex gap-3">
										<SquarePen className="size-5" /> <span>Update</span>
									</Button>
									<Button className="bg-red-600 flex gap-3">
										{" "}
										<Trash2 className="size-5" /> <span>Delete</span>
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</main>
		</div>
	)
}

export default Manage
