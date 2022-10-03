import * as React from "react"
import { Routes, Route } from "react-router-dom"
import App from "../../ui/App"
import Notfound from "../../ui/Notfound"

function Home() {
	return (
		<div className="routes">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	)
}

export default Home
