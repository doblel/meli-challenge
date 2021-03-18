import React, { useState, useContext, createContext, useMemo } from 'react'

export const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  const values = useMemo(() => ({
    categories,
    setCategories
  }), [categories])

  return (
    <AppContext.Provider value={values}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}

export default useAppContext