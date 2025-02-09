import App from "@/App"
import CreateProduct from "@/components/manageProduct/CreateProduct"
import Manage from "@/components/manageProduct/Manage"
import UpdateProduct from "@/components/manageProduct/UpdateProduct"
import About from "@/pages/About"
import AllProducts from "@/pages/AllProducts"
import Cart from "@/pages/Cart"
import Checkout from "@/pages/Checkout"
import Home from "@/pages/Home"
import ManageProduct from "@/pages/ManageProduct"
import SingleProduct from "@/pages/SingleProduct"
import ThankYou from "@/pages/ThankYou"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/about-us",
				element: <About />,
			},
			{
				path: "/products",
				element: <AllProducts />,
			},
			{
				path: "/product-details/:id",
				element: <SingleProduct />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
			{
				path: "/thank-you",
				element: <ThankYou />,
			},
			{
				path: "/manage-product",
				element: <ManageProduct />,
				children: [
					{
						index: true,
						element: <Manage />,
					},
					{
						path: "create-product",
						element: <CreateProduct />,
					},
					{
						path: "update-product/:id",
						element: <UpdateProduct />,
					},
				],
			},
		],
	},
])

export default router
