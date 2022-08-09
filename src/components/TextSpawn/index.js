import styles from './TextSpawn.module.scss'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import clsx from 'clsx'

const UPPERCASE_A_CHAR_CODE = 65
const UPPERCASE_Z_CHAR_CODE = 90
const LOWERCASE_A_CHAR_CODE = 97
const LOWERCASE_Z_CHAR_CODE = 122
const NUMBER_0_CHAR_CODE = 48
const NUMBER_9_CHAR_CODE = 57

function _Character({ character, drop, index }) {
  const [start, setStart] = React.useState(UPPERCASE_A_CHAR_CODE)
  const [show, setShow] = React.useState(true)

  const { charCode } = useSpring({
    delay: index * 80,
    from: { charCode: start },
    to: { charCode: character.charCodeAt(0) },
    onRest() {
      setStart(character.charCodeAt(0))
      setShow(!drop)
    },
    onStart() {
      setShow(true)
    }
  })

  React.useEffect(() => {
    setStart((currentStart) => {
      if (/[a-zA-Z\d]/.test(character)) {
        // lowercase
        if (/[a-z]/.test(character)) {
          if (
            currentStart < LOWERCASE_A_CHAR_CODE ||
            currentStart > LOWERCASE_Z_CHAR_CODE
          ) {
            return LOWERCASE_A_CHAR_CODE
          }
        }

        // uppercase
        if (/[A-Z]/.test(character)) {
          if (
            currentStart < UPPERCASE_Z_CHAR_CODE ||
            currentStart > UPPERCASE_Z_CHAR_CODE
          ) {
            return UPPERCASE_A_CHAR_CODE
          }
        }

        // numbers
        if (/\d/.test(character)) {
          if (
            currentStart < NUMBER_0_CHAR_CODE ||
            currentStart > NUMBER_9_CHAR_CODE
          ) {
            return NUMBER_0_CHAR_CODE
          }
        }

        return currentStart
      }

      // Anything else, don't animate
      return character.charCodeAt(0)
    })
  }, [character, charCode])

  if (!show) {
    return null
  }

  return (
    <animated.span
      className={clsx(styles.TextSpawnCharacter, {
        [styles.DeadCharacter]: drop,
      })}
    >
      {charCode.to((char) => String.fromCharCode(char))}
    </animated.span>
  )
}

export default function TextSpawn({ children: text }) {
  const previousText = React.useRef()

  const characters = React.useMemo(() => {
    if (previousText.current?.length > text.length) {
      const extended = previousText.current.split('').map((character, index) => {
        return (
          text[index] ||
          (/[a-z]/.test(character)
            ? 'a'
            : /[A-Z]/.test(character)
            ? 'A'
            : character)
        )
      })

      previousText.current = text
      return extended
    }

    previousText.current = text
    return text.split('')
  }, [text])

  return characters.map((character, index) => (
    <_Character
      {...{ character, index }}
      drop={index >= text.length}
      key={index}
    />
  ))
}
