
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CenterContent } from "./component/CenterContent"
import { Signup } from "./component/pages/Signup"
import { Signin } from "./component/pages/Signin"
import { Dashboard } from "./component/pages/Dashboard"
import { UserPageComponent } from "./component/pages/UserPageComponent"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<CenterContent />} />
          <Route path = '/signup' element={<Signup />}/>
          <Route path = '/signin' element={<Signin />} />
          <Route path = '/dashboard' element={<Dashboard />}/>
          <Route path = '/userpage' element = {<UserPageComponent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
