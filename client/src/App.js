import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PrivateRoute from './components/PrivateRoute'
import NoteForm from './pages/NoteForm'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        <Route element={<PrivateRoute />} >
        <Route path='/create-note' element={<NoteForm />} />
        <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </Router>    
  )
}

export default App