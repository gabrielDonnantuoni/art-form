import { artModelsAndRegistryTypes } from '~/data'

import Step1Card from './ui/step-1-card'
import Step1MainButton from './ui/step-1-main-button'
import Step1Submit from './ui/step-1-submit'

export default function FormStep1() {
  return (
    <div className="flex justify-center">
      <div className="flex max-h-[720px] max-w-5xl flex-wrap items-center justify-center gap-5 px-10 py-10 md:gap-10 md:px-28">
        {artModelsAndRegistryTypes.map(
          ({
            templateModel,
            registryTypeOptions,
            iconSrc,
            iconAlt,
            isOutOfDate,
          }) => (
            <Step1Card
              templateModelButton={
                <Step1MainButton
                  src={iconSrc}
                  alt={iconAlt}
                  templateModel={templateModel}
                  isOutOfDate={isOutOfDate}
                />
              }
              registryTypeButtons={registryTypeOptions.map((option) => (
                <Step1Submit
                  templateModel={templateModel}
                  registryType={option}
                  key={option}
                />
              ))}
              key={`${templateModel}-${String(isOutOfDate)}`}
            />
          ),
        )}
      </div>
    </div>
  )
}
