import React, { createContext, useContext, useEffect, useState } from "react"
import { getItems } from "../../data/data"


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [productos, setProductos] = useState([])

	useEffect(() => {
		getItems().then((resp) => setProductos(resp))
	})
	return (
		<AppContext.Provider value={{ productos }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider