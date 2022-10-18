import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/Spinner'

import CategoryPreview from '../../components/category-preview/CategoryPreview'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <div className='category-preview-container'>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products} />
        })
      )}
    </div>
  )
}

export default CategoriesPreview
