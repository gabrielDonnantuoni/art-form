'use client'

import React, { useEffect, useState } from 'react'

import { Input } from '~/components/ui/input'
import { twm } from '~/lib/utils'

// options={[
//   { label: 'Joana', value: 'joana' },
//   { label: 'Gabriel', value: 'gabriel' },
//   {
//     label: 'Palavra muito grande',
//     value: 'palavra muito grande',
//   },
// ]}

interface Option {
  label: string
  value: string
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: NonEmptyArray<Option>
}

const Autocomplete = React.forwardRef(function Autocomplete(
  { options, className }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const [currentOption, setCurrentOption] = useState<Option | undefined>(
    undefined,
  )
  const [showOptions, setShowOptions] = useState(false)
  const [cursor, setCursor] = useState(-1)
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options)
  const [value, setValue] = useState('')

  function select(option: Option) {
    setCurrentOption(option)
    setShowOptions(false)
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setValue(evt.target.value)
    setCursor(-1)
    setShowOptions(true)
  }

  function handleBlur() {
    setShowOptions(false)
    setCursor(-1)

    if (value !== currentOption?.label) {
      setValue(currentOption?.label ?? '')
    }
  }

  const navHandlers = {
    ArrowUp: () => {
      setCursor((c) => (c > 0 ? c - 1 : c))
    },
    ArrowDown: () => {
      setCursor((c) => (c < filteredOptions.length - 1 ? c + 1 : c))
    },
    Enter: () => {
      if (cursor >= 0 && cursor < filteredOptions.length) {
        select(filteredOptions[cursor])
      }
    },
    Escape: () => {
      handleBlur()
    },
  } as Record<string, (() => void) | undefined>

  function handleNav(evt: React.KeyboardEvent<HTMLInputElement>) {
    navHandlers[evt.key]?.()
  }

  useEffect(() => {
    if (value) {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase()),
      )
      setFilteredOptions(filtered)
    } else {
      setFilteredOptions(options)
    }
  }, [options, value])

  useEffect(() => {
    setValue(currentOption?.label ?? '')
  }, [currentOption])

  return (
    <div className="relative w-full">
      <Input
        type="text"
        className={className}
        value={value}
        onChange={handleChange}
        onFocus={() => setShowOptions(false)}
        onKeyDown={handleNav}
        onClick={() => setShowOptions(true)}
        onBlur={handleBlur}
        ref={ref}
        // {...props}
      />

      <ul
        className={twm(
          'absolute z-10 w-full rounded-lg bg-white shadow-lg',
          !showOptions && 'hidden',
        )}
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => {
            return (
              <li
                className={twm(
                  'bg:white z-20 px-4 py-2 hover:bg-gray-100',
                  cursor === index && 'bg-gray-100',
                )}
                key={option.value}
                onMouseDown={() => select(option)}
                onMouseEnter={() => setCursor(index)}
              >
                {option.label}
              </li>
            )
          })
        ) : (
          <li className="px-4 py-2 text-gray-500">
            Nenhum valor corresponde à pesquisa
          </li>
        )}
      </ul>
    </div>
  )
})
Autocomplete.displayName = 'Autocomplete'

export { Autocomplete }
