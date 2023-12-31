import { ARTFormContext } from '~/components/art-form/form-context'
import { ARTFormRoot } from '~/components/art-form/form-root'
import { StepperController } from '~/components/art-form/steper-controller'
import { Steps } from '~/components/art-form/steps'
import { Stepper } from '~/components/art-form/ui/stepper'

export default function Page() {
  return (
    <ARTFormContext>
      <main
        className="flex w-full flex-col sm:flex-row"
        style={{ height: 'calc(100% - 6rem)' }}
      >
        <Stepper />
        <div className="flex w-full flex-col items-center">
          <ARTFormRoot>
            <Steps />
          </ARTFormRoot>
          <StepperController />
        </div>
      </main>
    </ARTFormContext>
  )
}
