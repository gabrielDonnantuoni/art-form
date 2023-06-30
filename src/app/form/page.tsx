import CardStep1 from './card-step-1'

export default function FormPage() {
  return (
    <div className="flex justify-center">
      <div className="flex max-h-[720px] max-w-5xl flex-wrap items-center justify-center gap-5 px-28 py-10">
        <CardStep1 />
        <CardStep1 />
        <CardStep1 />
        <CardStep1 />
      </div>
    </div>
  )
}
