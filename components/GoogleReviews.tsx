import Image from "next/image";



export default function GoogleReviews(){
    return (
        <section className="max-content-width py-20">
            <div className="max-sm:text-center">
                <div className="inline-block">
                    <h2 className="text-4xl max-sm:text-3xl mb-2">Our Customers Love Us!</h2>
                    <hr className="w-1/2 border-primary border-2 max-sm:mx-auto" />
                </div>
            </div>

            <div className="lg:mx-[-48px]">
                <div className="w-full flex items-center mt-8">
                    <div className="pr-2 max-md:hidden">
                        <Image src={"/assets/arrow-circle-left.svg"} width={32} height={32} alt="rating" />
                    </div>

                    <div className="grid grid-cols-12 gap-4 w-full">
                        <div className="border rounded-lg px-4 py-12 flex flex-col items-center justify-start col-span-3 w-full max-md:col-span-4 max-sm:col-span-6">
                            <Image src={"/assets/person-0.jpg"} width={80} height={80} className="bg-gray-300 rounded-full w-[80px] h-[80px]" alt="rating" />
                            <div className="text-primary mt-4"><b>John M.</b></div>
                            <div className="flex items-center justify-center gap-4 mt-2">
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                            </div>
                            <p className="text-center mt-6">I tried their croissants, and they&apos;re the best I&apos;ve had outside of Paris. Flaky, buttery, and absolutely divine!</p>
                        </div>

                        <div className="border rounded-lg px-4 py-12 flex flex-col items-center justify-start col-span-3 w-full max-md:col-span-4 max-sm:col-span-6">
                            <Image src={"/assets/person-1.jpg"} width={80} height={80} className="bg-gray-300 rounded-full w-[80px] h-[80px]" alt="rating" />
                            <div className="text-primary mt-4"><b>Emily R.</b></div>
                            <div className="flex items-center justify-center gap-4 mt-2">
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star.svg"} width={16} height={16} alt="rating" />
                            </div>
                            <p className="text-center mt-6">The custom cake I ordered for my daughter&apos;s birthday was beyond perfect! Delicious and beautifully decorated. Highly recommend Sweet Creations!</p>
                        </div>
                        

                        <div className="border rounded-lg px-4 py-12 flex flex-col items-center justify-start col-span-3 w-full max-md:col-span-4 max-sm:col-span-6 max-sm:hidden">
                            <Image src={"/assets/person-2.jpg"} width={80} height={80} className="bg-gray-300 rounded-full w-[80px] h-[80px]" alt="rating" />
                            <div className="text-primary mt-4"><b>Erik M.</b></div>
                            <div className="flex items-center justify-center gap-4 mt-2">
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                            </div>
                            <p className="text-center mt-6">The macarons are heavenly! Perfectly balanced flavors and the texture is spot on. I&apos;ll be back for more!</p>
                        </div>

                        <div className="border rounded-lg px-4 py-12 flex flex-col items-center justify-start col-span-3 w-full max-md:hidden">
                            <Image src={"/assets/person-3.jpg"} width={80} height={80} className="bg-gray-300 rounded-full w-[80px] h-[80px]" alt="rating" />
                            <div className="text-primary mt-4"><b>Sophia T.</b></div>
                            <div className="flex items-center justify-center gap-4 mt-2">
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                                <Image src={"/assets/star-filled.svg"} width={16} height={16} alt="rating" />
                            </div>
                            <p className="text-center mt-6">The macarons are heavenly! Perfectly balanced flavors and the texture is spot on. I&apos;ll be back for more!</p>
                            </div>
                    </div>
                    
                    <div className="pl-2 max-md:hidden">
                        <Image src={"/assets/arrow-circle-right.svg"} width={32} height={32} alt="rating" />
                    </div>
                </div>
            </div>
        </section>
    )
}