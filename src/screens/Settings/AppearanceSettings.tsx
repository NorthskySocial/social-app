import React, {useCallback, useState} from 'react'
import Animated, {
  FadeInUp,
  FadeOutUp,
  LayoutAnimationConfig,
  LinearTransition,
} from 'react-native-reanimated' //REMOVED FOR ESLINT ERRORS
import {msg, Trans} from '@lingui/macro'
import {useLingui} from '@lingui/react'

import {IS_INTERNAL} from '#/lib/app-info'
import {CommonNavigatorParams, NativeStackScreenProps} from '#/lib/routes/types'
import {useGate} from '#/lib/statsig/statsig'
import {isNative} from '#/platform/detection'
import {useSetThemePrefs, useThemePrefs} from '#/state/shell'
import {SettingsListItem as AppIconSettingsListItem} from '#/screens/Settings/AppIconSettings/SettingsListItem'
import {atoms as a, native, useAlf, useTheme} from '#/alf'
import {View, TextInput, Button as RNButton} from 'react-native' 
import * as ToggleButton from '#/components/forms/ToggleButton'
import {Props as SVGIconProps} from '#/components/icons/common'
import {Moon_Stroke2_Corner0_Rounded as MoonIcon} from '#/components/icons/Moon'
import {Phone_Stroke2_Corner0_Rounded as PhoneIcon} from '#/components/icons/Phone'
import {TextSize_Stroke2_Corner0_Rounded as TextSize} from '#/components/icons/TextSize'
import {TitleCase_Stroke2_Corner0_Rounded as Aa} from '#/components/icons/TitleCase'
import * as Layout from '#/components/Layout'
import {Text} from '#/components/Typography'
import * as SettingsList from './components/SettingsList'

