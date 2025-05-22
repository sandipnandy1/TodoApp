import { useAuth0 } from "@auth0/auth0-react"

function Login() {
    const { loginWithRedirect } = useAuth0()

    const handleLogin = () => {
        loginWithRedirect()
    }

    return (
        <div className="bg-[#1e0d0b] min-h-screen flex flex-col justify-center py-8">
            <div className="grid grid-flow-row w-full max-w-2xl mx-auto rounded-full px-4 py-3">
                <h1 className="text-3xl font-bold text-center mb-8 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#e0d3cf] to-[#e08a6d]">Welcome to Your Todo App</h1>
                <div className="flex flex-col items-center">

                <button onClick={handleLogin} className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                    Login
                </button>
                </div>
            </div>
        </div>
    )
}

export default Login