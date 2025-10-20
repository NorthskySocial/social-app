import React from 'react'
import {StyleSheet, type TextProps} from 'react-native'
import Svg, {
  Defs,
  LinearGradient,
  Path,
  type PathProps,
  Stop,
  type SvgProps,
} from 'react-native-svg'

import {colors} from '#/lib/styles'

const _ratio = 512 / 512

type Props = {
  fill?: PathProps['fill']
  style?: TextProps['style']
} & Omit<SvgProps, 'style'>

export const Logo = React.forwardRef<typeof Svg, Props>(function LogoImpl(props: Props, ref) {
  const {fill, ...rest} = props
  const gradient = fill === 'sky'
  const styles = StyleSheet.flatten(props.style)
  const _fill = gradient ? 'url(#sky)' : fill || styles?.color || colors.blue3
  const _size = parseInt(String(rest.width ?? 32), 10)

  // const isKawaii = useKawaiiMode()

  // if (isKawaii) {
  //   return (
  //     <Image
  //       source={
  //         size > 100
  //           ? require('../../../assets/kawaii.png')
  //           : require('../../../assets/kawaii_smol.png')
  //       }
  //       accessibilityLabel="Bluesky"
  //       accessibilityHint=""
  //       accessibilityIgnoresInvertColors
  //       style={[{height: size, aspectRatio: 1.4}]}
  //     />
  //   )
  // }

  return (
    <Svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1024 1024"
    {...props}
    ref={ref}
  >
    <Defs>
      <LinearGradient
        id="a"
        x1={564.17}
        y1={22.4}
        x2={374.54}
        y2={1187.29}
        gradientTransform="matrix(1 0 0 1.03 31.9 91.01)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#2affba" />
        <Stop offset={0.02} stopColor="#31f4bd" />
        <Stop offset={0.14} stopColor="#53bccc" />
        <Stop offset={0.25} stopColor="#718ada" />
        <Stop offset={0.37} stopColor="#8a5fe5" />
        <Stop offset={0.49} stopColor="#9f3def" />
        <Stop offset={0.61} stopColor="#af22f6" />
        <Stop offset={0.74} stopColor="#bb0ffb" />
        <Stop offset={0.87} stopColor="#c204fe" />
        <Stop offset={1} stopColor="#c400ff" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={554.29}
        y1={20.79}
        x2={364.65}
        y2={1185.68}
        xlinkHref="#a"
      />
      <LinearGradient
        id="c"
        x1={561.1}
        y1={21.9}
        x2={371.47}
        y2={1186.79}
        xlinkHref="#a"
      />
      <LinearGradient
        id="d"
        x1={530.57}
        y1={16.93}
        x2={340.93}
        y2={1181.82}
        xlinkHref="#a"
      />
    </Defs>
    <Path
      d="m275.87 880.64 272-184.16 120.79 114 78.55-56.88 184.6 125.1a485.5 485.5 0 0 0 55.81-138.27c-64.41-21.42-127-48.15-185.92-73.32-97-41.44-188.51-80.52-253.69-80.52-59.57 0-71.53 18.85-89.12 55-16.89 34.55-37.84 77.6-139.69 77.6-81.26 0-159.95-29.93-243.27-61.61-17.07-6.5-34.57-13.14-52.49-19.69A486.06 486.06 0 0 0 95.19 884l91.29-62.16Z"
      fill="url(#a)"
    />
    <Path
      d="M295.26 506.52c53.69 0 64.49-17.36 80.41-50.63 15.46-32.33 34.7-72.56 128.36-72.56 75 0 154.6 33.2 246.78 71.64 74.85 31.21 156.89 65.34 241 81.63a485.6 485.6 0 0 0-64.23-164.85c-108.88-6-201.82-43.35-284.6-76.69-66.77-26.89-129.69-52.22-182.84-52.22-46.88 0-56.43 15.74-70.55 45.89-13.41 28.65-31.79 67.87-118.24 67.87-44.25 0-90.68-13.48-141-33.11A488.3 488.3 0 0 0 62.86 435.7c8.3 3.38 16.55 6.74 24.68 10.08 76.34 31.22 148.3 60.74 207.72 60.74"
        fill="url(#b)"
    />
    <Path
      d="M319.2 687.81c61.24 0 73.38-19.09 91.18-55.66 16.7-34.28 37.48-76.95 137.58-76.95 81.4 0 174.78 39.89 282.9 86.09 52.19 22.29 107.38 45.84 163.42 65.43a483 483 0 0 0 2.72-136.5C898.41 554.4 806 516 722.27 481.05c-81.88-34.14-159.08-66.33-218.27-66.33-53.25 0-64 17.29-79.84 50.42-15.51 32.42-34.8 72.77-128.93 72.77-75.08 0-153.29-32-236.08-66l-8.91-3.64A487 487 0 0 0 24 601.68c27.31 9.55 53.55 19.52 79 29.19 80.24 30.55 149.61 56.94 216.2 56.94"
      fill="url(#c)"
    />
    <Path
      d="M341 279.65c13.49-28.78 31.95-68.19 119.16-68.19 68.59 0 137.73 27.84 210.92 57.32 70.14 28.22 148.13 59.58 233.72 69.37C815.77 218 673 140 511.88 140c-141.15 0-268.24 59.92-357.45 155.62 44 17.32 84.15 29.6 116.89 29.6 46.24 0 55.22-14.79 69.68-45.57"
      fill="url(#d)"
    />
  </Svg>

  )
})
