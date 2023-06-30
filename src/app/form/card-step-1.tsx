import PersonCircleOutlineSvg from '~/assets/person-circle-outline.svg'
import Image from 'next/image'

export default function CardStep1() {
  return (
    <div className="flex h-48 w-48 items-center justify-center rounded-[24px] border bg-gray-500 transition-colors hover:cursor-pointer hover:bg-red-700">
      <Image
        src={PersonCircleOutlineSvg}
        alt="Person circle outline svg"
        className="w-36 text-gray-100"
      />
    </div>
  )
}
