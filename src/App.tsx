import { HomePage } from './page/home-page'
import { GlobalStyle } from './styles/global-styles'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { useDispatch } from 'react-redux'
import { toggleTheme } from './redux/useSlice'
import { usePersistedState } from './utils/usePersistedState'



function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const dispatch = useDispatch()


  const handleClick = ():void => {
      setTheme(theme.title === 'light'? dark : light)
      dispatch(toggleTheme(theme))
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <HomePage handleClick={handleClick}/>
    </ThemeProvider>
    </>
  )
}

export default App
