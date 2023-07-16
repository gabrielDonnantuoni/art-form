'use client'

import { useState } from 'react'

import FormStep1 from '~/components/art-form/step-1'
import Stepper from '~/components/art-form/ui/stepper'
import StepperControl from '~/components/art-form/ui/stepper-control'
import Contrato from '~/components/art-form/ui/steps/contrato'
import Declarations from '~/components/art-form/ui/steps/declarations'
import Final from '~/components/art-form/ui/steps/final'
import ParticipacaoFinalidade from '~/components/art-form/ui/steps/participacao-finalidade'
import { StepperContext } from '~/contexts/StepperContext'

// import Payment from '~/components/art-form/ui/steps/Payment'

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])
  const steps = [
    'Inicio',
    'Participação e Finalidade',
    'Contrato',
    'Declarações',
    'Complete',
  ]

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FormStep1 />
      case 2:
        return <ParticipacaoFinalidade />
      case 3:
        return <Contrato />
      case 4:
        return <Declarations />
      case 5:
        return <Final />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep

    direction === 'next' ? newStep++ : newStep--
    //click if steps are whitin bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }
  return (
    <div className="bg-white-50 mx-auto rounded-2xl pb-2 shadow-xl">
      {/* Stepper */}
      <div className="horizontal container mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* Display Components */}
      <div className="my-10 p-10">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation controls*/}
      {currentStep != steps.length && currentStep != 1 && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  )
}
