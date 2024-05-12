import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string
      colorPrice: string

      blue1: string
      blue2: string
      brown: string
      background: string
      backgroundCard: string
      textColor: string
      colorBorder: string
    }
  }
}