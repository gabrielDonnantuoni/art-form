'use client'

import { X } from 'lucide-react'
import { useEffect, useState, useCallback, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input } from '~/components/ui/input'
import { twm } from '~/lib/utils'

import { Button } from './button'

interface Option {
  label: string
  value: string
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: NonEmptyArray<Option | string>
  name: string
  value: string
  wrapperClassName?: string
}

const Autocomplete = forwardRef<HTMLInputElement, Props>(function (
  { options, value, onChange, onBlur, name, wrapperClassName, ...props },
  ref,
) {
  const { setValue: setInputValue } = useFormContext()

  const [currentOption, setCurrentOption] = useState<
    Option | string | undefined
  >(undefined)
  const [showOptions, setShowOptions] = useState(false)
  const [cursor, setCursor] = useState(-1)
  const [filteredOptions, setFilteredOptions] =
    useState<(Option | string)[]>(options)

  const select = useCallback(
    function (option: Option | string) {
      setCurrentOption(option)
      setShowOptions(false)
    },
    [setCurrentOption, setShowOptions],
  )

  const getOptionLabel = useCallback(function (option?: Option | string) {
    if (!option) {
      return ''
    }
    if (typeof option === 'string') {
      return option
    }
    return option.label
  }, [])

  const getOptionValue = useCallback(function (option?: Option | string) {
    if (!option) {
      return ''
    }
    if (typeof option === 'string') {
      return option
    }
    return option.value
  }, [])

  const setValue = useCallback(
    function (
      option?: Option | string,
      options?: Partial<{
        shouldValidate: boolean
        shouldDirty: boolean
        shouldTouch: boolean
      }>,
    ) {
      setInputValue(name, getOptionLabel(option), options)
    },
    [setInputValue, name, getOptionLabel],
  )

  const handleChange = useCallback(
    function (evt: React.ChangeEvent<HTMLInputElement>) {
      onChange?.(evt)
      setCursor(-1)
      setShowOptions(true)
    },
    [onChange, setCursor, setShowOptions],
  )

  const blur = useCallback(
    function () {
      setShowOptions(false)
      setCursor(-1)

      if (value !== getOptionLabel(currentOption)) {
        setValue(currentOption)
      }
    },
    [value, currentOption, setValue, getOptionLabel],
  )

  const handleClear = useCallback(
    function () {
      setValue('', { shouldValidate: true, shouldTouch: true })
      setCurrentOption(undefined)
    },
    [setValue],
  )

  function handleBlur(evt: React.FocusEvent<HTMLInputElement>) {
    onBlur?.(evt)
    blur()
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
      blur()
    },
  } as Record<string, (() => void) | undefined>

  function handleNav(evt: React.KeyboardEvent<HTMLInputElement>) {
    navHandlers[evt.key]?.()
  }

  useEffect(() => {
    if (value) {
      const filtered = options.filter((option) =>
        getOptionLabel(option).toLowerCase().includes(value.toLowerCase()),
      )
      setFilteredOptions(filtered)
    } else {
      setFilteredOptions(options)
    }
  }, [options, value, getOptionLabel])

  useEffect(() => {
    if (currentOption) {
      setValue(currentOption, { shouldDirty: true })
    }
  }, [currentOption, name, setValue, getOptionLabel])

  return (
    <div className={twm('relative w-full', wrapperClassName)}>
      <Input
        {...props}
        type="text"
        value={value}
        name={name}
        onChange={handleChange}
        onFocus={() => setShowOptions(true)}
        onClick={() => setShowOptions(true)}
        onBlur={handleBlur}
        onKeyDown={handleNav}
        ref={ref}
      />
      {value && (
        <Button
          className="absolute right-2 top-1/2 z-10 h-fit -translate-y-1/2 border-none bg-white p-1"
          type="button"
          onClick={handleClear}
        >
          <X className="h-4 w-4 text-gray-500 transition-colors hover:text-red-500" />
        </Button>
      )}

      <ul
        className={twm(
          'absolute z-10 max-h-[320px] w-full overflow-y-auto rounded-lg shadow-lg sm:max-h-[420px]',
          !showOptions && 'hidden',
        )}
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => {
            return (
              <li
                className={twm(
                  'z-20 bg-white px-4 py-2 hover:bg-gray-100',
                  cursor === index && 'bg-gray-100',
                )}
                key={getOptionValue(option)}
                onMouseDown={() => select(option)}
                onMouseEnter={() => setCursor(index)}
              >
                {getOptionLabel(option)}
              </li>
            )
          })
        ) : (
          <li className="bg-white px-4 py-2 text-gray-500">
            Nenhum valor corresponde à pesquisa
          </li>
        )}
      </ul>
    </div>
  )
})
Autocomplete.displayName = 'Autocomplete'

export { Autocomplete }
