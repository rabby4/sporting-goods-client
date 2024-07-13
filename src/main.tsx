import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store.ts"
import { RouterProvider } from "react-router-dom"
import router from "./router/index.tsx"
import { PersistGate } from "redux-persist/integration/react"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
			<Toaster />
		</Provider>
	</React.StrictMode>
)
