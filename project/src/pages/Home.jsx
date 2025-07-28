import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex justify-center p-10">
        <h1 className="text-6xl lg:text-8xl">
          <span className="text-green-500">TCG</span> Log
        </h1>
      </div>

      <div className="flex justify-center items-center h-100">
        <div className="w-3/4 lg:w-200 h-3/4 bg-gray-500">image/video placeholder</div>
      </div>

      <div className="flex h-60 justify-center">
        <div className="flex lg:gap-50 justify-center items-center w-full">
          <Link to="/login"><button className="auth-btn shadow-lg">Log In</button></Link>
          <Link to="/signup"><button className="auth-btn shadow-lg">Sign Up</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Home