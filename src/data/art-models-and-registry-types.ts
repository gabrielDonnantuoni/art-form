import cargoEFuncaoFESvg from '~/assets/step-1/cargo-e-funcao-fe.svg'
import cargoEFuncaoSvg from '~/assets/step-1/cargo-e-funcao.svg'
import multiplaMensalFESvg from '~/assets/step-1/multipla-mensal-fe.svg'
import multiplaMensalSvg from '~/assets/step-1/multipla-mensal.svg'
import obraEServicoFESvg from '~/assets/step-1/obra-e-servico-fe.svg'
import obraEServicoSvg from '~/assets/step-1/obra-e-servico.svg'
import receituarioAgronomicoSvg from '~/assets/step-1/receituario-agronomico.svg'

export const artModelsAndRegistryTypes = [
  {
    iconSrc: obraEServicoSvg as string,
    iconAlt:
      'Pessoal com capecete de engenheiro e engrenagem no ombro esquerdo',
    templateModel: 'Obra e serviços',
    isOutOfDate: false,
    registryTypeOptions: [
      'Inicial',
      'Complementação de prazo',
      'Substituição',
      'Complementar',
    ],
  },
  {
    iconSrc: cargoEFuncaoSvg as string,
    iconAlt: 'organograma de uma empresa',
    templateModel: 'Cargo e função',
    isOutOfDate: false,
    registryTypeOptions: [
      'Inicial',
      'Complementação de prazo',
      'Substituição',
      'Complementar',
    ],
  },
  {
    iconSrc: multiplaMensalSvg as string,
    iconAlt: 'calendário com "@" no canto inferior direito',
    templateModel: 'Multipla mensal',
    isOutOfDate: false,
    registryTypeOptions: [
      'Inicial',
      'Complementação de prazo',
      'Substituição',
      'Complementar',
    ],
  },
  {
    iconSrc: receituarioAgronomicoSvg as string,
    iconAlt: 'engrenagem com planta no centro',
    templateModel: 'Receituário agronômico',
    isOutOfDate: false,
    registryTypeOptions: [
      'Inicial',
      'Complementação de prazo',
      'Substituição',
      'Complementar',
    ],
  },
  {
    iconSrc: obraEServicoFESvg as string,
    iconAlt: 'pessoa carregando um carrinho de mão',
    templateModel: 'Regularização de obras e serviços',
    isOutOfDate: true,
    registryTypeOptions: [
      'Inicial',
      'Complementação de prazo',
      'Substituição',
      'Complementar',
    ],
  },
  {
    iconSrc: cargoEFuncaoFESvg as string,
    iconAlt: 'engrenagem com pessoa de gravata no centro',
    templateModel: 'Cargo e função',
    isOutOfDate: true,
    registryTypeOptions: [
      'Inicial',
      'Complementação de prazo',
      'Substituição',
      'Complementar',
    ],
  },
  {
    iconSrc: multiplaMensalFESvg as string,
    iconAlt: 'três folhas preenchidas agrupadas',
    templateModel: 'Multipla mensal',
    isOutOfDate: true,
    registryTypeOptions: [
      'Inicial',
      'Complementação de prazo',
      'Substituição',
      'Complementar',
    ],
  },
]
