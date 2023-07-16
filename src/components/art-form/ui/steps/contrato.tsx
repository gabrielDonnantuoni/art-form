import { useContext } from 'react'
import { StepperContext } from '~/contexts/StepperContext'

export default function Details() {
  const { userData, setUserData } = useContext(StepperContext)
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Nível atividade
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['nivelAtividade'] || ''}
              name="nivelAtividade"
              placeholder="Nível Atividade"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Atividade Profissional
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['atividadeProfissional'] || ''}
              name="atividadeProfissional"
              placeholder="Atividade Profissional"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Atividade
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['atividade'] || ''}
              name="atividade"
              placeholder="Atividade"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Unidade de Medida
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['unidadeMedida'] || ''}
              name="unidadeMedida"
              placeholder="Unidade de Medida"
              className="w-full appearance-none bg-slate-300 p-1 px-2 text-gray-900 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Quantidade
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['quantidade'] || ''}
              name="quantidade"
              placeholder="Quantidade"
              className="w-full appearance-none bg-slate-300 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="my-2 mt-9 flex w-16 rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['unidadeMedida'] || ''}
              name="unidadeMedida"
              placeholder="UN"
              type="number"
              className="w-full appearance-none bg-slate-300 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
