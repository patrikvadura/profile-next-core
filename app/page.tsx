import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About variant="01" layout="transparent" align="left" order="asc" />
      <Services />
      <Reference />
      <Contact />
      <Footer />
    </>
  )
}
