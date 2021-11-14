import Dropdown from "./dropdown"
import { useSession } from "next-auth/react"
import Logo from "./logo"
import ServiceMenu from './serviceMenu'
export default function () {

    const { data: session } = useSession()

    return <div className="max-w-full py-5 flex justify-between px-20 items-center">
        <Logo />


        <div className="flex items-center gap-5">
            <ServiceMenu />
            <Dropdown data={session} />

        </div>
    </div>
}