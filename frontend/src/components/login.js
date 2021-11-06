import { useSession, signIn, signOut } from "next-auth/react"
export default function Login() {
    return (
        <div>
            <div className="h-screen flex justify-center items-center bg-gray-100">
                <button onClick={() => signIn()} className="bg-gray-900 px-5 hover:shadow-sm py-2 rounded shadow-xl text-white flex justify-center items-center gap-2 font-bold">
                    Login with Github
                </button>
            </div>
        </div>
    )
}