import React, { createContext, useContext, useState } from "react"
import {productList} from "../../data/Data"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState(productList)
    console.log(products);
	
	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider