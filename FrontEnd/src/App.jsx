import Signup from "./componenets/Signup"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    {/* <Home />
    <Course /> */}
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes >
      <Route path="/" element={<Home></Home>} />
      <Route path="/course" element={<Courses></Courses>}/>
      <Route path="signup" element={<Signup></Signup>} />
    </Routes>
    </div>
    </>
  )
}

export default App