type Props = NativeStackScreenProps<CommonNavigatorParams, 'AppearanceSettings'>
export function AppearanceSettingsScreen({}: Props) {
  const alf = useAlf()
  const t = alf.theme
  const [borderColor, setBorderColor] = useState(t.atoms.border_contrast_medium.borderColor)
  const [cardBgColor, setCardBgColor] = useState(t.atoms.bg_contrast_100.backgroundColor)
  const [inputTextColor, setInputTextColor] = useState(t.atoms.text.color)
  const [headerBgColor, setHeaderBgColor] = useState(t.atoms.bg_contrast_50.backgroundColor)
  const colorInputStyle = [
    a.flex_1,
    a.py_md,
    a.text_md,
    t.atoms.text,
    {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: t.palette.contrast_400,
      backgroundColor: t.palette.contrast_200, // dimmed background
      paddingHorizontal: 12,
      marginVertical: 4,
    },
  ]
  // Local state for color inputs
  const [bgColor, setBgColor] = useState(t.atoms.bg.backgroundColor)
  const [textColor, setTextColor] = useState(t.atoms.text.color)
  const [accentColor, setAccentColor] = useState('#9A45EC')
  const [hoverColor, setHoverColor] = useState(t.atoms.bg_contrast_25.backgroundColor)

  // Example: update theme context (replace with your actual theme update logic)
  const applyTheme = () => {
    if (alf.setCustomTheme) {
      alf.setCustomTheme({
        ...t,
        atoms: {
          ...t.atoms,
          bg: { backgroundColor: bgColor },
          text: { color: textColor },
          bg_hover: { backgroundColor: hoverColor },
          border_contrast_medium: { borderColor: borderColor },
          card: { backgroundColor: cardBgColor },
          input_text: { color: inputTextColor },
          header: { backgroundColor: headerBgColor },
        },
        palette: {
          ...t.palette,
          primary_500: accentColor,
        },
      })
    }
  }

  const resetTheme = () => {
    setBgColor('#1F0B35')
    setTextColor('#fff')
    setAccentColor('#9A45EC')
    setHoverColor('#1A062E')
  }
  const {_} = useLingui()
  const {fonts} = useAlf()
  const gate = useGate()

  const {colorMode, darkTheme} = useThemePrefs()
  const {setColorMode, setDarkTheme} = useSetThemePrefs()

  const onChangeAppearance = useCallback(
    (keys: string[]) => {
      const appearance = keys.find(key => key !== colorMode) as
        | 'system'
        | 'light'
        | 'dark'
        | undefined
      if (!appearance) return
      setColorMode(appearance)
    },
    [setColorMode, colorMode],
  )

  const onChangeDarkTheme = useCallback(
    (keys: string[]) => {
      const theme = keys.find(key => key !== darkTheme) as
        | 'dim'
        | 'dark'
        | undefined
      if (!theme) return
      setDarkTheme(theme)
    },
    [setDarkTheme, darkTheme],
  )

  const onChangeFontFamily = useCallback(
    (values: string[]) => {
      const next = values[0] === 'system' ? 'system' : 'theme'
      fonts.setFontFamily(next)
    },
    [fonts],
  )

  const onChangeFontScale = useCallback(
    (values: string[]) => {
      const next = values[0] || ('0' as any)
      fonts.setFontScale(next)
    },
    [fonts],
  )

  return (
    <LayoutAnimationConfig skipExiting skipEntering>
      <Layout.Screen testID="preferencesThreadsScreen">
        <Layout.Header.Outer>
          <Layout.Header.BackButton />
          <Layout.Header.Content>
            <Layout.Header.TitleText>
              <Trans>Appearance</Trans>
            </Layout.Header.TitleText>
          </Layout.Header.Content>
          <Layout.Header.Slot />
        </Layout.Header.Outer>
        <Layout.Content>
          <SettingsList.Container>
            <View style={{padding: 16}}>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 12}}>Customize Theme Colors</Text>
              <Text>Background Color (Broken with scrolling right now)</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                <TextInput
                  value={bgColor}
                  onChangeText={setBgColor}
                  style={colorInputStyle}
                  placeholder="#1F0B35"
                  placeholderTextColor={t.palette.contrast_500}
                  autoCapitalize="none"
                />
                <View style={{width: 28, height: 28, marginLeft: 8, borderRadius: 6, borderWidth: 1, borderColor: '#ccc', backgroundColor: bgColor}} />
              </View>
              <Text>Border Color (sets borders in menus)</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                <TextInput
                  value={borderColor}
                  onChangeText={setBorderColor}
                  style={colorInputStyle}
                  placeholder="#0E031D"
                  placeholderTextColor={t.palette.contrast_500}
                  autoCapitalize="none"
                />
                <View style={{width: 28, height: 28, marginLeft: 8, borderRadius: 6, borderWidth: 1, borderColor: borderColor, backgroundColor: borderColor}} />
              </View>
              <Text>Text Color (doesn't affect greys yet)</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                <TextInput
                  value={textColor}
                  onChangeText={setTextColor}
                  style={colorInputStyle}
                  placeholder="#fff"
                  placeholderTextColor={t.palette.contrast_500}
                  autoCapitalize="none"
                />
                <View style={{width: 28, height: 28, marginLeft: 8, borderRadius: 6, borderWidth: 1, borderColor: '#ccc', backgroundColor: textColor}} />
              </View>
              <Text>Accent Color</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                <TextInput
                  value={accentColor}
                  onChangeText={setAccentColor}
                  style={colorInputStyle}
                  placeholder="#6899D6"
                  placeholderTextColor={t.palette.contrast_500}
                  autoCapitalize="none"
                />
                <View style={{width: 28, height: 28, marginLeft: 8, borderRadius: 6, borderWidth: 1, borderColor: '#ccc', backgroundColor: accentColor}} />
              </View>
              <View style={{flexDirection: 'row', gap: 12, marginTop: 12}}>
                <View style={{flex: 1}}>
                  <RNButton
                    title="Apply"
                    onPress={applyTheme}
                    color={accentColor}
                  />
                </View>
                <View style={{flex: 1}}>
                  <RNButton
                    title="Reset"
                    onPress={resetTheme}
                    color={accentColor}
                  />
                </View>
              </View>
            </View>
          </SettingsList.Container>
        </Layout.Content>
      </Layout.Screen>
    </LayoutAnimationConfig>
  )
}

// --- Ensure the function is closed before the next function starts ---

export function AppearanceToggleButtonGroup({
  title,
  description,
  icon: Icon,
  items,
  values,
  onChange,
}: {
  title: string
  description?: string
  icon: React.ComponentType<SVGIconProps>
  items: {
    label: string
    name: string
  }[]
  values: string[]
  onChange: (values: string[]) => void
}) {
  const t = useTheme()
  return (
    <>
      <SettingsList.Group contentContainerStyle={[a.gap_sm]} iconInset={false}>
        <SettingsList.ItemIcon icon={Icon} />
        <SettingsList.ItemText>{title}</SettingsList.ItemText>
        {description && (
          <Text
            style={[
              a.text_sm,
              a.leading_snug,
              t.atoms.text_contrast_medium,
              a.w_full,
            ]}>
            {description}
          </Text>
        )}
        <ToggleButton.Group label={title} values={values} onChange={onChange}>
          {items.map(item => (
            <ToggleButton.Button
              key={item.name}
              label={item.label}
              name={item.name}>
              <ToggleButton.ButtonText>{item.label}</ToggleButton.ButtonText>
            </ToggleButton.Button>
          ))}
        </ToggleButton.Group>
      </SettingsList.Group>
    </>
  )
}
