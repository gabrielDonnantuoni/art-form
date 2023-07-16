import React from 'react'

export default function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-green-400">
          <svg
            className="h-24 w-24"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Parabéns!
        </div>
        <div className="text-center text-lg font-semibold text-gray-500">
          Sua ART foi criada com sucesso.
        </div>
        <a href="/arts/nova" className="mt-10">
          <button className="h-10 rounded-lg border border-gray-300 px-5 text-green-700 transition-colors duration-150 hover:text-green-100 hover:text-green-500">
            Voltar para Inicio
          </button>
        </a>
      </div>
    </div>
  )
}
