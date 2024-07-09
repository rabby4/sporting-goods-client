import { Button } from "./components/ui/button"

const App = () => {
	const handleButton = () => {
		console.log("clicked")
	}
	return (
		<div>
			<Button onClick={handleButton}>Click me</Button>
		</div>
	)
}

export default App
