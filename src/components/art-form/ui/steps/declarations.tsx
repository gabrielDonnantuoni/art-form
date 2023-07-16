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
            Contratante
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['contratante'] || ''}
              name="contratante"
              placeholder="CPF/CNPJ"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Proprietário
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['proprietario'] || ''}
              name="proprietario"
              placeholder="CPF/CNPJ"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Número de Contrato
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['numeroContrato'] || ''}
              name="numeroContrato"
              placeholder="000.000.000.000"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Código de Obra Pública
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['codigoObra'] || ''}
              name="codigoObra"
              placeholder="000.000.000.000"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Inicio
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['inicio'] || ''}
              name="inicio"
              type="date"
              placeholder=""
              className="w-full appearance-none bg-slate-300 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Término
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['termino'] || ''}
              name="termino"
              type="date"
              placeholder=""
              className="w-full appearance-none bg-slate-300 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Celebrado em
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white">
            <input
              onChange={handleChange}
              value={userData['celebrado'] || ''}
              name="celebrado"
              type="date"
              placeholder=""
              className="w-full appearance-none bg-slate-300 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
      <h2 className="mt-2">Endereço da Obra</h2>
      <div className="flex flex-wrap">
        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            cep
          </div>
          <div className="border-bottom-2 my-2 flex rounded bg-white">
            <input
              onChange={handleChange}
              value={userData['inicio'] || ''}
              name="inicio"
              type="text"
              placeholder="00 000-000"
              className="w-full appearance-none  border-b-2 border-gray-600 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            número
          </div>
          <div className="border-bottom-2 my-2 flex rounded bg-white">
            <input
              onChange={handleChange}
              value={userData['termino'] || ''}
              name="termino"
              type="text"
              placeholder="N° "
              className="w-full appearance-none border-b-2 border-gray-600 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="leading-2 mt-3 h-4 text-xs font-bold uppercase text-gray-500">
            {' '}
            Complemento
          </div>
          <div className="border-bottom-2 my-2 flex rounded bg-white">
            <input
              onChange={handleChange}
              value={userData['celebrado'] || ''}
              name="celebrado"
              type="text"
              placeholder="Casa ou Apto"
              className="w-full appearance-none border-b-2 border-gray-600 p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <input type="checkbox" />{' '}
        <span className="text-xs">
          Declaro que estou cumprindo as regras de acessibilidade previstas nas
          normas técnicas da ABNT, na legislação específica e no decreto n.
          5296/2004.
        </span>
      </div>

      <div className="mt-2">
        <input type="checkbox" />{' '}
        <span className="text-xs">
          Cláusula Compromissória: Qualquer conflito ou litígio originado do
          presente contrato, bem como sua interpretação ou execução, será
          resolvido por arbitragem, de acordo com a Lei no. 9.307, de 23 de
          setembro de 1996, por meio do Centro de Mediação e Arbitragem - CMA
          vinculado ao Crea-CE, nos termos do respectivo regulamento de
          arbitragem que, expressamente, as partes declaram concordar.
        </span>
      </div>
    </div>
  )
}
