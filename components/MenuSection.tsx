import Button from "./Button";
import { Cake, Coffee } from 'iconsax-react';

export default function MenuSection() {

    const menuPatternBg = {
        backgroundImage: "url('/assets/menu-pattern.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    return (
        <section className="max-content-width py-20 max-sm:py-12">
            <div className="flex items-center justify-between gap-10 max-sm:flex-col ">
                <div className="w-full text-center">
                    <div className="inline-block">
                        <h2 className="text-4xl mb-2">Our Menu</h2>
                        <hr className="w-1/2 border-primary border-2 mx-auto" />
                    </div>

                    <div className="menu-wrapper rounded-lg overflow-clip" style={menuPatternBg}>
                        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-12 my-12 text-left p-12 border-primary border-dashed border-2 rounded-lg bg-yellow-50 bg-opacity-90 font-medium " >
                            <div>
                                <div className="inline-block">
                                    <h5 className="text-xl mb-1 flex gap-1"><Cake color="currentColor" size={"1em"} /> Cakes</h5>
                                </div>
                                <ul>
                                    <li>Custom Birthday Cakes</li>
                                    <li>Wedding Cakes with Elegant Designs</li>
                                    <li>Seasonal Theme Cakes</li>
                                </ul>
                            </div>

                            <div>
                                <div className="inline-block">
                                    <h5 className="text-xl mb-1 flex gap-1"><Cake color="currentColor" size={"1em"} /> Macarons</h5>
                                </div>
                                <ul>
                                    <li>Classic Vanilla</li>
                                    <li>Raspberry Delight</li>
                                    <li>Pistachio Bliss</li>
                                </ul>
                            </div>
                            <div>
                                <div className="inline-block">
                                    <h5 className="text-xl mb-1 flex gap-1"><Coffee color="currentColor" size={"1em"} />Beverages</h5>
                                </div>
                                <ul>
                                    <li>Vegan Brownies</li>
                                    <li>Gluten-Free Cookies</li>
                                    <li>Signature Hot Chocolate Bombs</li>
                                </ul>
                            </div>
                            <div>
                                <div className="inline-block">
                                    <h5 className="text-xl mb-1 flex gap-1"><Cake color="currentColor" size={"1em"} /> Cupcakes</h5>
                                </div>
                                <ul>
                                    <li>Classic Vanilla Cupcakes</li>
                                    <li>Red Velvet Cupcakes</li>
                                    <li>Seasonal Flavors</li>
                                </ul>
                            </div>
                            <div>
                                <div className="inline-block">
                                    <h5 className="text-xl mb-1 flex gap-1"><Cake color="currentColor" size={"1em"} /> Specialty Treats</h5>
                                </div>
                                <ul>
                                    <li>Vegan Brownies</li>
                                    <li>Gluten-Free Cookies</li>
                                    <li>Signature Hot Chocolate Bombs</li>
                                </ul>
                            </div>
                            <div>
                                <div className="inline-block">
                                    <h5 className="text-xl mb-1 flex gap-1"><Cake color="currentColor" size={"1em"} /> Cookies</h5>
                                </div>
                                <ul>
                                    <li>Chocolate Chip Cookies</li>
                                    <li>Oatmeal Raisin Cookies</li>
                                    <li>Double Chocolate Chunk Cookies</li>
                                </ul>
                            </div>
                            <div>
                                <div className="inline-block">
                                    <h5 className="text-xl mb-1 flex gap-1"><Cake color="currentColor" size={"1em"} /> Pastries</h5>
                                </div>
                                <ul>
                                    <li>Butter Croissants</li>
                                    <li>Fruit Tarts</li>
                                    <li>Cream-Filled Eclairs</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="mt-4">
                        <Button>Download PDF</Button>
                    </div>
                </div>
                
            </div>
        </section>
    )
}