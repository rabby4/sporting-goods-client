import { ReactNode } from "react"

const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div className="max-w-screen-xl h-full content-center m-auto">
			{children}
		</div>
	)
}

export default Container
