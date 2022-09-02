import React from 'react'
import Navbar from '../layouts/Navbar'
import CarouselSection from '../../components/Home/CarouselSection'
import FeatureSection from '../../components/Home/FeatureSection'
import PopularCategories from '../../components/Home/PopularCategories'
import ProdectsSection from '../../components/Home/ProductsSection/ProductsSection'
import Footer from '../layouts/Footer'
function Home() {
  return (
    <>
      <Navbar />
      <CarouselSection />
      <FeatureSection />
      <PopularCategories />
      <ProdectsSection />
      <Footer />
    </>
  )
}
export default Home