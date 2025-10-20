import {Platform} from 'react-native'

import {tokens} from '#/alf'
import {darkPalette} from '#/alf/themes'
import {fontWeight} from '#/alf/tokens'
import {colors} from './styles'
import type {Theme} from './ThemeContext'

export const defaultTheme: Theme = {
  colorScheme: 'dark',
  palette: {
    default: {
      background: '#1F0B35',
      backgroundLight: '#1F0B35',
      text: darkPalette.white,
      textLight: darkPalette.contrast_700,
      textInverted: darkPalette.black,
      link: darkPalette.primary_500,
      border: darkPalette.contrast_100,
      borderDark: darkPalette.contrast_200,
      icon: darkPalette.contrast_500,

      // non-standard
    textVeryLight: darkPalette.contrast_400,
    replyLine: darkPalette.contrast_100,
    replyLineDot: darkPalette.contrast_200,
    unreadNotifBg: darkPalette.primary_25,
    unreadNotifBorder: darkPalette.primary_100,
    postCtrl: darkPalette.contrast_500,
    brandText: darkPalette.primary_500,
    emptyStateIcon: darkPalette.contrast_300,
    borderLinkHover: darkPalette.contrast_300,
    },
    primary: {
      background: '#1F0B35',
      backgroundLight: '#1F0B35',
      text: colors.white,
      textLight: colors.blue0,
      textInverted: colors.blue3,
      link: colors.blue0,
      border: colors.blue4,
      borderDark: colors.blue5,
      icon: colors.blue4,
    },
    secondary: {
      background: '#1F0B35',
      backgroundLight: '#1F0B35',
      text: colors.white,
      textLight: colors.green1,
      textInverted: colors.green4,
      link: colors.green1,
      border: colors.green4,
      borderDark: colors.green5,
      icon: colors.green4,
    },
    inverted: {
      background: '#1F0B35',
      backgroundLight: '#1F0B35',
      text: darkPalette.white,
      textLight: darkPalette.contrast_700,
      textInverted: darkPalette.black,
      link: darkPalette.primary_500,
      border: darkPalette.contrast_100,
      borderDark: darkPalette.contrast_200,
      icon: darkPalette.contrast_500,
    },
    error: {
      background: '#1F0B35',
      backgroundLight: '#1F0B35',
      text: colors.white,
      textLight: colors.red1,
      textInverted: colors.red3,
      link: colors.red1,
      border: colors.red4,
      borderDark: colors.red5,
      icon: colors.red4,
    },
  },
  shapes: {
    button: {
      // TODO
    },
    bigButton: {
      // TODO
    },
    smallButton: {
      // TODO
    },
  },
  typography: {
    '2xl-thin': {
      fontSize: 18,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    '2xl': {
      fontSize: 18,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    '2xl-medium': {
      fontSize: 18,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    '2xl-bold': {
      fontSize: 18,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    '2xl-heavy': {
      fontSize: 18,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.heavy,
    },
    'xl-thin': {
      fontSize: 17,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    xl: {
      fontSize: 17,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    'xl-medium': {
      fontSize: 17,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'xl-bold': {
      fontSize: 17,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'xl-heavy': {
      fontSize: 17,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.heavy,
    },
    'lg-thin': {
      fontSize: 16,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    lg: {
      fontSize: 16,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    'lg-medium': {
      fontSize: 16,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'lg-bold': {
      fontSize: 16,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'lg-heavy': {
      fontSize: 16,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.heavy,
    },
    'md-thin': {
      fontSize: 15,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    md: {
      fontSize: 15,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    'md-medium': {
      fontSize: 15,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'md-bold': {
      fontSize: 15,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'md-heavy': {
      fontSize: 15,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.heavy,
    },
    'sm-thin': {
      fontSize: 14,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    sm: {
      fontSize: 14,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    'sm-medium': {
      fontSize: 14,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'sm-bold': {
      fontSize: 14,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'sm-heavy': {
      fontSize: 14,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.heavy,
    },
    'xs-thin': {
      fontSize: 13,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    xs: {
      fontSize: 13,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    'xs-medium': {
      fontSize: 13,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'xs-bold': {
      fontSize: 13,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'xs-heavy': {
      fontSize: 13,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.heavy,
    },

    'title-2xl': {
      fontSize: 34,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'title-xl': {
      fontSize: 28,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.bold,
    },
    'title-lg': {
      fontSize: 22,
      fontWeight: fontWeight.bold,
    },
    title: {
      fontWeight: fontWeight.bold,
      fontSize: 20,
      letterSpacing: tokens.TRACKING,
    },
    'title-sm': {
      fontWeight: fontWeight.bold,
      fontSize: 17,
      letterSpacing: tokens.TRACKING,
    },
    'post-text': {
      fontSize: 16,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    'post-text-lg': {
      fontSize: 20,
      letterSpacing: tokens.TRACKING,
      fontWeight: fontWeight.normal,
    },
    'button-lg': {
      fontWeight: fontWeight.bold,
      fontSize: 18,
      letterSpacing: tokens.TRACKING,
    },
    button: {
      fontWeight: fontWeight.bold,
      fontSize: 14,
      letterSpacing: tokens.TRACKING,
    },
    mono: {
      fontSize: 14,
      fontFamily: Platform.OS === 'android' ? 'monospace' : 'Courier New',
    },
  },
}

export const darkTheme: Theme = {
  ...defaultTheme,
  colorScheme: 'dark',
  palette: {
    ...defaultTheme.palette,
    default: {
      background: '#1F0B35',
      backgroundLight: '#1F0B35',
      text: darkPalette.white,
      textLight: darkPalette.contrast_600,
      textInverted: darkPalette.black,
      link: darkPalette.primary_500,
      border: darkPalette.contrast_100,
      borderDark: darkPalette.contrast_200,
      icon: darkPalette.contrast_500,

      // non-standard
    textVeryLight: darkPalette.contrast_400,
    replyLine: darkPalette.contrast_200,
    replyLineDot: darkPalette.contrast_200,
    unreadNotifBg: darkPalette.primary_25,
    unreadNotifBorder: darkPalette.primary_100,
    postCtrl: darkPalette.contrast_500,
    brandText: darkPalette.primary_500,
    emptyStateIcon: darkPalette.contrast_300,
    borderLinkHover: darkPalette.contrast_300,
    },
    primary: {
      ...defaultTheme.palette.primary,
      textInverted: colors.blue2,
    },
    secondary: {
      ...defaultTheme.palette.secondary,
      textInverted: colors.green2,
    },
    inverted: {
      background: '#1F0B35',
      backgroundLight: '#1F0B35',
      text: darkPalette.black,
      textLight: darkPalette.contrast_700,
      textInverted: darkPalette.white,
      link: darkPalette.primary_500,
      border: darkPalette.contrast_100,
      borderDark: darkPalette.contrast_200,
      icon: darkPalette.contrast_500,
    },
  },
}

export const dimTheme: Theme = {
  ...darkTheme,
  // Keep dimTheme alias for compatibility but use dark palette values
  palette: {
    ...darkTheme.palette,
  },
}
