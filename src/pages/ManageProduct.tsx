import { Home, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const ManageProduct = () => {
	return (
		<div className="container grid  w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className=" border-r bg-muted/40 block md:mt-5 p-5 rounded-md">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex-1">
						<nav className="grid md:grid-cols-1 grid-cols-2 items-start px-2 text-base font-medium lg:px-4">
							<Link
								to="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green"
							>
								<Home className="h-4 w-4" />
								Manage Product
							</Link>
							<Link
								to="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green"
							>
								<ShoppingCart className="h-4 w-4" />
								Create Product
								{/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
									6
								</Badge> */}
							</Link>
						</nav>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<main className="flex flex-1 min-h-screen flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div
						className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
						x-chunk="dashboard-02-chunk-1"
					>
						<div className="flex flex-col items-center gap-1 text-center">
							<h3 className="text-2xl font-bold tracking-tight">
								You have no products
							</h3>
							<p className="text-sm text-muted-foreground">
								You can start selling as soon as you add a product.
							</p>
							<Button className="mt-4">Add Product</Button>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
export default ManageProduct
