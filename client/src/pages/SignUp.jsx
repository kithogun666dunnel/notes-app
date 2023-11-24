import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import OAuth from "../components/OAuth"

function SignUp() {

  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value})
  }
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault() //to prevent the page from refreshing
    try {  
      const res = await fetch('/api/auth/signup', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success === false){
        setError(data.message)
        setLoading(false)
        return
      }
      console.log(data)
      setLoading(false)
      setError(null)
      navigate('/sign-in')
    } catch(error){
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChange} type="text" placeholder="username" className="border p-3 rounded-lg" id="username" />
        <input onChange={handleChange} type="email" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <input onChange={handleChange} type="password" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-60">{loading?"Loading...":"Sign Up"}</button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>

      </div>
      {error && <div className="text-red-800" >{error}</div>}
    </div>
  )
}

export default SignUp