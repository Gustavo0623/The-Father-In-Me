import Image from "next/image"
import logo from "../../../public/logo.png"

export default function Header () {
    return (
        <nav className="flex justify-between bg-slate-900 p-4 ">
            <Image src={logo} alt="logo" width={300} height={100} className="w-1/4 h-auto rounded-xl" priority/>
        </nav>
    )
}