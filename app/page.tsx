import BgImage from '@/components/BgImage/BgImage'
import Footer from '@/components/Footer/Footer'
import Navbar1 from '@/components/Header/Navbar1'
import Navbar2 from '@/components/Header/Navbar2'
import Section1 from '@/components/Sections/Section1'
import Section2 from '@/components/Sections/Section2'
import Section3 from '@/components/Sections/Section3'
import Section4 from '@/components/Sections/Section4'
import Section5 from '@/components/Sections/Section5'
import Section6 from '@/components/Sections/Section6'
import Section7 from '@/components/Sections/Section7'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <BgImage/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Footer/>
    </>
  )
}
