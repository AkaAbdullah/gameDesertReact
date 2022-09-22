import HomeScreen from './screens/HomeScreen'
import { NavBarContextProvider } from './context/cssContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApplyScreen from './screens/ApplyScreen'
import AfterApplyScreen from './screens/AfterApplyScreen'

function App() {
  return (
    <>
      <NavBarContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/jobs' element={<ApplyScreen />}></Route>
            <Route path='/thankyou' element={<AfterApplyScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </NavBarContextProvider>
    </>
  )
}

export default App
