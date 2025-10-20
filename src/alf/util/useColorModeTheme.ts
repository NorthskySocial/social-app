import React from 'react'
import {isWeb} from '#/platform/detection'
import {dark} from '#/alf/themes'
import {ThemeName} from '#/alf/types'

export function useColorModeTheme(): ThemeName {
  const theme: ThemeName = 'dark'
  React.useLayoutEffect(() => {
    updateDocument(theme)
  }, [])

  return theme
}

export function useThemeName(): ThemeName {
  return 'dark'
}

function updateDocument(theme: ThemeName) {
  // @ts-ignore web only
  if (isWeb && typeof window !== 'undefined') {
    // @ts-ignore web only
    const html = window.document.documentElement
    // @ts-ignore web only
    const meta = window.document.querySelector('meta[name="theme-color"]')

    html.className = html.className.replace(/theme--\w+/g, '')
    html.classList.add('theme--dark')
    meta?.setAttribute('content', getBackgroundColor())
  }
}

export function getBackgroundColor(): string {
  return dark.atoms.bg.backgroundColor
}
