import Image from "next/image"
import logo from "../../../public/logo.png"

export default function Header () {
    return (
        <nav className="flex justify-between bg-slate-900 p-4 ">
            <Image src={logo} alt="logo" className="w-64 min-w-8 h-auto rounded-xl" priority/>
        </nav>
    )
}