import Product from './Product'
import { Container } from './style'
import { popularProducts } from '../index'

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
