import { Outlet } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"

const App = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default App
