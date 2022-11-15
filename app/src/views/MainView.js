import React from 'react'
import Sale50 from '../sections/Sale50%Section'
import WinterClearanceAndNewArrivals from '../sections/WinterClearance-NewArrivalsSection'
import FeaturedProducts from '../sections/FeaturedProductsSection'
import PamelaRaifAndLetsBeConscious from '../sections/PamelaRaif-LetsBeConsciousSection'
import OurSpecialty from '../sections/OurSpecialtySection'
import UpTo70Off from '../sections/UpTo70%OffSection'
import LatestAndBestSellingAndTopReactedProducts from '../sections/Latest-BestSelling-TopReactedSection'
import ServiceInfo from '../sections/ServiceInfoSection'
import WeirdAlignSections from '../sections/WeirdAlignSections'

const MainView = () =>
(
  <>
    <Sale50/>
    <WinterClearanceAndNewArrivals/>
    <FeaturedProducts/>
    <PamelaRaifAndLetsBeConscious/>
    <OurSpecialty/>
    <WeirdAlignSections/>
    <UpTo70Off/>
    <LatestAndBestSellingAndTopReactedProducts/>
    <ServiceInfo/>
  </>
)

export default MainView