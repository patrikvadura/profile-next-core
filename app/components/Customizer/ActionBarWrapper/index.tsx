import React, { useState, useEffect } from 'react'
import { ActionWrapper } from '@/app/ui/ActionWrapper'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Download } from '@/app/ui/Icons/Download'
import Button from '@/app/ui/Button'
import BreakpointSwitcher from '@/app/components/Customizer/Breakpoint/Switcher'
import ActionBar from '@/app/components/Customizer/ActionBar'

interface Props {
  steps: string[]
  other: {
    currentStep: number | any
    currentBreakpoint: string | any
    setCurrentBreakpoint: React.Dispatch<React.SetStateAction<string>> | any
  }
  isModalVisible: boolean
  handleStepClick: (index: number) => void
  totalPrice: number
  totalTime: number
  calculateProgress: () => number
  exportToJson: (stateData: any, domain: string) => void
  stateData: any
  domain: string | any | null | undefined
}

export default function ActionBarWrapper({
  steps,
  other,
  isModalVisible,
  handleStepClick,
  totalPrice,
  totalTime,
  calculateProgress,
  exportToJson,
  stateData,
  domain,
}: Props) {
  const [progressComplete, setProgressComplete] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)

  const progress = calculateProgress()

  // Update state when progress reaches 100%
  useEffect(() => {
    if (progress === 100 && !progressComplete) {
      setProgressComplete(true)
    } else if (progress < 100 && progressComplete) {
      setProgressComplete(false)
    }
  }, [progress, progressComplete])

  return (
    <ActionBar>
      <div className="flex flex-row items-center text-base text-black border-r-2 border-black border-opacity-[.05] pr-2 mr-2">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`flex flex-row items-center text-sm py-2 px-3 rounded-full ${
              other.currentStep === index && isModalVisible
                ? 'bg-secondary text-primary font-bold'
                : 'text-primary font-bold'
            }`}
            onClick={() => handleStepClick(index)}
          >
            {step}
          </button>
        ))}
      </div>

      <div className="flex flex-row items-center space-x-2 text-base text-black border-r-2 border-black border-opacity-[.05] py-2 pl-1 pr-2 mr-2">
        <h3 className="text-primary font-bold text-sm">
          {totalPrice.toLocaleString('cs-CZ', { useGrouping: true })} Kč
          <span className="font-normal opacity-50">
            {' | '}
            trvání {totalTime.toLocaleString('cs-CZ', { useGrouping: true })} dny
          </span>
        </h3>
      </div>

      <div className="flex flex-row items-center space-x-2 border-r-2 border-black border-opacity-[.05] pr-2 mr-2">
        <ActionWrapper className="!text-primary">
          <ThemeSwitcher previewMode />
        </ActionWrapper>

        <BreakpointSwitcher state={other.currentBreakpoint} setState={other.setCurrentBreakpoint} />

        <ActionWrapper className="!font-bold">
          <CircularProgressbar
            value={progress}
            text={`${Math.round(progress)}%`}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: '#72E790',
              textColor: '#29349A',
              trailColor: 'transparent',
              textSize: '22px',
            })}
          />
        </ActionWrapper>
      </div>

      <div className="flex flex-row items-center space-x-2 mr-2">
        <ActionWrapper onClick={() => exportToJson(stateData, domain)}>
          <Download size={24} className="text-primary" />
        </ActionWrapper>

        <Button
          className={`${
            !progressComplete ? 'bg-gray-200' : 'bg-[#72E790]'
          } !px-4 h-10 !text-sm rounded-full !normal-case`}
          disabled={!progressComplete}
          onClick={() => {
            // Handle completion button click here
          }}
        >
          {!progressComplete ? 'Něco chybí' : 'Dokončit'}
        </Button>
      </div>
    </ActionBar>
  )
}
