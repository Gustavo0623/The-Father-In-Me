import Image from "next/image"

export default function Header () {
    return (
        <nav className="flex justify-between">
            <Image src="/./images/LOGO.JPEG" alt="logo" width={300} height={100} className="w-auto h-auto" priority/>
        </nav>
    )
}