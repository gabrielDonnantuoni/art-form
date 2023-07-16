import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container mb-8 mb-8 mt-4 mt-4 flex justify-around">
      {/* back button */}
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white px-4 py-2 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white ${
          currentStep === 1 ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        Voltar
      </button>

      {/* next button */}
      <button
        onClick={() => handleClick('next')}
        className="cursor-pointer rounded-xl border-2 bg-orange-500 px-4 py-2 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
      </button>
    </div>
  )
}

export default StepperControl
