import { GlobalStyle } from './styles/global-styles'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { usePersistedState } from './utils/usePersistedState'
import { ChangeEventHandler } from 'react'
import { RoutersMain } from './routes/RoutersMain'
import { Header } from './components/Header'



function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)



  const handleClick = (): ChangeEventHandler<HTMLInputElement> | void => {
      setTheme(theme.title === 'light'? dark : light)

  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header handleClick={handleClick} />
      <RoutersMain />
    </ThemeProvider>
    </>
  )
}

export default App
