import Cart from "../icons/cart";
export default function ProductItem(){
    return(
        <div className="p-4 rounded-[2rem] card-style text-white">
            <img 
                src="/lambertus2.jpg" 
                alt="produk"
                className='p-4 rounded-[2rem] mx-auto w-[100%] h-auto'
            />
            <div className="grid grid-cols-2 items-center my-2 mx-3">
                <p className="text-left font-semibold text-3xl ">
                    Lambertus
                </p>
                <h4 className="text-right font-semibold text-3xl">
                    10$
                </h4>
            </div>
            <p className="text-justify mx-3 ">
                Lambertus Eau De Parfum adalah parfum pria dengan rock couture yang ikonik dari Yves Saint Laurent. Waktunya tampil percaya diri, mempesona, dan menggoda dengan aroma Parfum Lambertus yang dirancang khusus untuk pria.
            </p>
            <div className="text-right">
                <button className=" card-style2 text-black rounded-full px-4 py-4 mx-3 group hover:bg-secondary/50 transition-all">
                {/* Add to Cart $10 */}
                <Cart className="h-8"/>
            </button>
            </div>
        </div>
        
    )
}
