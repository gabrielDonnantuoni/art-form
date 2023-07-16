import React, { useEffect, useState, useRef } from 'react'

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef()

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0

    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        }
        count++
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        }
        count++
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: false,
          completed: false,
        }
        count++
      }
    }
    return newSteps
    //
  }
  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        },
      ),
    )

    stepRef.current = stepsState
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index != newStep.length - 1
            ? 'flex w-full items-center'
            : 'flex items-center'
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 py-3 transition duration-500 ease-in-out ${
              step.selected
                ? 'border border-blue-600 bg-blue-600 font-bold text-white'
                : ''
            }`}
          >
            {/* Display number */}
            {step.completed ? (
              <span className="text-xl font-bold text-white">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 mt-16 w-32 text-center text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {/* Display description */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? 'border-blue-600' : 'border-gray-300'
          }`}
        >
          {/* Display line */}
        </div>
      </div>
    )
  })

  return (
    <div className="mx-1 flex items-center justify-between p-0">
      {displaySteps}
    </div>
  )
}

export default Stepper
