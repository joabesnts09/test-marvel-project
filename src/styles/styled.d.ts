import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string

      blue1: string
      blue2: string
      brown: string
      background: string
      textColor: string
    }
  }
}