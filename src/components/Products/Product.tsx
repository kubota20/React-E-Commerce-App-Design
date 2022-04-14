import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material'
import { Info, ContainerP, Circle, Image, Icon } from './style'

const Product = ({ item }: { item: any }) => {
  return (
    <ContainerP>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingBagOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </ContainerP>
  )
}

export default Product
