import App from "@/App"
import About from "@/pages/About"
import AllProducts from "@/pages/AllProducts"
import Cart from "@/pages/Cart"
import Checkout from "@/pages/Checkout"
import Home from "@/pages/Home"
import SingleProduct from "@/pages/SingleProduct"
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
				path: "/product-details",
				element: <SingleProduct />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
		],
	},
])

export default router
