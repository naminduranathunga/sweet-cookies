import Image from "next/image"
import Button from "./Button"


export default function HeroSection() {

    const heroBgStyle = {
        backgroundImage: "url('/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
    }
    return (
        <section className="w-full bg-secondary min-h-[85vh] relative" style={heroBgStyle}>
            <div className="absolute inset-0 bg-secondary opacity-70 z-[1]"></div>
            <div className="absolute inset-0 flex z-[2]">
                <div className="max-content-width flex h-full items-center justify-center w-full max-sm:flex-col">
                    <div className="flex flex-col w-1/2 max-sm:w-full max-sm:items-center max-sm:text-center">
                        <h1 className="text-5xl max-sm:text-5xl mb-4 text-black">Where Every Bite is a <br />
                            Sweet Celebration!
                        </h1>
                        <p className="mb-6 text-xl">Order your custom treats today and make your moments unforgettable!</p>
                        <div className="mt-4">
                            <Button>Check Our Menu</Button>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 items-center">
                        <Image src={"/assets/hero-image-with-logo.png"} alt="Hero Image" className="w-[450px]" width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    )
}