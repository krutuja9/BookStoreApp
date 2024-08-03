import Footer from "../componenets/Footer"
import Navbar from "../componenets/Navbar"
import Course from '../componenets/Course'



function Courses() {
  
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  )
}

export default Courses
