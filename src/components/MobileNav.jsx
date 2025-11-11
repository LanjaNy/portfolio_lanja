"use client"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {CiMenuFries} from "react-icons/ci"

const Links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger>
                {/* <div className="text-[32px] text-accent">-</div> */}
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent classname="flex flex-col">
                <div className="mt-32 mb-40 text-2xl text-center">
                    <Link href="/">
                        <h1 className="text-4xl">Ny Lanja <span className="text-accent">*</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {Links.map((link, index) => {
                        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav