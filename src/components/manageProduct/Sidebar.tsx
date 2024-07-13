import { Home, ShoppingCart } from "lucide-react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
	return (
		<div>
			<div className="md:h-[95vh] my-5 border-r bg-muted/40 block lg:p-5 md:p-2 rounded-md">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex-1">
						<nav className="grid md:grid-cols-1 grid-cols-2 items-start px-2 text-base font-medium lg:px-4">
							<NavLink
								to="/manage-product"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green"
							>
								<Home className="h-4 w-4" />
								Manage Product
							</NavLink>
							<NavLink
								to="/manage-product/create-product"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green"
							>
								<ShoppingCart className="h-4 w-4" />
								Create Product
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
