import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reference />
      <Contact />
    </>
  )
}
