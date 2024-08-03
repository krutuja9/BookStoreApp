import { Link } from "react-router-dom"
function Signup() {
  return (
    <>

      <div className="flex h-screen items-center justify-center ">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg">Signup </h3>
            {/* name */}
            <div className="mt-4 space-y-2">
              <span>Name</span><br />
              <input type="email"
                placeholder="Enter Your Name"
                className="w-80 px-3 py-1 border rounded-md outline-none "
              />
            </div>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none "
              />
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input type="text"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none "
              />
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Singup</button>
              <p>HAve account?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">

                  Login

                </Link> </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup
