import Sidebar from "@/components/manageProduct/Sidebar"
import { Outlet } from "react-router-dom"

const ManageProduct = () => {
	return (
		<div className="container grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<Sidebar />
			<div className="flex flex-col">
				<Outlet />
			</div>
		</div>
	)
}
export default ManageProduct
