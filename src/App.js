import HomeScreen from './screens/HomeScreen'
import { NavBarContextProvider } from './context/cssContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApplyScreen from './screens/ApplyScreen'
import AfterApplyScreen from './screens/AfterApplyScreen'
import AdminScreen from './screens/AdminScreen'
import AddNewJob from './screens/AddNewJob'
import { QueryClientProvider, QueryClient } from 'react-query'
import ViewApplications from './screens/ViewApplications'
import LoginScreen from './screens/LoginScreen'
import DeleteJobs from './screens/DeleteJobs'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBarContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomeScreen />}></Route>
              <Route path='/jobs' element={<ApplyScreen />}></Route>
              <Route path='/thankyou' element={<AfterApplyScreen />}></Route>
              <Route path='/admin' element={<AdminScreen />}></Route>
              <Route path='/add' element={<AddNewJob />}></Route>
              <Route
                path='/applications'
                element={<ViewApplications />}
              ></Route>
              <Route path='/login' element={<LoginScreen />}></Route>
              <Route path='/deleteJobs' element={<DeleteJobs />}></Route>
            </Routes>
          </BrowserRouter>
        </NavBarContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
