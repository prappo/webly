import { useSession, signIn, signOut } from "next-auth/react"

import Loading from "./loading"
import Unauthorized from './unauthorized'
import { useRouter } from 'next/router';
import Login from './login'
import Nav from './nav'
import Footer from './footer'
export default function Layout({ children }) {

    const { data: session, status } = useSession()

    const { pathname } = useRouter();


    if (status === "loading") {
        return <Loading />
    }

    if (status === "authenticated") {
        return <main>
            <div className="h-screen bg-gray-100 flex flex-col">
                <Nav />
                <div className="h-full">
                    {children}
                </div>


               <Footer />
            </div>

        </main>
    }
    if (pathname === '/login') {
        return <Login />

    } else {
        return <Login />
    }


}