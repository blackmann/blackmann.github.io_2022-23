import React, { useRef } from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default function RequireDarkMode() {
  const {setColorMode} = useColorMode()

  React.useEffect(() => {
    setColorMode('dark')
  }, [setColorMode])

  return null;
}