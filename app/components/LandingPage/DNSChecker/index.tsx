'use client'
import React, { useCallback, useEffect, useRef, useState, FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import { Check } from '@/app/ui/Icons/Check'
import { Close } from '@/app/ui/Icons/Close'
import { cn } from '@/app/lib/cn'
import Link from 'next/link'

export default function DNSChecker() {
  const { domain, setDomain, availability, setAvailability } = useDomain()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const checkDomain = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (setAvailability) {
      setAvailability(null)
    }

    try {
      const response = await fetch('/api/check-domain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
      })

      const data = await response.json()

      if (response.ok) {
        if (setAvailability) {
          setAvailability(data.available)
        }
      } else {
        setError(data.error || 'An error occurred')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const placeholders = [
    'indrafinance.cz',
    'svatba-novakovi.cz',
    'vcelari-levne.eu',
    'kreativniduo.cz',
    'reality-zlin.cz',
  ]

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)

  useEffect(() => {
    let interval: any
    const startAnimation = () => {
      interval = setInterval(() => {
        setCurrentPlaceholder(prev => (prev + 1) % placeholders.length)
      }, 1500)
    }
    startAnimation()
    return () => clearInterval(interval)
  }, [placeholders.length])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const newDataRef = useRef<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [animating, setAnimating] = useState(false)

  const draw = useCallback(() => {
    if (!inputRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 800
    canvas.height = 800
    ctx.clearRect(0, 0, 800, 800)
    const computedStyles = getComputedStyle(inputRef.current)

    const fontSize = parseFloat(computedStyles.getPropertyValue('font-size'))
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`
    ctx.fillStyle = '#FFF'
    ctx.fillText(value, 16, 40)

    const imageData = ctx.getImageData(0, 0, 800, 800)
    const pixelData = imageData.data
    const newData: any[] = []

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n
        if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
          newData.push({
            x: n,
            y: t,
            color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]],
          })
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }))
  }, [value])

  useEffect(() => {
    draw()
  }, [value, draw])

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = []
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i]
          if (current.x < pos) {
            newArr.push(current)
          } else {
            if (current.r <= 0) {
              current.r = 0
              continue
            }
            current.x += Math.random() > 0.5 ? 1 : -1
            current.y += Math.random() > 0.5 ? 1 : -1
            current.r -= 0.05 * Math.random()
            newArr.push(current)
          }
        }
        newDataRef.current = newArr
        const ctx = canvasRef.current?.getContext('2d')
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800)
          newDataRef.current.forEach(t => {
            const { x: n, y: i, r: s, color: color } = t
            if (n > pos) {
              ctx.beginPath()
              ctx.rect(n, i, s, s)
              ctx.fillStyle = color
              ctx.strokeStyle = color
              ctx.stroke()
            }
          })
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8)
        } else {
          setValue('')
          setAnimating(false)
        }
      })
    }
    animateFrame(start)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !animating) {
      vanishAndSubmit()
    }
  }

  const vanishAndSubmit = () => {
    setAnimating(true)
    draw()

    const value = inputRef.current?.value || ''
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0,
      )
      animate(maxX)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!animating) {
      setValue(e.target.value)
      if (setDomain) {
        setDomain(e.target.value)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    vanishAndSubmit()
    checkDomain(e)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-row justify-start items-center space-x-2">
        <div className="relative">
          <div
            className={cn(
              'w-[80vw] max-w-screen-sm relative mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200',
              value && 'bg-gray-50',
            )}
          >
            <canvas
              className={cn(
                'absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0',
                !animating ? 'opacity-0' : 'opacity-100',
              )}
              ref={canvasRef}
            />
            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              value={value}
              type="text"
              className={cn(
                'w-full relative text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-6 pr-20',
                animating && 'text-transparent dark:text-transparent',
              )}
            />

            <button
              disabled={!value && availability == null}
              type="submit"
              className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-auto px-4 rounded-full disabled:bg-gray-100 dark:disabled:bg-default-500 bg-secondary transition duration-200 flex flex-row items-center justify-center space-x-1"
            >
              {availability !== null && !loading && (
                <span
                  className={`${availability ? 'bg-[#72E790]' : 'bg-[#FF7070]'} p-0.5 rounded-full`}
                >
                  {availability ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    <Close size={16} className="text-white" />
                  )}
                </span>
              )}

              {availability !== null ? (
                <Link href="/studio" target="_blank" className="text-primary dark:text-black">
                  {availability ? 'Dostupná, vytvořit web' : 'Nevadí, i tak vytvořit web'}
                </Link>
              ) : (
                <span className="text-primary disabled:text-gray-600 dark:text-black disabled:text-white">
                  Ověřit
                </span>
              )}
            </button>

            <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
              <AnimatePresence mode="wait">
                {!value && (
                  <motion.p
                    initial={{
                      y: 5,
                      opacity: 0,
                    }}
                    key={`current-placeholder-${currentPlaceholder}`}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -15,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'linear',
                    }}
                    className="text-base font-normal text-neutral-500 pl-6 text-left w-[calc(100%-2rem)] truncate"
                  >
                    {placeholders[currentPlaceholder]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {error && <p className="hidden">{error}</p>}
      </form>
    </div>
  )
}
