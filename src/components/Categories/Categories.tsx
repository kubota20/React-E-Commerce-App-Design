import CategoryItem from './CategoryItem'
import { categories } from '../index'
import { Container } from './style'

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories
