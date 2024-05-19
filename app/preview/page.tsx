'use client'
import React, { useState } from 'react'
import { options } from '@/app/lib/customizer'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Services } from '@/app/components/Services'
import { Reference } from '@/app/components/Reference'
import { Contact } from '@/app/components/Contact'
import Dropdown from '@/app/components/Customizer/Dropdown'
import PreviewContainer from '@/app/components/Customizer/PreviewContainer'
import OptionsContainer from '@/app/components/Customizer/OptionsContainer'
import OptionSelector from '@/app/components/Customizer/OptionSelector'
import ColorPickerAbout from '@/app/components/Customizer/ColorPicker/About'

export default function Preview() {
  // Parameters
  const [variant, setVariant] = useState('01')
  const [layout, setLayout] = useState('transparent')
  const [align, setAlign] = useState('left')
  const [order, setOrder] = useState('asc')
  // Visibility
  const [showHero, setShowHero] = useState(true)
  const [showAbout, setShowAbout] = useState(true)
  const [showServices, setShowServices] = useState(true)
  const [showReference, setShowReference] = useState(true)
  const [showContact, setShowContact] = useState(true)
  // Colors
  const [aboutBackground, setAboutBackground] = useState()
  const [aboutAccentBg, setAboutAccentBg] = useState()
  const [aboutAccentFg, setAboutAccentFg] = useState()
  const [aboutTypo, setAboutTypo] = useState()

  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <OptionsContainer>
        <h3 className="text-lg font-bold pt-4">Volba sekcí</h3>

        <Dropdown
          label="Hero sekce"
          checked={showAbout}
          onChange={() => setShowAbout(!showAbout)}
        />

        <Dropdown
          label="O nás"
          checked={showAbout}
          link="#about"
          onChange={() => setShowAbout(!showAbout)}
        >
          <div className="space-y-4">
            <span className="mt-2 font-semibold">Barevnost sekce:</span>

            <ColorPickerAbout
              backgroundColor={setAboutBackground}
              accentBgColor={setAboutAccentBg}
              accentFgColor={setAboutAccentFg}
              typoColor={setAboutTypo}
            />

            <OptionSelector
              title="Varianta"
              options={options.variant}
              selectedOption={variant}
              onChange={setVariant}
              visual
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Layout"
              options={options.layout}
              selectedOption={layout}
              onChange={setLayout}
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Zarovnání"
              options={options.align}
              selectedOption={align}
              onChange={setAlign}
            />
          </div>

          <div className="space-y-4">
            <OptionSelector
              title="Pořadí"
              options={options.order}
              selectedOption={order}
              onChange={setOrder}
            />
          </div>
        </Dropdown>

        <Dropdown
          label="Služby"
          checked={showAbout}
          link="#service"
          onChange={() => setShowAbout(!showAbout)}
        />

        <Dropdown
          label="Reference"
          checked={showAbout}
          link="#reference"
          onChange={() => setShowAbout(!showAbout)}
        />

        <Dropdown
          label="Kontakt"
          checked={showAbout}
          link="#contact"
          onChange={() => setShowAbout(!showAbout)}
        />
      </OptionsContainer>

      <PreviewContainer>
        <Header />
        {showHero && <Hero />}
        {showAbout && (
          <About
            variant={variant}
            layout={layout}
            align={align}
            order={order}
            backgroundColor={aboutBackground}
            accentBgColor={aboutAccentBg}
            accentFgColor={aboutAccentFg}
            typoColor={aboutTypo}
          />
        )}
        {showServices && <Services />}
        {showReference && <Reference />}
        {showContact && <Contact />}
        <Footer />
      </PreviewContainer>
    </div>
  )
}
