import HomeScreen from './screens/HomeScreen'
import { NavBarContextProvider } from './context/cssContext'

function App() {
  return (
    <>
      <NavBarContextProvider>
        <HomeScreen />
      </NavBarContextProvider>
    </>
  )
}

export default App
