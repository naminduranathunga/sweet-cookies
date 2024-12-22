import Image from "next/image";


export default function ProductHighlightsSection(){
    return (
        <section className="w-full bg-secondary p-0 grid grid-cols-12 max-md:grid-cols-6 overflow-x-clip overflow-y-visible">
            <div className="grid grid-cols-6 col-span-6">
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <Image src={"/assets/product-highlight-1.jpg"} alt="Product Highlight 1" className="w-full aspect-[1.33] max-sm:aspect-square object-cover" width={500} height={500} />
                </div>
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <h3 className="text-3xl max-sm:text-xl">Pastries</h3>
                </div>
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <h3 className="text-3xl max-sm:text-xl">Custom Cakes</h3>
                </div>
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <Image src={"/assets/product-highlight-cakes.jpg"} alt="Product Highlight 1" className="w-full aspect-[1.33] max-sm:aspect-square object-cover" width={500} height={500} />
                </div>
            </div>
            <div className="grid grid-cols-6 col-span-6">
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <Image src={"/assets/product-highlight-cupcakes.jpg"} alt="Product Highlight 1" className="w-full aspect-[1.33] max-sm:aspect-square object-cover" width={500} height={500} />
                </div>
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <h3 className="text-3xl max-sm:text-xl">Cupcakes</h3>
                </div>
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <h3 className="text-3xl max-sm:text-xl">Beverages</h3>
                </div>
                <div className="col-span-3 flex items-center bg-secondary justify-center hover:shadow-xl hover:scale-105 hover:z-20 transition duration-300">
                    <Image src={"/assets/product-highlight-beverages.jpg"} alt="Product Highlight 1" className="w-full aspect-[1.33] max-sm:aspect-square object-cover" width={500} height={500} />
                </div>
            </div>
            
            
            
        </section>
    )
}