import Image from "next/image";
import Link from "next/link";


export default function Footer(){
    return (
        <footer className="pt-10 bg-secondary">
            <div className="max-content-width grid grid-cols-6 pb-10 max-sm:grid-cols-1 max-sm:gap-8">
                <div className="max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
                    <Image src={"/assets/logo.png"} width={100} height={50} alt="Logo" />
                    <p className="text-xs mt-1"><i>&ldquo;Order your custom treats today and make your moments unforgettable!&rdquo;</i></p>
                </div>

                <div className="max-sm:hidden"></div>
                <div className="max-sm:hidden"></div>
                <div className="max-sm:hidden"></div>
                <div className="max-sm:text-center">
                    <div className="inline-block">
                        <h5 className="text-xl mb-1">Quick Links</h5>
                        <hr className="w-1/2 border-primary border-2" />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <Link className="hover:underline" href="/">Home</Link>
                        <Link className="hover:underline" href="/about">About Us</Link>
                        <Link className="hover:underline" href="/menu">Menu</Link>
                        <Link className="hover:underline" href="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className="max-sm:text-center">
                    <div className="inline-block">
                        <h5 className="text-xl mb-1">Follow Us</h5>
                        <hr className="w-1/2 border-primary border-2" />
                    </div>
                    <div className="flex gap-4 mt-4 max-sm:justify-center">
                        <Image src={"/assets/facebook.svg"} width={24} height={24} alt="facebook" />
                        <Image src={"/assets/youtube.svg"} width={24} height={24} alt="Youtube" />
                        <Image src={"/assets/whatsapp.svg"} width={24} height={24} alt="Whatsapp" />
                    </div>
                </div>
            </div>

            <div className="text-center py-4 bg-secondaryDark text-sm px-4">
                Copyrights (C) 2024. <Link href={"https://flexaro.net"} target="_blank" title="Flexaro (Pvt) Ltd." className="font-medium hover:underline">Flexaro (Pvt) Ltd.</Link>
            </div>
        </footer>
    )
}