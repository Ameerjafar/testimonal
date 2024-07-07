
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CenterContent } from "./component/CenterContent"
import { Signup } from "./component/pages/Signup"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<CenterContent />} />
          <Route path = '/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
