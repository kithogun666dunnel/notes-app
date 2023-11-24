import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice"
import OAuth from "../components/OAuth"

function SignIn() {

  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value})
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading, error} = useSelector((state)=>state.user)

  const handleSubmit = async(e) => {
    e.preventDefault() //to prevent the page from refreshing
    
    try {  
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success === false){
        dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data.user))
      navigate('/create-note')
    } catch(error){
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChange} type="email" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <input onChange={handleChange} type="password" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-60">{loading?"Loading...":"Sign In"}</button>
      
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p> Dont have an account ?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>

      </div>
      {error && <div className="text-red-800" >{error}</div>}
    </div>
  )
}

export default SignIn