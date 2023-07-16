import { useContext } from 'react'
import { StepperContext } from '~/contexts/StepperContext'

export default function ParticipacaoFinalidade() {
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
            Participação
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['participacao'] || ''}
              name="participacao"
              placeholder="Participação"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Finalidade
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['finalidade'] || ''}
              name="finalidade"
              placeholder="Finalidade"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Empresa Contratada
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['empresaContratada'] || ''}
              name="empresaContratada"
              placeholder="Empresa Contratada"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Responsável Técnico
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['responsavelTecnico'] || ''}
              name="responsavelTecnico"
              placeholder="Responsável Técnico"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>

      <label
        htmlFor=""
        className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500"
      >
        Observação
      </label>
      <textarea
        name="observacao"
        id=""
        cols="1"
        rows="2"
        className="rounded-sm border border-gray-300 p-1"
      ></textarea>
    </div>
  )
}
