import {
  NavBar,
  Announcement,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from '../components'

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
