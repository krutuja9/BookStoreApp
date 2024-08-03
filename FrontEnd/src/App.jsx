import Courses from "./courses/Courses"
import Home from "./home/Home"
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}
    <Routes >
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/course" element={<Courses></Courses>}></Route>
    </Routes>
    </>
  )
}

export default App
