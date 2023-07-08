import { artModelsAndRegistryTypes } from '~/data'

import Step1CardPopover from './ui/step-1-card-popover'

export default function FormStep1() {
  return (
    <div className="flex justify-center">
      <div className="flex max-h-[720px] max-w-5xl flex-wrap items-center justify-center gap-5 px-20 py-10 md:px-28">
        {artModelsAndRegistryTypes.map(
          ({
            templateModel,
            registryTypeOptions,
            iconSrc,
            iconAlt,
            isOutOfDate,
          }) => (
            <Step1CardPopover
              src={iconSrc}
              alt={iconAlt}
              templateModel={templateModel}
              registryTypeOptions={registryTypeOptions}
              isOutOfDate={isOutOfDate}
              key={`${templateModel}-${String(isOutOfDate)}`}
            />
          ),
        )}
      </div>
    </div>
  )
}
