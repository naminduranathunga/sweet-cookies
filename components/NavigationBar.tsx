import Image from "next/image";
import Link from "next/link";



export default function NavigationBar(){
    return (
        <header className="w-full flex items-center justify-center">
            <nav className="w-full max-content-width flex items-center justify-center h-24">
                <ul className="p-0 flex items-center justify-center gap-10 text-lg font-medium max-sm:hidden">
                    <li>
                        <Link className="hover:underline" title="Home" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:underline" title="About us" href="/">About</Link>
                    </li>
                    
                    <li>
                        <Link className="hover:underline" title="Home" href="/">Map</Link>
                    </li>
                    <li className="w-40 relative">
                        <Image src={"/assets/logo.png"} className="absolute top-[-2rem] w-[160px] h-[160px] z-30 bg-white rounded-full" alt="Logo" width={160} height={160} />
                    </li>
                    <li>
                        <Link className="hover:underline" title="Our menu" href="/menu">Our Menu</Link>
                    </li>
                    <li>
                        <Link className="hover:underline" title="Contact us" href="/">Contact Us</Link>
                    </li>
                </ul>

                <ul className="md:hidden flex items-center justify-between w-full">
                    <Image src={"/assets/logo.png"} className="w-[80px] h-[80px] z-30 bg-white rounded-full" alt="Logo" width={160} height={160} />
                    <Image src={"/assets/menu.svg"} width={36} height={36} alt="Menu" />
                </ul>
            </nav>
        </header>
    )
}