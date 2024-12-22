import Image from "next/image";
import Button from "./Button";


export default function AboutSection() {
    return (
        <section className="max-content-width py-20">
            <div className="flex items-center justify-between gap-10 max-sm:flex-col ">
                <div className="w-1/2 max-sm:w-full max-sm:text-center">
                    <div className="inline-block">
                        <h2 className="text-4xl max-sm:text-3xl mb-2">About Us</h2>
                        <hr className="w-1/2 border-primary border-2 max-sm:mx-auto" />
                    </div>

                    <p className="mt-8">At Sweet Creations, we believe every celebration deserves a little sweetness. From custom cakes to artisan pastries, our bakery specializes in crafting treats that are as beautiful as they are delicious. Using only the finest ingredients, we pour love and creativity into every order, ensuring your special moments are unforgettable. Whether it&apos;s a birthday, wedding, or just because, we&apos;re here to make your sweetest dreams come true!</p>
                    <div className="mt-4">
                        <Button>Check Our Menu</Button>
                    </div>
                </div>
                <div className="w-1/2 max-sm:w-full flex items-center justify-center">
                    <div >
                        <div className="p-4 rounded-lg shadow-lg w-1/2 border bg-white ml-[10%] relative hover:scale-105 transition duration-500">
                            <Image src={"/assets/about-image-framed.jpg"} alt="About Image" className="w-full" width={500} height={500} />
                        </div>
                        <div className="p-4 rounded-lg shadow-lg w-1/2 border mt-[-50%] ml-[30%] relative hover:scale-105 transition duration-500 bg-white">
                            <Image src={"/assets/about-image-framed.jpg"} alt="About Image" className="w-full" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}