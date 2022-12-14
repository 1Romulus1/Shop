import { useEffect } from 'react'
import { createContext, useState } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase.utils.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const value = { categoriesMap }

  useEffect(()=> {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap)

      setCategoriesMap(categoryMap)
    }
    
    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
