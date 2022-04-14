import { ContainerI, Image, Info, Title, Button } from './style'

const CategoryItem = ({ item }: { item: any }) => {
  return (
    <ContainerI>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </ContainerI>
  )
}

export default CategoryItem
