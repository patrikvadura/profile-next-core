import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'

export default function Home() {
  return (
    <>
      <div className="container flex flex-wrap">
        <div className="basis-2/3">Width</div>

        <div className="basis-1/3">
          <Hero />
          <About />
          <Services />
          <Reference />
          <Contact />
        </div>
      </div>
    </>
  )
}
